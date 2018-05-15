import {
  RequirementFunction,
  StudentData,
  Program,
  CutoffScores
} from "shared/types";

import { SuccessChance } from "shared/enums";

import { store } from "shared/redux/store";
const getSECutoffScoresTable = () => store.getState().data.seCutoffScores;

const sePointCalc = (student: StudentData, program: Program): number | null => {

  // if any needed student data is null, return early with null
  if (student.nweaPercentileMath === null ||
    student.nweaPercentileRead === null ||
    student.subjGradeMath === null ||
    student.subjGradeRead === null ||
    student.subjGradeSci === null ||
    student.subjGradeSocStudies === null ||
    student.seTestPercentile === null
  ) {

    return null;
  }


  // calculate points for NWEA scores
  const NWEA_SCORE_CONSTANT = 1.515;
  const nweaMathPoints = Math.round(student.nweaPercentileMath * NWEA_SCORE_CONSTANT);
  const nweaReadPoints = Math.round(student.nweaPercentileRead * NWEA_SCORE_CONSTANT);

  // calculate points for subjGrades
  const gradePointsLookup = {
    "A": 75,
    "B": 50,
    "C": 25,
    "D": 0,
    "F": 0,
  }
  const subjGradeMathPoints = gradePointsLookup[student.subjGradeMath];
  const subjGradeReadPoints = gradePointsLookup[student.subjGradeRead];
  const subjGradeSciPoints = gradePointsLookup[student.subjGradeSci];
  const subjGradeSocStudiesPoints = gradePointsLookup[student.subjGradeSocStudies];

  // calculate score component for SE Test percentile 
  const SE_TEST_PERCENTILE_CONSTANT = 3.03; 
  const seTestPoints = Math.round(student.seTestPercentile * SE_TEST_PERCENTILE_CONSTANT);
  
  const sePoints = nweaMathPoints +
    nweaReadPoints +
    subjGradeMathPoints +
    subjGradeReadPoints + 
    subjGradeSciPoints +
    subjGradeSocStudiesPoints +
    seTestPoints;

  return sePoints;
};

const seLookup  = (student: StudentData, program: Program): CutoffScores | null  => {
  // TODO: this ignores rank cutoff scores, assuming that if you make it
  // past your tier cutoff scores you're good. Make double sure that's a
  // good assumption.
  const cutoff = getSECutoffScoresTable()[program.schoolID];
  if (cutoff === undefined) {
    return null;
  }
  if (student.location === null) {
    return null;
  }

  switch(student.location.tier) {
    case '1':
      return cutoff.tier1; 
    case '2':
      return cutoff.tier2;
    case '3':
      return cutoff.tier3;
    case '4':
      return cutoff.tier4;
    default:
      return null;
  }
};

export const sePointSystem: RequirementFunction = (student, program)  => {
  // if student data is not initialized, return early with NOTIMPLEMENTED
  if (student.nweaPercentileMath === null ||
    student.nweaPercentileRead === null ||
    student.subjGradeMath === null ||
    student.subjGradeRead === null ||
    student.subjGradeSci === null ||
    student.subjGradeSocStudies === null ||
    student.seTestPercentile === null ||
    student.location === null
  ) {

    return SuccessChance.NOTIMPLEMENTED;
  }
  
  const points = sePointCalc(student, program);
  const prevScores= seLookup(student, program);
  if (prevScores === null) {
    return SuccessChance.NOTIMPLEMENTED;
  }

  if (points === null || isNaN(points)) {
    console.error("received NaN for sePointCalc");
    return SuccessChance.NOTIMPLEMENTED;
  }
  if (isNaN(prevScores.min) || isNaN(prevScores.avg) || isNaN(prevScores.max)) {
    console.error("received NaN for seCutoffLookup");
    return SuccessChance.NOTIMPLEMENTED;
  }

  if (points >= prevScores.max) {
    return SuccessChance.CERTAIN;
  } else if (points >= prevScores.avg) {
    return SuccessChance.LIKELY;
  } else if (points >= prevScores.min) {
    return SuccessChance.UNCERTAIN; 
  } else {
    return SuccessChance.NONE;
  }
};

