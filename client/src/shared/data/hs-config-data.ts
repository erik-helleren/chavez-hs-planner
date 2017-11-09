import HSData from "shared/types/hs-data";
import HSRequirementFunction from "shared/types/hs-requirements-function";
import StudentData from "shared/types/student-data";
import {calculateSEPoints, calculateIBPoints} from "shared/util/hs-calc-utils";


const noRequirement: HSRequirementFunction = (data) => true;

const lotterySelection: HSRequirementFunction = (data) => false;

// IMPLEMENT
// ---------
const magnetApplicationRequirement: HSRequirementFunction = (data) => true;
const magnetSelectionRequirement: HSRequirementFunction = (data) => false;

const militaryApplicationRequirement: HSRequirementFunction = (data) => true;
const militarySelectionRequirement: HSRequirementFunction = (data) => false;

const selectiveCTEApplicationRequirement: HSRequirementFunction = (data) => true;
const selectiveCTESelectionRequirement: HSRequirementFunction = (data) => true;
// ---------

const standardApplicationRequirements: HSRequirementFunction = (data): boolean => {
  const nweaMathPercentile = data.scores.nweaPercentileMath;
  const nweaReadPercentile = data.scores.nweaPercentileRead;
  if (!data.ell && !data.iep) {
    if (nweaMathPercentile > 24 && nweaReadPercentile > 24) {
      return true;
    }
  // if students are ELs or have IEP, then their Math and Reading RIT
  // percentiles combined must be above 48th.
  } else {
    if (nweaMathPercentile + nweaReadPercentile > 48) {
      return true;
    }
  }
  return false;
};

interface SECutoffScoreSet {
  min: number
  avg: number
  max: number
}

interface SECutoffScores {
  rank: SECutoffScoreSet
  tier1: SECutoffScoreSet
  tier2: SECutoffScoreSet
  tier3: SECutoffScoreSet
  tier4: SECutoffScoreSet
}

const createSESelectionReqFn = (cutoffScores: SECutoffScores): HSRequirementFunction => {
  return (data, additionalRequirements): boolean => {
    // return true if student's scores are higher than midway between minimum score and average
    // NOTE: this is pretty arbitrary, but there's no good way of forecasting for sure whether or not
    // scores are good enough to get into a SE score in the future, as acceptances are based on
    // the top applicants each round.
    const score: number = calculateSEPoints(data, additionalRequirements);
    let studentTierCutoffs;
    switch(data.tier){
      case "1":
        studentTierCutoffs = cutoffScores.tier1;
        break;
      case "2":
        studentTierCutoffs = cutoffScores.tier2;
        break;
      case "3":
        studentTierCutoffs = cutoffScores.tier3;
        break;
      case "4":
        studentTierCutoffs = cutoffScores.tier4;
        break;
      default:
        throw new Error(`Unrecognized tier: ${data.tier}`);
    }
    return score >= studentTierCutoffs.avg - ((studentTierCutoffs.avg - studentTierCutoffs.min) / 2);
  };
};

const createIBSelectionReqFn = (cutoffScore: number): HSRequirementFunction => {
  return (data, additionalRequirements?) => {
    const score = calculateIBPoints(data);
    return score >= cutoffScore;
  }
};

export const HSConfigData: HSData = [

  {
    longName: "Selective Enrollment",
    shortName: "SE",
    additionalRequirements: [],
    requirementsFunction: standardApplicationRequirements,
    highschools: [
      {
        longName: "Gwendolyn Brooks College Preparatory Academy",
        shortName: "Brooks",
        initials: "B",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 834.15, min: 799,  max: 897},
          tier1: {avg: 700.76, min: 652,  max: 796},
          tier2: {avg: 740.36, min: 687,  max: 795},
          tier3: {avg: 768.40, min: 750,  max: 792},
          tier4: {avg: 761.50, min: 723,  max: 797},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "John Hancock College Preparatory High School",
        shortName: "Hancock",
        initials: "H",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 823.92, min: 794,  max: 880},
          tier1: {avg: 706.40, min: 664,  max: 791},
          tier2: {avg: 757.68, min: 736,  max: 790},
          tier3: {avg: 772.69, min: 753,  max: 791},
          tier4: {avg: 740.63, min: 672,  max: 792},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "William Jones College Preparatory High School",
        shortName: "Jones",
        initials: "J",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 893.81, min: 889,  max: 900},
          tier1: {avg: 816.86, min: 771,  max: 887},
          tier2: {avg: 851.57, min: 823,  max: 889},
          tier3: {avg: 874.12, min: 861,  max: 889},
          tier4: {avg: 886.69, min: 883,  max: 889},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Dr Martin Luther King Jr College Prep",
        shortName: "King HS",
        initials: "MLK",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 735.59, min: 682,  max: 859},
          tier1: {avg: 632.20, min: 600,  max: 680},
          tier2: {avg: 635.16, min: 601,  max: 679},
          tier3: {avg: 645.55, min: 608,  max: 682},
          tier4: {avg: 634.43, min: 600,  max: 674},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Albert G Lane Technical High School",
        shortName: "Lane Tech HS",
        initials: "LT",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 878.11, min: 866,  max: 900},
          tier1: {avg: 738.79, min: 692,  max: 863},
          tier2: {avg: 808.46, min: 777,  max: 865},
          tier3: {avg: 839.69, min: 818,  max: 866},
          tier4: {avg: 855.13, min: 843,  max: 865},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Robert Lindblom Math & Science Academy",
        shortName: "Lindblom HS",
        initials: "L",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 813.87, min: 774,  max: 895},
          tier1: {avg: 692.14, min: 655,  max: 771},
          tier2: {avg: 732.82, min: 700,  max: 774},
          tier3: {avg: 743.98, min: 720,  max: 774},
          tier4: {avg: 717.92, min: 672,  max: 773},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Northside College Preparatory High School",
        shortName: "Northside Prep HS",
        initials: "NP",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 898.85, min: 896,  max: 900},
          tier1: {avg: 820.31, min: 757,  max: 892},
          tier2: {avg: 867.55, min: 843,  max: 895},
          tier3: {avg: 889.04, min: 880,  max: 895},
          tier4: {avg: 893.92, min: 891,  max: 896},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Walter Payton College Preparatory High School",
        shortName: "Payton HS",
        initials: "P",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 899.03, min: 898,  max: 900},
          tier1: {avg: 837.66, min: 771,  max: 897},
          tier2: {avg: 875.60, min: 846,  max: 897},
          tier3: {avg: 886.97, min: 875,  max: 898},
          tier4: {avg: 895.59, min: 894,  max: 898},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "South Shore Intl College Prep High School",
        shortName: "South Shore Intl HS",
        initials: "SS",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 725.28, min: 678,  max: 837},
          tier1: {avg: 621.10, min: 601,  max: 674},
          tier2: {avg: 637.17, min: 600,  max: 677},
          tier3: {avg: 632.43, min: 601,  max: 677},
          tier4: {avg: 634.77, min: 603,  max: 672},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "George Westinghouse College Prep",
        shortName: "Westinghouse HS",
        initials: "W",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 799.38, min: 766,  max: 883},
          tier1: {avg: 706.44, min: 667,  max: 760},
          tier2: {avg: 733.79, min: 708,  max: 765},
          tier3: {avg: 730.68, min: 695,  max: 765},
          tier4: {avg: 691.26, min: 618,  max: 766},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Whitney M Young Magnet High School",
        shortName: "Young HS",
        initials: "Y",
        selectionRequirementsFunction: createSESelectionReqFn({
          rank: {avg: 890.34, min: 882,  max: 900},
          tier1: {avg: 823.25, min: 780,  max: 880},
          tier2: {avg: 846.26, min: 821,  max: 880},
          tier3: {avg: 860.88, min: 849,  max: 882},
          tier4: {avg: 877.46, min: 874,  max: 882},
        }),
        applicationRequirementsFunction: standardApplicationRequirements
      },
    ],
  },

  {
    longName: "International Baccalaureate (IB)",
    shortName: "IB",
    additionalRequirements: [],
    requirementsFunction: standardApplicationRequirements,
    highschools: [
      {
        longName: "Roald Amundsen High School - IB Program",
        shortName: "Amundsen HS",
        initials: "Am",
        selectionRequirementsFunction: createIBSelectionReqFn(600),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Back of the Yards High School - IB Program",
        shortName: "Back of the Yards HS",
        initials: "BotY",
        selectionRequirementsFunction: createIBSelectionReqFn(609),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "William J Bogan High School - IB Program",
        shortName: "Bogan HS",
        initials: "Bo",
        selectionRequirementsFunction: createIBSelectionReqFn(350),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Bronzeville Scholastic Academy High School - IB Program",
        shortName: "Bronzeville HS - IB",
        initials: "Br",
        selectionRequirementsFunction: createIBSelectionReqFn(450),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Roberto Clemente Community Academy High School - IB Program",
        shortName: "Clemente HS - IB",
        initials: "Cl",
        selectionRequirementsFunction: createIBSelectionReqFn(490),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Marie Sklodowska Curie Metropolitan High School - IB Program",
        shortName: "Curie HS - IB",
        initials: "Cu",
        selectionRequirementsFunction: createIBSelectionReqFn(650),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "David G Farragut Career Academy High School - IB Program",
        shortName: "Farragut HS - IB",
        initials: "Fa",
        selectionRequirementsFunction: createIBSelectionReqFn(350),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Gurdon S Hubbard High School - IB Program",
        shortName: "Hubbard HS - IB",
        initials: "Hu",
        selectionRequirementsFunction: createIBSelectionReqFn(600),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Hyde Park Academy High School - IB Program",
        shortName: "Hyde Park HS - IB",
        initials: "HP",
        selectionRequirementsFunction: createIBSelectionReqFn(375),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Benito Juarez Community Academy High School - IB Program",
        shortName: "Juarez HS - IB",
        initials: "J",
        selectionRequirementsFunction: createIBSelectionReqFn(500),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Thomas Kelly High School - IB Program",
        shortName: "Kelly HS - IB",
        initials: "Kel",
        selectionRequirementsFunction: createIBSelectionReqFn(650),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "John F Kennedy High School - IB Program",
        shortName: "Kennedy HS - IB",
        initials: "Ken",
        selectionRequirementsFunction: createIBSelectionReqFn(600),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Lincoln Park High School - IB Program",
        shortName: "Lincoln Park HS - IB",
        initials: "LP",
        selectionRequirementsFunction: createIBSelectionReqFn(819),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Morgan Park High School - IB Program",
        shortName: "Morgan Park HS - IB",
        initials: "MP",
        selectionRequirementsFunction: createIBSelectionReqFn(500),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Ogden International High School - IB Program",
        shortName: "Ogden HS - IB",
        initials: "Og",
        selectionRequirementsFunction: createIBSelectionReqFn(520),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Charles Allen Prosser Career Academy High School - IB Program",
        shortName: "Prosser HS - IB",
        initials: "Pr",
        selectionRequirementsFunction: createIBSelectionReqFn(600),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Carl Schurz High School - IB Program",
        shortName: "Schurz HS - IB",
        initials: "Sch",
        selectionRequirementsFunction: createIBSelectionReqFn(360),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Nicholas Senn High School - IB Program",
        shortName: "Senn HS - IB",
        initials: "Sch",
        selectionRequirementsFunction: createIBSelectionReqFn(575),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "South Shore High School - IB Program",
        shortName: "South Shore HS - IB",
        initials: "SS",
        selectionRequirementsFunction: createIBSelectionReqFn(427),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "Charles P Steinmetz College Preparatory HS - IB Program",
        shortName: "Steinmetz HS - IB",
        initials: "St",
        selectionRequirementsFunction: createIBSelectionReqFn(450),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "William Howard Taft High School - IB Program",
        shortName: "Taft HS - IB",
        initials: "T",
        selectionRequirementsFunction: createIBSelectionReqFn(836),
        applicationRequirementsFunction: standardApplicationRequirements
      },
      {
        longName: "George Washington High School",
        shortName: "Washington HS - IB",
        initials: "W",
        selectionRequirementsFunction: createIBSelectionReqFn(630),
        applicationRequirementsFunction: standardApplicationRequirements
      },
    ],
  },

  {
    longName: "Military Schools",
    shortName: "Military",
    additionalRequirements: [],
    requirementsFunction: standardApplicationRequirements,
    highschools: [
      {
        longName: "David G Farragut Career Academy High School - Military School Program",
        shortName: "Farragut HS - Military",
        initials: "Fa",
        applicationRequirementsFunction: militaryApplicationRequirement,
        selectionRequirementsFunction: militarySelectionRequirement
      },
      {
        longName: "Charles P Steinmetz College Preparatory HS - Military School Program",
        shortName: "Steinmetz HS - Military",
        initials: "St",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
    ],
  },

  {
    longName: "Magnet Programs",
    shortName: "Magnet",
    additionalRequirements: [],
    requirementsFunction: standardApplicationRequirements,
    highschools: [
      {
        longName: "Marie Sklodowska Curie Metropolitan High School - Magnet Program",
        shortName: "Curie HS - Magnet",
        initials: "Cu",
        applicationRequirementsFunction: magnetApplicationRequirement,
        selectionRequirementsFunction: magnetSelectionRequirement,
      },
      {
        longName: "John M Harlan Community Academy High School - Magnet Program",
        shortName: "Harlan HS - Magnet",
        initials: "Har",
        applicationRequirementsFunction: magnetApplicationRequirement,
        selectionRequirementsFunction: magnetSelectionRequirement,
      },
    ],
  },

  {
    longName: "Citywide Schools",
    shortName: "Citywide",
    additionalRequirements: [],
    requirementsFunction: standardApplicationRequirements,
    highschools: [
      {
        longName: "Collins Academy High School",
        shortName: "Collins HS",
        initials: "Co",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Uplift Community High School",
        shortName: "Uplift HS",
        initials: "Up",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Daniel Hale Williams Prep School of Medicine",
        shortName: "Williams HS",
        initials: "Wil",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
    ],
  },

  {
    longName: "Neighborhood Schools",
    shortName: "Neighborhood",
    additionalRequirements: [],
    requirementsFunction: standardApplicationRequirements,
    highschools: [
      {
        longName: "Louisa May Alcott College Preparatory HS",
        shortName: "Alcott HS",
        initials: "Al",
        applicationRequirementsFunction: noRequirement, // within attendance bounds?
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Roald Amundsen High School",
        shortName: "Amundsen HS",
        initials: "Am",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Austin College and Career Academy High School",
        shortName: "Austin CCA HS",
        initials: "Au",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "William J Bogan High School",
        shortName: "Bogan HS",
        initials: "Bo",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Bowen High School",
        shortName: "Bowen HS",
        initials: "Bow",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Chicago Vocational Career Academy High School",
        shortName: "Chicago Vocational HS",
        initials: "CV",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Roberto Clemente Community Academy High School",
        shortName: "Clemente HS",
        initials: "Cl",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Marie Sklodowska Curie Metropolitan High School",
        shortName: "Curie HS",
        initials: "Cu",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Walter Henri Dyett High School for the Arts",
        shortName: "Dyett Arts HS",
        initials: "Dy",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "David G Farragut Career Academy High School",
        shortName: "Farragut HS",
        initials: "Fa",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Christian Fenger Academy High School",
        shortName: "Fenger HS",
        initials: "Fe",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Edwin G. Foreman College and Career Academy",
        shortName: "Foreman HS",
        initials: "Fo",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "John M Harlan Community Academy High School",
        shortName: "Harlan HS",
        initials: "Har",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "William Rainey Harper High School",
        shortName: "Harper HS",
        initials: "Harp",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Hyde Park Academy High School",
        shortName: "Hyde Park HS",
        initials: "HP",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Benito Juarez Community Academy High School",
        shortName: "Juarez HS",
        initials: "Jua",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Percy L Julian High School",
        shortName: "Julian HS",
        initials: "Jul",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Thomas Kelly High School",
        shortName: "Kelly HS",
        initials: "Ke",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Manley Career Academy High School",
        shortName: "Manley HS",
        initials: "Man",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "John Marshall Metropolitan High School",
        shortName: "Marshall HS",
        initials: "Mar",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Stephen T Mather High School",
        shortName: "Mather HS",
        initials: "Mat",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "North-Grand High School",
        shortName: "North-Grand HS",
        initials: "NG",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Wendell Phillips Academy High School",
        shortName: "Phillips HS",
        initials: "Ph",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Ellen H Richards Career Academy High School",
        shortName: "Richards HS",
        initials: "Ri",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Paul Robeson High School",
        shortName: "Robeson HS",
        initials: "Ro",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Theodore Roosevelt High School",
        shortName: "Roosevelt HS",
        initials: "Ros",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Carl Schurz High School",
        shortName: "Schurz HS",
        initials: "Sch",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Charles P Steinmetz College Preparatory HS",
        shortName: "Steinmetz HS",
        initials: "St",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Roger C Sullivan HS",
        shortName: "Sullivan HS",
        initials: "Su",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Edward Tilden Career Community Academy HS",
        shortName: "Tilden HS",
        initials: "Ti",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Wells Community Academy High School",
        shortName: "Wells HS",
        initials: "W",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
    ],
  },

  {
    longName: "Career & Technical Education Programs",
    shortName: "CTE",
    additionalRequirements: [],
    requirementsFunction: standardApplicationRequirements,
    highschools: [
      {
        longName: "Louisa May Alcott College Preparatory HS - CTE Program",
        shortName: "Alcott HS - CTE",
        initials: "Al",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Roald Amundsen High School - CTE Program",
        shortName: "Amundsen HS - CTE",
        initials: "Am",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Austin College and Career Academy High School - CTE Program",
        shortName: "Austin CCA HS - CTE",
        initials: "Au",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "William J Bogan High School - CTE Program",
        shortName: "Bogan HS - CTE",
        initials: "Bog",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Bowen High School - CTE Program",
        shortName: "Bowen HS - CTE",
        initials: "Bow",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Chicago Vocational Career Academy High School - CTE Program",
        shortName: "Chicago Vocational HS - CTE",
        initials: "CV",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Roberto Clemente Community Academy High School - CTE Program",
        shortName: "Clemente HS - CTE",
        initials: "Cl",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Collins Academy High School - CTE Program",
        shortName: "Collins HS - CTE",
        initials: "Co",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Richard T Crane Medical Preparatory HS",
        shortName: "Crane Medical HS",
        initials: "Cr",
        // FIXME: innacurate -- belongs to 'other selective CTE' category
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Marie Sklodowska Curie Metropolitan High School - CTE Program",
        shortName: "Curie HS - CTE",
        initials: "Cu",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Paul Laurence Dunbar Career Academy High School",
        shortName: "Dunbar HS",
        initials: "Du",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Walter Henri Dyett High School for the Arts - CTE Program",
        shortName: "Dyett Arts HS - CTE",
        initials: "Dy",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "David G Farragut Career Academy High School - CTE Program",
        shortName: "Farragut HS - CTE",
        initials: "Fa",
        // FIXME: as w/ Crane, inaccurate in case of Farragut pre-law CTE
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Christian Fenger Academy High School - CTE Program",
        shortName: "Fenger HS - CTE",
        initials: "Fe",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Edwin G. Foreman College and Career Academy - CTE Program",
        shortName: "Foreman HS - CTE",
        initials: "Fo",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Edwin G. Foreman College and Career Academy - CTE Program",
        shortName: "Foreman HS - CTE",
        initials: "Fo",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "John Hancock College Preparatory High School - Selective CTE Program",
        shortName: "Hancock HS - CTE",
        initials: "Han",
        applicationRequirementsFunction: selectiveCTEApplicationRequirement,
        selectionRequirementsFunction: selectiveCTESelectionRequirement,
      },
      {
        longName: "John M Harlan Community Academy High School - CTE Program",
        shortName: "Harlan HS - CTE",
        initials: "Hrl",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "William Rainey Harper High School - CTE Program",
        shortName: "Harper HS - CTE",
        initials: "Hrp",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Hyde Park Academy High School - CTE Program",
        shortName: "Hyde Park HS - CTE",
        initials: "HP",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "William Jones College Preparatory High School - Selective CTE Program",
        shortName: "Jones HS - CTE",
        initials: "Jo",
        applicationRequirementsFunction: selectiveCTEApplicationRequirement,
        selectionRequirementsFunction: selectiveCTESelectionRequirement,
      },
      {
        longName: "Benito Juarez Community Academy High School - CTE Program",
        shortName: "Juarez HS - CTE",
        initials: "Jua",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Percy L Julian High School - CTE Program",
        shortName: "Julian HS - CTE",
        initials: "Jul",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Thomas Kelly High School - CTE Program",
        shortName: "Kelly HS - CTE",
        initials: "Ke",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Manley Career Academy High School - CTE Program",
        shortName: "Manley HS - CTE",
        initials: "Man",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "John Marshall Metropolitan High School - CTE Program",
        shortName: "Marshall HS - CTE",
        initials: "Mar",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Stephen T Mather High School - CTE Program",
        shortName: "Mather HS - CTE",
        initials: "Mat",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "North-Grand High School - CTE Program",
        shortName: "North-Grand HS - CTE",
        initials: "NG",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Wendell Phillips Academy High School - CTE Program",
        shortName: "Phillips HS - CTE",
        initials: "Ph",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Charles Allen Prosser Career Academy High School - CTE Program",
        shortName: "Prosser HS - CTE",
        initials: "Pr",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Al Raby High School - CTE Program",
        shortName: "Raby HS - CTE",
        initials: "Ra",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Ellen H Richards Career Academy High School - CTE Program",
        shortName: "Richards HS - CTE",
        initials: "Ri",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Paul Robeson High School - CTE Program",
        shortName: "Robeson HS - CTE",
        initials: "Rob",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Theodore Roosevelt High School - CTE Program",
        shortName: "Roosevelt HS - CTE",
        initials: "Ros",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Carl Schurz High School - CTE Program",
        shortName: "Schurz HS - CTE",
        initials: "Sch",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Neal F Simeon Career Academy High School - CTE Program",
        shortName: "Simeon HS - CTE",
        initials: "Sim",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "South Shore Intl College Prep High School - CTE Program",
        shortName: "South Shore HS - CTE",
        initials: "SS",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Charles P Steinmetz College Preparatory HS - CTE Program",
        shortName: "Steinmetz HS - CTE",
        initials: "St",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Roger C Sullivan HS - CTE Program",
        shortName: "Sullivan HS - CTE",
        initials: "Su",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Edward Tilden Career Community Academy HS - CTE Program",
        shortName: "Tilden HS - CTE",
        initials: "Ti",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Uplift Community High School - CTE Program",
        shortName: "Uplift HS - CTE",
        initials: "Up",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Wells Community Academy High School - CTE Program",
        shortName: "Wells HS - CTE",
        initials: "W",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "George Westinghouse College Prep - CTE Program",
        shortName: "Westinghouse HS - CTE",
        initials: "Wes",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
      {
        longName: "Daniel Hale Williams Prep School of Medicine - CTE Program",
        shortName: "Williams HS - CTE",
        initials: "Wil",
        applicationRequirementsFunction: noRequirement,
        selectionRequirementsFunction: lotterySelection,
      },
    ],
  },

  {
    longName: "Fine and Performing Arts Programs",
    shortName: "Fine Arts",
    additionalRequirements: [],
    requirementsFunction: standardApplicationRequirements,
    highschools: [
    ],
  }

];


