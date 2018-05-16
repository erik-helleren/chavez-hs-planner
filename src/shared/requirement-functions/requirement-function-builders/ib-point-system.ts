import { 
  CutoffScores,
  Program,
  RequirementFunction,
  StudentData,
} from "shared/types";

import { pointSystem } from "./point-system";
import { ifInAttendBound } from "./filters";

import { store } from "shared/redux/store";

const getIBCutoffTable = () => {
  return store.getState().data.nonSECutoffScores;
};

const ibPointCalc = (student: StudentData, program: Program): number | null => {

  // if any needed student data is null, return early with null
  if (student.nweaPercentileMath === null ||
    student.nweaPercentileRead === null ||
    student.subjGradeMath === null ||
    student.subjGradeRead === null ||
    student.subjGradeSci === null ||
    student.subjGradeSocStudies === null) {

    return null;
  }

  const IB_NWEA_SCORE_CONSTANT = 2.2727;
  const IB_ATTEND_BOUND_BONUS_PTS = 50;

  // calculate points for NWEA scores
  const nweaMathPoints = Math.round(student.nweaPercentileMath * IB_NWEA_SCORE_CONSTANT);
  const nweaReadPoints = Math.round(student.nweaPercentileRead * IB_NWEA_SCORE_CONSTANT);

  // calculate score component for subj grades
  const gradePointsLookup = {
    "A": 112.5,
    "B": 75,
    "C": 38,
    "D": 0,
    "F": 0,
  }
  const subjGradeMathPoints = gradePointsLookup[student.subjGradeMath];
  const subjGradeReadPoints = gradePointsLookup[student.subjGradeRead];
  const subjGradeSciPoints = gradePointsLookup[student.subjGradeSci];
  const subjGradeSocStudiesPoints = gradePointsLookup[student.subjGradeSocStudies];
  
  // if student is in attendance bound of the IB program's school, the student gets a bonus
  // TODO figure out what to do for schools without attendance bounds, like BACK OF THE YARDS HS
  const attendBonus = ifInAttendBound(student, program) ? IB_ATTEND_BOUND_BONUS_PTS : 0;

  const ibPoints = nweaMathPoints +
    nweaReadPoints +
    subjGradeMathPoints +
    subjGradeReadPoints + 
    subjGradeSciPoints +
    subjGradeSocStudiesPoints +
    attendBonus;

  return ibPoints;
};  

const ibCutoffLookup = (student: StudentData, program: Program): CutoffScores => {
  const cutoff = getIBCutoffTable()[program.id];
  if (cutoff === undefined) {
    throw new Error(`School ${program.schoolNameLong} not found in IB Cutoff scores`); 
  }
  return cutoff;
};

export const ibPointSystem: RequirementFunction = pointSystem(ibPointCalc, ibCutoffLookup);

