import AppState from "shared/types/app-state";
import Gender from "shared/enums/gender";
import { fromJS, List } from  "immutable";

import { 
  createIndexByID, 
  getHSProgramIDs, 
  getESProgramIDs, 
  getHSProgramIDsByType,
  initializeOutcomes,
} from "./reducer-utils";

import {getAllPrograms} from "shared/util/data-access";
const allPrograms = getAllPrograms();

let initialState: AppState = fromJS({ 
  studentData: {
    gender: Gender.NOANSWER,
    location: {
      address: "",
      tier: "",
      geo: {latitude: 0, longitude: 0},
    },
    gradeLevel: null,
    //prevGradeLevel: null,
    iep: false,
    ell: false,
    attendancePercentage: 0,
    gpa: null,
    skippedGrade7OrRepeatedGrade8: false,

    currESProgramID: undefined,
    siblingHSProgramIDs: [],
    seTestPercentile: 0,
    nweaPercentileMath: null,
    nweaPercentileRead: null,
    subjGradeMath: null,
    subjGradeRead: null,
    subjGradeSci: null,
    subjGradeSocStudies: null,
  },

  selectedHSProgramID: null,

  hsData: {
    programs: List(allPrograms), 
    index: createIndexByID(allPrograms),
    hsProgramIDs: getHSProgramIDs(allPrograms),
    esProgramIDs: getESProgramIDs(allPrograms),
    hsProgramIDsByType: getHSProgramIDsByType(allPrograms),

    outcomes: initializeOutcomes(allPrograms)
  }
});

export default initialState;
