import HSRequirementFunction from "shared/types/hs-requirement-function";
import SuccessChance from "shared/enums/success-chance";
import {
  accept, 
  lottery,
  SIBLING_LOTTERY_STAGE,
  PROXIMITY_LOTTERY_STAGE,
  GENERAL_LOTTERY_STAGE,
  LotteryStageSize,
  conditional,
  ibPointSystem,
  sePointSystem,
  notImplemented
} from "shared/util/req-fn-builders";
import {
  either,
  both,
  everyone,
  ifSiblingAttends, 
  ifStudentAttendsOneOf, 
  ifHasGrades,
  ifInAttendBound,
  ifIEPorEL,
  ifSkipped7OrRepeated8
} from "shared/util/req-fn-builders/filters";

import {
  AUSL_ES_PROGRAMS,
  GROW_COMMUNITY_SCHOOL_ES_PROGRAMS,

  FOUNDATIONS_COLLEGE_PREP_JOINT_ES_HS_PROGRAM,
  CHICAGO_VIRTUAL_CHARTER_JOINT_ES_HS_PROGRAM,
  CHICAGO_VIRTUAL_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM,
  CICS_LONGWOOD_CHARTER_JOINT_ES_HS_PROGRAM,
  CICS_LONGWOOD_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM,
  CICS_CHICAGOQUEST_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM,
  CHICAGO_MATH_AND_SCIENCE_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM,
  U_OF_C_WOODLAWN_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM,
  CHICAGO_COLLEGIATE_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM,

  BRENNEMANN_ES_PROGRAM,
  COURTENAY_ES_PROGRAM,
  MCCUTCHEON_ES_PROGRAM,
  CHALMERS_ES_PROGRAM,
  DVORAK_ES_PROGRAM,
  HERZL_ES_PROGRAM,
  JOHNSON_ES_PROGRAM,
  MORTON_ES_PROGRAM,
  TAFT_ACADEMIC_CENTER_PROGRAM,
  MORGAN_PARK_ACADEMIC_CENTER_PROGRAM,
  KENWOOD_ACADEMIC_CENTER_PROGRAM,
  CARNEGIE_ES_PROGRAMS,
  ALCOTT_ES_PROGRAM,
  BOONE_ES_PROGRAM,
  FIELD_ES_PROGRAM,
  GALE_ES_PROGRAM,
  HAYT_ES_PROGRAM,
  JORDAN_ES_PROGRAM,
  KILMER_ES_PROGRAM,
  MCPHERSON_ES_PROGRAM,
  WEST_RIDGE_ES_PROGRAM,
} from "shared/constants";


interface ReqFnTable {
  [hashId: string]: {
    name?: string
    desc: string
    programs: string[]
    fn: HSRequirementFunction
  }
}
const HSReqFns: ReqFnTable = {
    "6adf97f83acf6453d4a6a4b1070f3754": {
        "desc": "None",
        "programs": [
            "NOBLE - JOHNSON HS - General Education - Application",
            "FOUNDATIONS - General Education - Application",
            "NOBLE - PRITZKER HS - General Education - Application",
            "PERSPECTIVES - TECH HS - General Education - Application",
            "FARRAGUT HS - General Education - Application",
            "URBAN PREP - WEST HS - General Education - Application",
            "AUSTIN CCA HS - General Education - Application",
            "CHICAGO VIRTUAL - Charter - Application",
            "NOBLE - MANSUETO HS - General Education - Application",
            "ACERO - SOTO HS - General Education - Application",
            "CICS - LONGWOOD - Charter - Application",
            "NOBLE - NOBLE HS - General Education - Application",
            "ACERO - GARCIA HS - General Education - Application",
            "ASPIRA - EARLY COLLEGE HS - General Education - Application",
            "NOBLE - UIC HS - General Education - Application",
            "WELLS HS - Pre-Law - Application",
            "NOBLE - COMER - General Education - Application",
            "SCHURZ HS - Accounting & Entrepreneurship - Application",
            "WASHINGTON HS - General Education - Application",
            "SCHURZ HS - General Education - Application",
            "JUAREZ HS - General Education - Application",
            "CHICAGO VOCATIONAL HS - Agricultural Sciences - Application",
            "RICHARDS HS - General Education - Application",
            "BOGAN HS - Entrepreneurship - Application",
            "DOUGLASS HS - General Education - Application",
            "LAKE VIEW HS - General Education - Application",
            "ROOSEVELT HS - Game Programming - Application",
            "ROOSEVELT HS - Medical & Health Careers - Application",
            "NORTH-GRAND HS - Culinary Arts - Application",
            "FOREMAN HS - Digital Media - Application",
            "PHILLIPS HS - Digital Media - Application",
            "ALCOTT HS - Pre-Engineering - Application",
            "CURIE HS - Game Programming & Web Design - Application",
            "CHICAGO MATH & SCIENCE HS - General Education - Application",
            "BOWEN HS - Manufacturing - Application",
            "JUAREZ HS - Culinary Arts - Application",
            "SULLIVAN HS - Medical & Health Careers - Application",
            "HUBBARD HS - General Education - Application",
            "CHICAGO VOCATIONAL HS - Culinary Arts - Application",
            "CICS - NORTHTOWN HS - General Education - Application",
            "JULIAN HS - General Education - Application",
            "SCHURZ HS - Automotive Technology - Application",
            "CICS - CHICAGOQUEST HS - General Education - Application",
            "COLLINS HS - Game Programming - Application",
            "SULLIVAN HS - Accounting - Application",
            "CHICAGO VIRTUAL - General Education - Application",
            "SPRY HS - General Education - Application",
            "FARRAGUT HS - Pre-Law - Application",
            "NOBLE - BAKER HS - General Education - Application",
            "CLEMENTE HS - Broadcast Technology - Application",
            "SOUTH SHORE INTL HS - Medical & Health Careers - Application",
            "CURIE HS - Accounting - Application",
            "ROOSEVELT HS - Early Childhood - Application",
            "PERSPECTIVES - MATH & SCI HS - General Education - Application",
            "KENNEDY HS - General Education - Application",
            "KELLY HS - General Education - Application",
            "FARRAGUT HS - Automotive Technology - Application",
            "JULIAN HS - Entrepreneurship - Application",
            "CHICAGO VOCATIONAL HS - Carpentry - Application",
            "CICS - ELLISON HS - General Education - Application",
            "NOBLE - BULLS HS - General Education - Application",
            "JULIAN HS - Allied Health - Application",
            "ROOSEVELT HS - General Education - Application",
            "URBAN PREP - ENGLEWOOD HS - General Education - Application",
            "HYDE PARK HS - Broadcast Technology - Application",
            "NORTH-GRAND HS - General Education - Application",
            "GAGE PARK HS - General Education - Application",
            "UPLIFT HS - General Education - Application",
            "JUAREZ HS - Automotive Technology - Application",
            "U OF C - WOODLAWN HS - General Education - Application",
            "TILDEN HS - General Education - Application",
            "BOWEN HS - General Education - Application",
            "DUNBAR HS - Chicago Builds - Application",
            "TAFT HS - General Education - Application",
            "MORGAN PARK HS - General Education - Application",
            "JULIAN HS - Broadcast Technology - Application",
            "CURIE HS - Early Childhood & Teaching - Application",
            "CLEMENTE HS - Culinary Arts - Application",
            "BOGAN HS - Accounting - Application",
            "NORTH-GRAND HS - Pre-Engineering - Application",
            "CURIE HS - Automotive Technology - Application",
            "JUAREZ HS - Medical & Health Careers - Application",
            "JULIAN HS - Game Programming - Application",
            "NORTH-GRAND HS - Allied Health - Application",
            "JUAREZ HS - Architecture - Application",
            "TILDEN HS - Culinary Arts - Application",
            "INTRINSIC HS - General Education - Application",
            "NOBLE - RAUNER HS - General Education - Application",
            "SCHURZ HS - Digital Media - Application",
            "FOREMAN HS - Web Design - Application",
            "PERSPECTIVES - LEADERSHIP HS - General Education - Application",
            "HYDE PARK HS - Digital Media - Application",
            "CICS - LONGWOOD - General Education - Application",
            "CORLISS HS - Early College STEM - Application",
            "BOWEN HS - Pre-Engineering - Application",
            "HYDE PARK HS - General Education - Application",
            "ROOSEVELT HS - Culinary Arts - Application",
            "FOREMAN HS - General Education - Application",
            "NOBLE - ROWE CLARK HS - General Education - Application",
            "CURIE HS - Broadcast Technology - Application",
            "NOBLE - MUCHIN HS - General Education - Application",
            "ALCOTT HS - General Education - Application",
            "RICHARDS HS - Culinary Arts - Application",
            "FENGER HS - Culinary Arts - Application",
            "SCHURZ HS - Allied Health - Application",
            "RABY HS - Culinary Arts - Application",
            "RABY HS - Pre-Law - Application",
            "FENGER HS - General Education - Application",
            "HARPER HS - Culinary Arts - Application",
            "NOBLE - DRW HS - General Education - Application",
            "AMUNDSEN HS - General Education - Application",
            "WILLIAMS HS - Medical & Health Careers - Application",
            "NOBLE - GOLDER HS - General Education - Application",
            "RABY HS - Broadcast Technology - Application",
            "HIRSCH HS - General Education - Application",
            "STEINMETZ HS - Digital Media - Application",
            "JULIAN HS - Digital Media - Application",
            "AUSTIN CCA HS - Manufacturing - Application",
            "HARPER HS - Digital Media - Application",
            "DYETT ARTS HS - General Education - Application",
            "MATHER HS - Pre-Law - Application",
            "AMUNDSEN HS - Game Programming & Web Design - Application",
            "SOLORIO HS - General Education - Application",
            "PERSPECTIVES - JOSLIN HS - General Education - Application",
            "RICHARDS HS - Accounting - Application",
            "MATHER HS - Game Programming & Web Design - Application",
            "EPIC HS - General Education - Application",
            "BOGAN HS - General Education - Application",
            "CHICAGO COLLEGIATE - General Education - Application",
            "CURIE HS - Culinary Arts - Application",
            "RABY HS - Entrepreneurship - Application",
            "CLEMENTE HS - Allied Health - Application",
            "DYETT ARTS HS - Digital Media - Application",
            "DUNBAR HS - Allied Health - Application",
            "CHICAGO VOCATIONAL HS - Early College STEM - Application",
            "HARLAN HS - Digital Media - Application",
            "DUNBAR HS - Career Academy - Application",
            "MANLEY HS - Culinary Arts - Application",
            "CHICAGO VOCATIONAL HS - Diesel Technology - Application",
            "CURIE HS - Fine Arts & Technology - NEIGHBORHOOD - Application",
            "CHICAGO VOCATIONAL HS - General Education - Application",
            "STEINMETZ HS - General Education - Application",
            "SENN HS - General Education - Application",
            "WELLS HS - Game Programming - Application",
            "NOBLE - HANSBERRY HS - General Education - Application",
            "ROBESON HS - General Education - Application",
            "CHICAGO VOCATIONAL HS - Medical Assisting - Application",
            "LAKE VIEW HS - Early College STEM - Application",
            "CHICAGO VOCATIONAL HS - Cosmetology - Application",
            "FENGER HS - Carpentry - Application",
            "HARLAN HS - Web Design - Application",
            "CURIE HS - Digital Media - Application",
            "URBAN PREP - BRONZEVILLE HS - General Education - Application",
            "CURIE HS - Architecture - Application",
            "KENWOOD HS - General Education - Application",
            "MATHER HS - General Education - Application",
            "AUSTIN CCA HS - Pre-Engineering - Application",
            "ORR HS - General Education - Application",
            "SULLIVAN HS - General Education - Application",
            "MANLEY HS - General Education - Application",
            "HOPE HS - General Education - Application",
            "NORTH LAWNDALE - CHRISTIANA HS - General Education - Application",
            "NORTH LAWNDALE - COLLINS HS - General Education - Application",
            "UPLIFT HS - Teaching - Application",
            "SCHURZ HS - Pre-Engineering - Application",
            "ACE TECH HS - General Education - Application",
            "LEGAL PREP HS - General Education - Application",
            "ASPIRA - BUSINESS & FINANCE HS - General Education - Application",
            "JUAREZ HS - Game Programming & Web Design - Application",
            "PROSSER HS - Career Academy - Application",
            "HARPER HS - General Education - Application",
            "INSTITUTO - HEALTH - General Education - Application",
            "ROOSEVELT HS - Cisco Networking - Application",
            "INFINITY HS - Science/Technology/Engineering/Math - Application",
            "CHICAGO TECH HS - Science/Technology/Engineering/Math - Application",
            "NOBLE - ITW SPEER HS - General Education - Application",
            "NOBLE - BUTLER HS - General Education - Application",
            "NOBLE - ACADEMY HS - General Education - Application",
            "MARSHALL HS - General Education - Application",
            "MARSHALL HS - Agricultural Sciences - Application",
            "MARSHALL HS - Culinary Arts - Application"
        ],
      "fn": accept(everyone)
    },
    "f1a0a3737e921ccaf4617c5eafab5f53": {
        "desc": "Students are randomly selected by computerized lottery. Contact the school for additional information.",
        "programs": [
            "NOBLE - JOHNSON HS - General Education - Selection",
            "NOBLE - PRITZKER HS - General Education - Selection",
            "PERSPECTIVES - TECH HS - General Education - Selection",
            "URBAN PREP - WEST HS - General Education - Selection",
            "NOBLE - MANSUETO HS - General Education - Selection",
            "ACERO - SOTO HS - General Education - Selection",
            "NOBLE - NOBLE HS - General Education - Selection",
            "ACERO - GARCIA HS - General Education - Selection",
            "ASPIRA - EARLY COLLEGE HS - General Education - Selection",
            "NOBLE - UIC HS - General Education - Selection",
            "NOBLE - COMER - General Education - Selection",
            "CICS - NORTHTOWN HS - General Education - Selection",
            "NOBLE - BAKER HS - General Education - Selection",
            "PERSPECTIVES - MATH & SCI HS - General Education - Selection",
            "CICS - ELLISON HS - General Education - Selection",
            "NOBLE - BULLS HS - General Education - Selection",
            "URBAN PREP - ENGLEWOOD HS - General Education - Selection",
            "NOBLE - RAUNER HS - General Education - Selection",
            "PERSPECTIVES - LEADERSHIP HS - General Education - Selection",
            "CICS - LONGWOOD - General Education - Selection",
            "NOBLE - ROWE CLARK HS - General Education - Selection",
            "NOBLE - MUCHIN HS - General Education - Selection",
            "NOBLE - DRW HS - General Education - Selection",
            "NOBLE - GOLDER HS - General Education - Selection",
            "PERSPECTIVES - JOSLIN HS - General Education - Selection",
            "EPIC HS - General Education - Selection",
            "NOBLE - HANSBERRY HS - General Education - Selection",
            "URBAN PREP - BRONZEVILLE HS - General Education - Selection",
            "ASPIRA - BUSINESS & FINANCE HS - General Education - Selection",
            "NOBLE - ITW SPEER HS - General Education - Selection",
            "NOBLE - BUTLER HS - General Education - Selection",
            "NOBLE - ACADEMY HS - General Education - Selection"
        ],
      "fn": lottery(GENERAL_LOTTERY_STAGE)
    },
    "ea7a8ea4de4f5cdcc8bc6e7aab6a7962": {
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: students currently enrolled at Foundations College Prep, isibling, general.",
        "programs": [
            "FOUNDATIONS - General Education - Selection"
        ],
      "fn": lottery(
        {
          filter: ifStudentAttendsOneOf(FOUNDATIONS_COLLEGE_PREP_JOINT_ES_HS_PROGRAM),
          size: LotteryStageSize.LARGE
        },
        SIBLING_LOTTERY_STAGE,
        GENERAL_LOTTERY_STAGE
      )
    },
    "783216956d119ad64639725fa9f4d44b": {
        "desc": "Students who live within the school's attendance boundary can be admitted automatically. This program only accepts students who live within the school's attendance boundary.",
        "programs": [
            "FARRAGUT HS - General Education - Selection",
            "WASHINGTON HS - General Education - Selection",
            "HUBBARD HS - General Education - Selection",
            "KENNEDY HS - General Education - Selection",
            "KELLY HS - General Education - Selection",
            "ROOSEVELT HS - General Education - Selection",
            "BOGAN HS - General Education - Selection",
            "CURIE HS - Fine Arts & Technology - NEIGHBORHOOD - Selection",
            "SENN HS - General Education - Selection"
        ],
      "fn": accept(ifInAttendBound)
    },
    "240970c398eb1cf1d65952b71e811d58": {
        "desc": "If the school receives more applications than there are seats available, students are randomly selected through a computerized lottery.  Priority is given to students currently enrolled in the school and to siblings of students enrolled in the campus.",
        "programs": [
            "CHICAGO VIRTUAL - Charter - Selection"
        ],
      "fn": lottery(
        {
          filter: either(
            ifSiblingAttends, 
            ifStudentAttendsOneOf(
              CHICAGO_VIRTUAL_CHARTER_JOINT_ES_HS_PROGRAM, 
              CHICAGO_VIRTUAL_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM
            )
          ),
          size: LotteryStageSize.LARGE
        },
        GENERAL_LOTTERY_STAGE
      )
    },
    "01a561f658ea66df980a6e77eae83235": {
        "desc": "If the school receives more applications than there are seats available, students are randomly selected through a computerized lottery.  Priority is given to students currently enrolled in the school who wish to continue and to siblings of students enrolled in the campus.",
        "programs": [
            "CICS - LONGWOOD - Charter - Selection"
        ],
        "fn": lottery(
          {
            filter: either(
              ifSiblingAttends, 
              ifStudentAttendsOneOf(
                CICS_LONGWOOD_CHARTER_JOINT_ES_HS_PROGRAM,
                CICS_LONGWOOD_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM
              )),
            size: LotteryStageSize.LARGE
          },
          GENERAL_LOTTERY_STAGE
        )
    },
    "8c431d51587c33009ee9b67a566c042e": {
        "desc": "Students who live within the school's attendance boundary can be admitted automatically.  Students who live outside of the school's attendance boundary are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "AUSTIN CCA HS - General Education - Selection",
            "JULIAN HS - General Education - Selection",
            "NORTH-GRAND HS - General Education - Selection",
            "GAGE PARK HS - General Education - Selection",
            "BOWEN HS - General Education - Selection",
            "FOREMAN HS - General Education - Selection",
            "FENGER HS - General Education - Selection",
            "HIRSCH HS - General Education - Selection",
            "CHICAGO VOCATIONAL HS - General Education - Selection",
            "ROBESON HS - General Education - Selection",
            "ORR HS - General Education - Selection",
            "MANLEY HS - General Education - Selection",
            "HOPE HS - General Education - Selection",
            "HARPER HS - General Education - Selection",
            "INFINITY HS - Science/Technology/Engineering/Math - Selection",
            "MARSHALL HS - General Education - Selection"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: lottery(
            SIBLING_LOTTERY_STAGE,
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    "6fddb8b397a12770dbed5afff360213b": {
        "desc": "Minimum percentile of 75 in both reading and math on NWEA MAP, minimum 3.0 GPA in 7th grade, and minimum attendance percentage of 95.",
        "programs": [
            "SOLORIO HS - Double Honors/Scholars - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 75,
        gpa: 3.0,
        attendance: 95
      }))
    },
    "218f3d334a0ceaa37bb7ce57bec10e96": {
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, proximity, students enrolled in AUSL schools, general.",
        "programs": [
            "SOLORIO HS - Double Honors/Scholars - Selection",
            "CHICAGO ACADEMY HS - Scholars - Selection",
            "CHICAGO ACADEMY HS - General Education - Selection"
        ],
      "fn": lottery(
        SIBLING_LOTTERY_STAGE,
        PROXIMITY_LOTTERY_STAGE,
        {
          filter: ifStudentAttendsOneOf(...AUSL_ES_PROGRAMS),
          size: LotteryStageSize.LARGE
        },
        GENERAL_LOTTERY_STAGE
      )
    },
    "3086b8e507b2f64e53b85b8ad808e66d": {
        "desc": "Minimum 2.0 GPA in 7th grade and minimum attendance percentage of 85.",
        "programs": [
            "FARRAGUT HS - JROTC - Application",
            "SCHURZ HS - AVID - Application"
        ],
      "fn": accept(ifHasGrades({
        gpa: 2.0,
        attendance: 85
      }))
    },
    "d3ddea21fb0e360b470bf095ce6bdfef": {
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: proximity, general.",
        "programs": [
            "FARRAGUT HS - JROTC - Selection",
            "ROBESON HS - Allied Health - Selection",
            "DUNBAR HS - Chicago Builds - Selection",
            "SCHURZ HS - AVID - Selection",
            "PROSSER HS - Career Academy - Selection"
        ],
        "fn": lottery(
          PROXIMITY_LOTTERY_STAGE,
          GENERAL_LOTTERY_STAGE
        )
    },
    "618315c228cf8e591d1909fc8ca41206": {
        "desc": "Students are selected on a point system. Points are based on 7th grade final GPA and NWEA MAP scores. The school determines the minimum cutoff score for selections.",
        "programs": [
            "WELLS HS - Pre-Law - Selection",
            "ALCOTT HS - Pre-Engineering - Selection",
            "SULLIVAN HS - Medical & Health Careers - Selection",
            "FARRAGUT HS - Pre-Law - Selection",
            "SOUTH SHORE INTL HS - Medical & Health Careers - Selection",
            "JULIAN HS - Allied Health - Selection",
            "JUAREZ HS - Medical & Health Careers - Selection",
            "BOWEN HS - Pre-Engineering - Selection",
            "WILLIAMS HS - Medical & Health Careers - Selection",
            "CLEMENTE HS - Allied Health - Selection",
            "DUNBAR HS - Allied Health - Selection",
            "CHICAGO VOCATIONAL HS - Medical Assisting - Selection",
            "SCHURZ HS - Pre-Engineering - Selection"
        ],
      "fn": notImplemented
    },
    "f661cdb969617a4f2a3923f5c80c190c": {
        "desc": "General Education and 504 Plan students: Minimum percentile of 50 in both reading and math on NWEA MAP, minimum 2.7 GPA in 7th grade, and minimum attendance percentage of 90.  IEP and EL students: Minimum combined percentile of 50 in reading and math on NWEA MAP.  An Interview is required for all eligible applicants.",
        "programs": [
            "DYETT ARTS HS - Music - Application",
            "DYETT ARTS HS - Visual Arts - Application",
            "DYETT ARTS HS - Dance - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 50
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 50,
            gpa: 2.7,
            attendance: 90
          }))
        }

      )
    },
    "3d86881707e468c9fe2a0ce0f5eeac4f": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on the student's NWEA MAP scores in reading and math and the interview.",
        "programs": [
            "DYETT ARTS HS - Music - Selection",
            "DYETT ARTS HS - Visual Arts - Selection",
            "DYETT ARTS HS - Dance - Selection"
        ],
        "fn": notImplemented
    },
    "7672890f5b16cd8f5c0cae20d58d1888": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. General Education and 504 Plan students: Preference is given to students with percentiles of 24 and above on the NWEA MAP in reading and math. A total of 30% of the seats will be made available to attendance area applicants.  IEP and EL students: Preference is given to students with combined NWEA MAP scores that equal 48 or above.  Note: Repeating 8th graders and students pushed into 8th grade from 6th grade due to age requirements qualify for selection but will be placed in a lower preference group.",
        "programs": [
            "SCHURZ HS - Accounting & Entrepreneurship - Selection",
            "KELLY HS - Digital Media - Selection",
            "CHICAGO VOCATIONAL HS - Agricultural Sciences - Selection",
            "BOGAN HS - Entrepreneurship - Selection",
            "ROOSEVELT HS - Game Programming - Selection",
            "NORTH-GRAND HS - Culinary Arts - Selection",
            "FOREMAN HS - Digital Media - Selection",
            "PHILLIPS HS - Digital Media - Selection",
            "CURIE HS - Game Programming & Web Design - Selection",
            "BOWEN HS - Manufacturing - Selection",
            "JUAREZ HS - Culinary Arts - Selection",
            "CHICAGO VOCATIONAL HS - Culinary Arts - Selection",
            "SCHURZ HS - Automotive Technology - Selection",
            "COLLINS HS - Game Programming - Selection",
            "CLEMENTE HS - Broadcast Technology - Selection",
            "CURIE HS - Accounting - Selection",
            "ROOSEVELT HS - Early Childhood - Selection",
            "FARRAGUT HS - Automotive Technology - Selection",
            "JULIAN HS - Entrepreneurship - Selection",
            "CHICAGO VOCATIONAL HS - Carpentry - Selection",
            "HYDE PARK HS - Broadcast Technology - Selection",
            "JUAREZ HS - Automotive Technology - Selection",
            "JULIAN HS - Broadcast Technology - Selection",
            "CURIE HS - Early Childhood & Teaching - Selection",
            "CLEMENTE HS - Culinary Arts - Selection",
            "CURIE HS - Automotive Technology - Selection",
            "JULIAN HS - Game Programming - Selection",
            "JUAREZ HS - Architecture - Selection",
            "TILDEN HS - Culinary Arts - Selection",
            "SCHURZ HS - Digital Media - Selection",
            "FOREMAN HS - Web Design - Selection",
            "HYDE PARK HS - Digital Media - Selection",
            "ROOSEVELT HS - Culinary Arts - Selection",
            "CURIE HS - Broadcast Technology - Selection",
            "RICHARDS HS - Culinary Arts - Selection",
            "FENGER HS - Culinary Arts - Selection",
            "RABY HS - Culinary Arts - Selection",
            "HARPER HS - Culinary Arts - Selection",
            "RABY HS - Broadcast Technology - Selection",
            "STEINMETZ HS - Digital Media - Selection",
            "JULIAN HS - Digital Media - Selection",
            "AUSTIN CCA HS - Manufacturing - Selection",
            "HARPER HS - Digital Media - Selection",
            "AMUNDSEN HS - Game Programming & Web Design - Selection",
            "RICHARDS HS - Accounting - Selection",
            "MATHER HS - Game Programming & Web Design - Selection",
            "CURIE HS - Culinary Arts - Selection",
            "RABY HS - Entrepreneurship - Selection",
            "CHICAGO VOCATIONAL HS - Early College STEM - Selection",
            "HARLAN HS - Digital Media - Selection",
            "MANLEY HS - Culinary Arts - Selection",
            "CHICAGO VOCATIONAL HS - Diesel Technology - Selection",
            "WELLS HS - Game Programming - Selection",
            "FENGER HS - Carpentry - Selection",
            "HARLAN HS - Web Design - Selection",
            "CURIE HS - Digital Media - Selection",
            "CURIE HS - Architecture - Selection",
            "UPLIFT HS - Teaching - Selection",
            "JUAREZ HS - Game Programming & Web Design - Selection",
            "MARSHALL HS - Agricultural Sciences - Selection",
            "MARSHALL HS - Culinary Arts - Selection",
            "SULLIVAN HS - Accounting - Selection",
            "BOGAN HS - Accounting - Selection",
            "DYETT ARTS HS - Digital Media - Selection",
            "CHICAGO VOCATIONAL HS - Cosmetology - Selection"
        ],
      // custom req fn -- req fn builders a little ungainly for handling
      // this kind of branching.
      "fn": (s, p) => {

        console.log(ifSkipped7OrRepeated8(s,p));
        if( ifSkipped7OrRepeated8(s,p) ) {
          return {outcome: SuccessChance.UNLIKELY}

        } else if ( ifIEPorEL(s,p) ) {
          if( ifHasGrades({nweaCombined: 48}) ) { 
            return {outcome: SuccessChance.LIKELY};
          } else {
            return {outcome: SuccessChance.UNCERTAIN};
          }

        } else {
          if ( ifHasGrades({nweaBoth: 24}) ) {
            return {outcome: SuccessChance.LIKELY};
          } else {
            return {outcome: SuccessChance.UNCERTAIN};
          }
        }
      }
    },
    "4ab864cc8934557f435c392c96e5cfc1": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary can be admitted automatically.  Students who live outside of the school's attendance boundary are randomly selected by computerized lottery.\u00a0The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "SCHURZ HS - General Education - Selection",
            "STEINMETZ HS - General Education - Selection"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: lottery(
            SIBLING_LOTTERY_STAGE,
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    "ae1af40b734a31b447b1ed50f6e4bc17": {
        "name": "",
        "desc": "Minimum combined percentile of 48 in reading and math on NWEA MAP. Attendance at an Information Session is required for eligible applicants.",
        "programs": [
            "AIR FORCE HS - Service Learning Academies (Military) - Application",
            "MARINE LEADERSHIP AT AMES HS - Service Learning Academies (Military) - Application",
            "RICKOVER MILITARY HS - Service Learning Academies (Military) - Application",
            "PHOENIX MILITARY HS - Service Learning Academies (Military) - Application",
            "CARVER MILITARY HS - Service Learning Academies (Military) - Application",
            "CHICAGO MILITARY HS - Service Learning Academies (Military) - Application"
        ],
      "fn": accept(ifHasGrades({nweaCombined: 48}))
    },
    "9a6d8103474c5e8b4988360767a186de": {
        "name": "",
        "desc": "During the Information Session, students will sign a Commitment Agreement, complete a Motivation and Perseverance Assessment and write a brief essay. Selections are based on a point system with a maximum of 500 points, derived from 7th grade final (cumulative) grades (100 points), 7th grade NWEA MAP scores (150 points), the two-part assessment (50 for each part), and the essay (100 points).",
        "programs": [
            "AIR FORCE HS - Service Learning Academies (Military) - Selection"
        ],
      "fn": notImplemented
    },
    "459b0b1aaa6e44d897f0a720ba82369e": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary can be admitted automatically.  Students who live outside of the school's attendance boundary will be randomly selected by computerized lottery. The lottery will be conducted in the following order: sibling, general.",
        "programs": [
            "JUAREZ HS - General Education - Selection"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: lottery(
            SIBLING_LOTTERY_STAGE,
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    // FIXME: error in src file?
    "d41d8cd98f00b204e9800998ecf8427e": {
        "name": "",
        "desc": "",
        "programs": [
            "KELLY HS - Digital Media - Application"
        ],
      "fn": notImplemented
    },
    "2317c60e8a1eec08ab495a14ccfd9c64": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary can be admitted automatically.  Students who live outside of the school's attendance boundary are randomly selected by computerized lottery.",
        "programs": [
            "RICHARDS HS - General Education - Selection",
            "TILDEN HS - General Education - Selection",
            "DYETT ARTS HS - General Education - Selection",
            "SOLORIO HS - General Education - Selection",
            "MATHER HS - General Education - Selection"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: lottery(
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    "c32c0804dc719ba6c4c00322e7a69be2": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 45 in both reading and math on NWEA MAP.  IEP and EL students: Minimum NWEA MAP percentile of 50 in one subject (reading or math) and minimum NWEA MAP percentile of 40 in the other subject (reading or math).  Testing is required for all eligible applicants.",
        "programs": [
            "BROOKS HS - Academic Center - Application",
            "TAFT HS - Academic Center - Application",
            "LANE TECH HS - Academic Center - Application",
            "MORGAN PARK HS - Academic Center - Application",
            "KENWOOD HS - Academic Center - Application",
            "LINDBLOM HS - Academic Center - Application",
            "YOUNG HS - Academic Center - Application"
        ],
        // TODO remove Academic Center programs from list of cps programs and req fns
        "fn": notImplemented         
    },
    "224ce8807abceb6ca72e650988637629": {
        "name": "",
        "desc": "Students are selected on a point system with a maximum of 900 points. Students are assigned points for prior year final grades, NWEA MAP scores, and the admissions test, each worth a maximum of 300 points.",
        "programs": [
            "BROOKS HS - Academic Center - Selection",
            "TAFT HS - Academic Center - Selection",
            "LANE TECH HS - Academic Center - Selection",
            "MORGAN PARK HS - Academic Center - Selection",
            "KENWOOD HS - Academic Center - Selection",
            "LINDBLOM HS - Academic Center - Selection",
            "YOUNG HS - Academic Center - Selection"
        ],
        // TODO remove Academic Center programs from list of cps programs and req fns
        "fn": notImplemented
    },
    "03010a12030cab563c3f5d9115e7aabe": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 45 in both reading and math on NWEA MAP and minimum 2.0 GPA in 7th grade.  IEP and EL students: Minimum combined percentile of 90 in reading and math on NWEA MAP, and minimum 2.0 GPA in 7th grade.",
        "programs": [
            "STEINMETZ HS - JROTC - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 90,
            gpa: 2.0
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 45,
            gpa: 2.0
          }))
        }
      )
    },
    "5096cc5a97943badb78efd427ee13eb6": {
        "name": "",
        "desc": "Eligible students are randomly selected by computerized lottery.",
        "programs": [
            "STEINMETZ HS - JROTC - Selection"
        ],
      "fn": lottery(
        GENERAL_LOTTERY_STAGE
      )
    },
    "f6b1cadaa52f894d87ad4246bd4c9b0a": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, proximity, general.",
        "programs": [
            "DOUGLASS HS - General Education - Selection",
            "WILLIAMS HS - General Education - Selection",
            "SENN HS - Digital Journalism - Selection",
            "NORTH LAWNDALE - CHRISTIANA HS - General Education - Selection",
            "NORTH LAWNDALE - COLLINS HS - General Education - Selection"
        ],
      "fn": lottery(
        SIBLING_LOTTERY_STAGE,
        PROXIMITY_LOTTERY_STAGE,
        GENERAL_LOTTERY_STAGE
      )
    },
    "77620df9b5c4a530f21c30267af843ce": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP. An audition/portfolio review is required.",
        "programs": [
            "CURIE HS - Dance - Application",
            "CURIE HS - Music - Application",
            "CURIE HS - Visual Arts - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24
          }))
        }
      )
    },
    "7e51568fc748dec3fd5aa79aae428009": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on the student's NWEA MAP scores in reading and math, 7th grade final (cumulative) grades, and the audition.",
        "programs": [
            "CURIE HS - Dance - Selection",
            "SENN HS - Dance - Selection",
            "CURIE HS - Music - Selection",
            "SENN HS - Music - Selection",
            "SENN HS - Theatre - Selection",
            "CURIE HS - Visual Arts - Selection"
        ],
      "fn": notImplemented
    },
    "0514de51e21823dae4f43b085538f9e6": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP, minimum 3.0 GPA in 7th grade, and minimum attendance percentage of 95.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP, minimum 3.0 GPA in 7th grade, and minimum attendance percentage of 95.",
        "programs": [
            "WESTINGHOUSE HS - Career Academy - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48,
            gpa: 3.0,
            attendance: 95
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24,
            gpa: 3.0,
            attendance: 95
          }))
        }
      )
    },
    "d76c385b612c2ef53c62501b074b6134": {
        "name": "",
        "desc": "Students are randomly selected by compterized lottery. The lottery is conducted in the following order: proximity, general.",
        "programs": [
            "WESTINGHOUSE HS - Career Academy - Selection"
        ],
      "fn": lottery(
        PROXIMITY_LOTTERY_STAGE,
        GENERAL_LOTTERY_STAGE
      )
    },
    "5ee7cff3803c80e025f483be28b57f06": {
        "name": "",
        "desc": "This program only accepts students who live within the school's attendance boundary or who attend a Grow Community School (Audubon, Bell, Blaine, Budlong, Burley, Chappell, Coonley, Greeley, Hamilton, Hawthorne, Inter-American, Jahn, Jamieson, McPherson, Nettelhorst, Ravenswood, or Waters). Students are randomly selected by computerized lottery.",
        "programs": [
            "LAKE VIEW HS - General Education - Selection"
        ],
      "fn": lottery(
        {
          filter: either(ifInAttendBound, ifStudentAttendsOneOf(...GROW_COMMUNITY_SCHOOL_ES_PROGRAMS)),
          size: LotteryStageSize.LARGE
        }
      )
    },
    "930c01733b718c40bc1f2af23839e14a": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.  Attendance at an Information Session is required for all eligible applicants.",
        "programs": [
            "KELLY HS - International Baccalaureate (IB) - Application",
            "SOUTH SHORE INTL HS - International Baccalaureate (IB) - Application",
            "BACK OF THE YARDS HS - International Baccalaureate (IB) - Application",
            "PROSSER HS - International Baccalaureate (IB) - Application",
            "STEINMETZ HS - International Baccalaureate (IB) - Application",
            "MORGAN PARK HS - International Baccalaureate (IB) - Application",
            "TAFT HS - International Baccalaureate (IB) - Application",
            "BOGAN HS - International Baccalaureate (IB) - Application",
            "JUAREZ HS - International Baccalaureate (IB) - Application",
            "OGDEN HS - International Baccalaureate (IB) - Application",
            "KENNEDY HS - International Baccalaureate (IB) - Application",
            "AMUNDSEN HS - International Baccalaureate (IB) - Application",
            "WASHINGTON HS - International Baccalaureate (IB) - Application",
            "SCHURZ HS - International Baccalaureate (IB) - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48,
            gpa: 2.5
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24,
            gpa: 2.5
          }))
        }
      )
    },
    "11bdd4bc6af64732a32d73a850bc78a4": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points.The school determines the minimum cutoff score for selections.",
        "programs": [
            "KELLY HS - International Baccalaureate (IB) - Selection",
            "BACK OF THE YARDS HS - International Baccalaureate (IB) - Selection",
            "JUAREZ HS - International Baccalaureate (IB) - Selection"
        ],
      "fn": ibPointSystem
    },
    "f79604e9d7984cc9b43fa3c69abe428d": {
        "name": "",
        "desc": "During the Information Session, students will sign a Commitment Agreement, complete a Motivation and Perseverance Assessment and write a brief essay. Selections will be based on a point system with a maximum of 500 points, derived from 7th grade final (cumulative) grades (100 points), 7th grade NWEA MAP scores (150 points), the two-part assessment (50 for each part), and the essay (100 points).",
        "programs": [
            "MARINE LEADERSHIP AT AMES HS - Service Learning Academies (Military) - Selection",
            "RICKOVER MILITARY HS - Service Learning Academies (Military) - Selection",
            "PHOENIX MILITARY HS - Service Learning Academies (Military) - Selection",
            "CARVER MILITARY HS - Service Learning Academies (Military) - Selection",
            "CHICAGO MILITARY HS - Service Learning Academies (Military) - Selection"
        ],
      "fn": notImplemented
    },
    "4cb799c1cf8b41a3baf1e8d9176463d8": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP.",
        "programs": [
            "JONES HS - Pre-Engineering - Application",
            "CRANE MEDICAL HS - Health Sciences - Application",
            "CHICAGO AGRICULTURE HS - Agricultural Sciences - Application",
            "HANCOCK HS - Pre-Law - Application",
            "HANCOCK HS - Pre-Engineering - Application",
            "JONES HS - Pre-Law - Application",
            "VON STEUBEN HS - Science - Application",
            "CLARK HS - Early College STEM - Application",
            "DISNEY II HS - Fine Arts & Technology - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24
          }))
        }
      )
    },
    "0fe94ad9490cc5fe33139f705336bf3d": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on 7th grade final GPA and 7th grade stanines. Students are ranked and selected from high to low. Students residing within the attendance overlay boundary of the school are selected first.",
        "programs": [
            "JONES HS - Pre-Engineering - Selection"
        ],
      "fn": notImplemented
    },
    "0fedde2a8081243a74d2c6a3be90b411": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. The school determines the minimum cutoff score for selections.",
        "programs": [
            "SOUTH SHORE INTL HS - International Baccalaureate (IB) - Selection",
            "CLEMENTE HS - International Baccalaureate (IB) - Selection",
            "STEINMETZ HS - International Baccalaureate (IB) - Selection",
            "HUBBARD HS - International Baccalaureate (IB) - Selection",
            "BOGAN HS - International Baccalaureate (IB) - Selection",
            "KENNEDY HS - International Baccalaureate (IB) - Selection",
            "BRONZEVILLE HS - International Baccalaureate (IB) - Selection",
            "WASHINGTON HS - International Baccalaureate (IB) - Selection",
            "SCHURZ HS - International Baccalaureate (IB) - Selection"
        ],
      "fn": ibPointSystem
    },
    "70d67060ab98f9cd752d741b32e207ba": {
        "name": "",
        "desc": "Student selections are based on points. Students are assigned points for 7th grade final GPA and 7th grade stanines. Each school determines a minimum cutoff score for selections.",
        "programs": [
            "ROOSEVELT HS - Medical & Health Careers - Selection",
            "NORTH-GRAND HS - Pre-Engineering - Selection",
            "NORTH-GRAND HS - Allied Health - Selection",
            "SCHURZ HS - Allied Health - Selection",
            "RABY HS - Pre-Law - Selection",
            "MATHER HS - Pre-Law - Selection",
            "ROOSEVELT HS - Cisco Networking - Selection"
        ],
      "fn": notImplemented
    },
    "eb6acf17c18f9a5177bcdb7a4504672a": {
        "name": "",
        "desc": "Minimum percentile of 40 in both reading and math on NWEA MAP, minimum 3.0 GPA in 7th grade, LAS Links Assessment composite of 4 or STAMP Assessment at the Intermediate Level.",
        "programs": [
            "SCHURZ HS - Dual Language - Application",
            "BACK OF THE YARDS HS - Dual Language - Application"
        ],
      "fn": notImplemented
    },
    "0640ddea233c6c9c97db5dd816b5c24a": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, students currently enrolled in a CPS elementary school with a world language or dual language program, general.",
        "programs": [
            "SCHURZ HS - Dual Language - Selection",
            "BACK OF THE YARDS HS - Dual Language - Selection"
        ],
      // TODO -- if/when application stage is sorted out, find lists of cps schools with dual language and world language programs
      "fn": lottery(
        SIBLING_LOTTERY_STAGE,
        /*{
          filter: ifStudentAttendsOneOf(CPS_DUAL_LANGUAGE_WORLD_LANGUAGE_ES_PROGRAMS),
          size: LotteryStageSize.LARGE,
        },*/
        GENERAL_LOTTERY_STAGE
      )
    },
    "8c1dffabe7825704cbe29a12138cc4d9": {
        "name": "",
        "desc": "Students currently enrolled in the school's eighth grade will have a deadline to submit their intent to enroll in ninth grade. For remaining seats, students are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "CHICAGO MATH & SCIENCE HS - General Education - Selection",
        ],
      "fn": conditional(
        {
          filter: ifStudentAttendsOneOf(CHICAGO_MATH_AND_SCIENCE_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM),
          fn: accept(everyone)
          
        },
        {
          filter: everyone, 
          fn: lottery(
            SIBLING_LOTTERY_STAGE,
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    "8c1dffabe7825704cbe29a12138cc4d0": {
        "name": "",
        "desc": "Students currently enrolled in the school's eighth grade will have a deadline to submit their intent to enroll in ninth grade. For remaining seats, students are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "CICS - CHICAGOQUEST HS - General Education - Selection"
        ],
      // NOTE previously CICS - CHICAGOQUEST HS - General Education - Selection had req fn id 8c1dffabe7825704cbe29a12138cc4d9
      //  -- was changed because both it and CHICAGO MATH & SCIENCE HS had identical req fn descriptions referring to 'this school'
      "fn": conditional(
        {
          filter: ifStudentAttendsOneOf(
            CICS_CHICAGOQUEST_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM
          ),
          fn: accept(everyone)
        },
        {
          filter: everyone, 
          fn: lottery(
            SIBLING_LOTTERY_STAGE,
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    "70b7c4a5e527fb50d69ea37b000765d8": {
        "name": "",
        "desc": "Minimum percentile of 70 in both reading and math on NWEA MAP, minimum 3.0 GPA in 7th grade, and minimum attendance percentage of 93.",
        "programs": [
            "CHICAGO ACADEMY HS - Scholars - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 70,
        gpa: 3.0,
        attendance: 93
      }))
    },
    "1d126a086436d78661af2cb249938c72": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements.  Students who live outside of the school's attendance boundary: Minimum attendance percentage of 92.",
        "programs": [
            "MULTICULTURAL HS - Fine and Performing Arts - Application"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            attendance: 92
          }))
        }
      )
    },
    "c36c294e63476a7959123bfe85a2c639": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements and can be admitted automatically.  Eligible students who live outside of the school's attendance boundary are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "MULTICULTURAL HS - Fine and Performing Arts - Selection",
            "CLEMENTE HS - General Education - Selection",
            "PHILLIPS HS - General Education - Selection"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: lottery(
            SIBLING_LOTTERY_STAGE,
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    "889af44e3306313029109d465b1c2de6": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements.  Students who live outside of the school's attendance boundary: Minimum GPA of 2.5 in 7th grade and minimum attendance percentage of 85.",
        "programs": [
            "CLEMENTE HS - General Education - Application"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            gpa: 2.5,
            attendance: 85
          }))
        }
      )

    },
    "6a02d16ba52a69b937a74a43c6a82769": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.  Attendance is required at an Information Session for all eligible applicants.",
        "programs": [
            "CLEMENTE HS - International Baccalaureate (IB) - Application",
            "CURIE HS - International Baccalaureate (IB) - Application",
            "FARRAGUT HS - International Baccalaureate (IB) - Application",
            "BRONZEVILLE HS - International Baccalaureate (IB) - Application",
            "HYDE PARK HS - International Baccalaureate (IB) - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48,
            gpa: 2.5
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24,
            gpa: 2.5
          }))
        }
      )
    },
    "1a043655763ab140a0d14f5080d63a2c": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP.  Testing is required for all eligible applicants.",
        "programs": [
            "BROOKS HS - Selective Enrollment High School - Application",
            "YOUNG HS - Selective Enrollment High School - Application",
            "SOUTH SHORE INTL HS - Selective Enrollment High School - Application",
            "WESTINGHOUSE HS - Selective Enrollment High School - Application",
            "LANE TECH HS - Selective Enrollment High School - Application",
            "HANCOCK HS - Selective Enrollment High School - Application",
            "LINDBLOM HS - Selective Enrollment High School - Application",
            "KING HS - Selective Enrollment High School - Application",
            "PAYTON HS - Selective Enrollment High School - Application",
            "JONES HS - Selective Enrollment High School - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24
          }))
        }
      )
   },
    "bd680e7bc10c03552140e26736221cf7": {
        "name": "",
        "desc": "Students are selected on a point system with a maximum of 900 points. Students are assigned points for 7th grade final grades, NWEA MAP scores, and the admissions test, each worth a maximum of 300 points.",
        "programs": [
            "BROOKS HS - Selective Enrollment High School - Selection",
            "YOUNG HS - Selective Enrollment High School - Selection",
            "NORTHSIDE PREP HS - Selective Enrollment High School - Selection",
            "SOUTH SHORE INTL HS - Selective Enrollment High School - Selection",
            "WESTINGHOUSE HS - Selective Enrollment High School - Selection",
            "LANE TECH HS - Selective Enrollment High School - Selection",
            "HANCOCK HS - Selective Enrollment High School - Selection",
            "LINDBLOM HS - Selective Enrollment High School - Selection",
            "KING HS - Selective Enrollment High School - Selection",
            "JONES HS - Selective Enrollment High School - Selection"
        ],
      "fn": sePointSystem
    },
    "94f10272b6ff9ee947b6c7f8e9adc98c": {
        "name": "",
        "desc": "Minimum percentile of 24 in both reading and math on NWEA MAP. An interview is required for applicants.",
        "programs": [
            "TAFT HS - NJROTC - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 24
      }))
    },
    "29034b3dd211fc6857c0762ea4431354": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on the student's NWEA MAP scores and the interview.",
        "programs": [
            "TAFT HS - NJROTC - Selection"
        ],
      "fn": notImplemented
    },
    "7ca8e42afc3b2240bdc21e9b02a9b6ff": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements.  Students who live outside of the school's attendance boundary: Minimum percentile of 60 in both reading and math on NWEA MAP and minimum 2.75 GPA in 7th grade. An audition is required for students who live outside of the school's attendance boundary.",
        "programs": [
            "LINCOLN PARK HS - Vocal Music - Application"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 60,
            gpa: 2.75
          }))
        }
      )
    },
    "abfbe30160c0ed3a6d925da2f6fbe7d6": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility/audition requirements and can be admitted automatically.  Students who live outside of the school's attendance boundary are selected on a point system. Points are based on the student's NWEA MAP scores in reading and math, 7th grade GPA, and the audition.",
        "programs": [
            "LINCOLN PARK HS - Vocal Music - Selection",
            "LINCOLN PARK HS - Instrumental Music - Selection"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: notImplemented
        }
      )
    },
    "9653c4a2af98c756aaeeaa36980f9dc5": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements.  Students who live outside of the school's attendance boundary: General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP, minimum 2.5 GPA in 7th grade, and minimum attendance percentage of 90.  IEP and EL students: Minimum combined percentile of 24 in reading and math on NWEA MAP, and minimum attendance percentage of 90.",
        "programs": [
            "PHILLIPS HS - General Education - Application"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 24,
            attendance: 90
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24,
            gpa: 2.5,
            attendance: 90
          }))
        }
      )
    },
    "49bc52caf46148ee777e8d3534f22700": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, proximity, tiers.",
        "programs": [
            "CRANE MEDICAL HS - Health Sciences - Selection",
            "CHICAGO AGRICULTURE HS - Agricultural Sciences - Selection",
            "VON STEUBEN HS - Science - Selection",
            "CLARK HS - Early College STEM - Selection",
            "DISNEY II HS - Fine Arts & Technology - Selection"
        ],
      // TODO: ...tiers? Currently, 'everyone'/GENERAL_LOTTERY_STAGE is used as the lottery stage filter here, as it's expected the tiers lottery won't advantage any particular students,
      // at least not in a noticeable way.
      "fn": lottery(
        SIBLING_LOTTERY_STAGE,
        PROXIMITY_LOTTERY_STAGE,
        GENERAL_LOTTERY_STAGE
      )
    },
    "3c0f47771fc40565978a3a894bd96705": {
        "name": "",
        "desc": "Minimum percentile of 50 in both reading and math on NWEA MAP, and minimum 2.0 GPA in 7th grade.",
        "programs": [
            "FENGER HS - Honors - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 50,
        gpa: 2.0
      }))
    },
    "308d8156364219130aef9a7de30a6c8d": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery.",
        "programs": [
            "FENGER HS - Honors - Selection",
            "CHICAGO VIRTUAL - General Education - Selection",
            "KENWOOD HS - Honors - Selection",
            "HUBBARD HS - University Scholars - Selection",
            "DUNBAR HS - Career Academy - Selection",
            "BRONZEVILLE HS - Honors - Selection",
            "ACE TECH HS - General Education - Selection",
            "MORGAN PARK HS - World Language and International Studies - Selection",
            "CHICAGO TECH HS - Science/Technology/Engineering/Math - Selection"
        ],
      "fn": lottery(
        GENERAL_LOTTERY_STAGE
      )
    },
    "ab7e9a52b2c607977c432dd5f27c6fe9": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. Each school selects a minimum cutoff score for selections.",
        "programs": [
            "PROSSER HS - International Baccalaureate (IB) - Selection"
        ],
      "fn": ibPointSystem
    },
    "8f4240fa22d2281a32186e7a65e75011": {
        "name": "",
        "desc": "Spry is a three-year, year-round school. Students are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "SPRY HS - General Education - Selection"
        ],
      "fn": lottery(
        SIBLING_LOTTERY_STAGE,
        GENERAL_LOTTERY_STAGE
      )
    },
    "b4dc6bde064d3f16c8bed871ea0cee30": {
        "name": "",
        "desc": "Minimum percentile of 50 in reading on NWEA MAP, minimum 2.0 GPA in 7th grade, and minimum attendance percentage of 80.",
        "programs": [
            "KELLY HS - AVID - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 50,
        gpa: 2.0,
        attendance: 80
      }))
    },
    "4ce6d6733bff330b780bc8390660d7cf": {
        "name": "",
        "desc": "Students will be selected based on teacher recommendation letter(s) and an interview process.",
        "programs": [
            "KELLY HS - AVID - Selection"
        ],
      "fn": notImplemented
    },
    "cb7238b523517845746779fe18ea174a": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP.   IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP.  Testing is required for all eligible applicants.",
        "programs": [
            "NORTHSIDE PREP HS - Selective Enrollment High School - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24
          }))
        }
      )
    },
    "14673a83b42347d3fdc6f2fa445c4d2f": {
        "name": "",
        "desc": "Student selections are based on points. Students are assigned points for 7th grade final GPA and 7th grade stanines. Students are ranked and selected from high to low. Students residing within the attendance overlay boundary of the school are selected first.",
        "programs": [
            "HANCOCK HS - Pre-Law - Selection",
            "HANCOCK HS - Pre-Engineering - Selection"
        ],
      "fn": notImplemented
    },
    "3d1c7a20cb38789ce4b0f651200dd9cd": {
        "name": "",
        "desc": "Minimum percentile of 75 in both reading and math on NWEA MAP, minimum 3.5 GPA in 7th grade, and minimum attendance percentage of 95.",
        "programs": [
            "KENWOOD HS - Honors - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 75,
        gpa: 3.5,
        attendance: 95
      }))
    },

    "027fe7b2d9fd7d9c6e55de49f723852f": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum combined percentile of 40 in reading and math on NWEA MAP, minimum 2.5 GPA in 7th grade, and minimum attendance percentage of 90.  IEP and EL students: Minimum combined percentile of 30 in reading and math on NWEA MAP, and minimum attendance percentage of 90.",
        "programs": [
            "SIMEON HS - Career Academy - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 30,
            attendance: 90
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaCombined: 40,
            gpa: 2.5,
            attendance: 90
          }))
        }
      )
    },
    "47befdd406dee45058f2dbd64a097154": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on the combined NWEA MAP scores and the interview.",
        "programs": [
            "SIMEON HS - Career Academy - Selection",
            "SIMEON HS - Honors - Selection"
        ],
      "fn": notImplemented
    },
    "39fbe111b62498337fb2f7973a18e570": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements.  Students who live outside of the school's attendance boundary: General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum attendance percentage of 85.  IEP and EL students: Minimum combined percentile of 40 in reading and math on NWEA MAP and minimum attendance percentage of 85.",
        "programs": [
            "HARLAN HS - General Education - Application"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 40,
            attendance: 85
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24,
            attendance: 85
          }))
        }
      )
    },
    "3e4ad403b3a6a2e998cd7d7b7d179091": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibilty requirements and can be admitted automatically.  Eligible students who live outside of the school's attendance boundary are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "HARLAN HS - General Education - Selection"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: lottery(
            SIBLING_LOTTERY_STAGE,
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    "f2829bdd4c9bc67e01b90bdd3db46c07": {
        "name": "",
        "desc": "Minimum percentile of 50 in both reading and math on NWEA MAP, minimum 3.0 GPA in 7th grade, and minimum attendance percentage of 90.",
        "programs": [
            "SIMEON HS - Honors - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 50,
        gpa: 3.0,
        attendance: 90
      }))
    },
    "c66032656bbf52edb1c9d6b62ca2e2eb": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements.  Students who live outside of the school's attendance boundary: Minimum combined percentile of 135 in reading and math on NWEA MAP and minimum 3.0 GPA in 7th grade.",
        "programs": [
            "LINCOLN PARK HS - Honors/Double Honors - Application"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaCombined: 135,
            gpa: 3.0
          }))
        }
      )
    },
    "1558a52d4663a54c6a5f06fa10062961": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements and can be admitted automatically.  Eligible students who live outside the school's attendance boundary are selected on a point system. Points are based on the student's NWEA MAP scores in reading and math and 7th grade GPA.",
        "programs": [
            "LINCOLN PARK HS - Honors/Double Honors - Selection"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound, 
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: notImplemented
        }
      )
    },
    "f4491f6cf1ebf200770f01271d93ba47": {
        "name": "",
        "desc": "Minimum percentile of 80 in both reading and math on NWEA MAP and minimum 3.5 GPA in 7th grade.",
        "programs": [
            "CHICAGO AGRICULTURE HS - Scholars - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 80,
        gpa: 3.5
      }))
    },
    "1976701fe4ffdbf53913f7f638f61b26": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. Preference is given to students with a sibling who is currently enrolled and will be enrolled in the upcoming school year.",
        "programs": [
            "CHICAGO AGRICULTURE HS - Scholars - Selection",
            "HARLAN HS - Pre-Engineering - Selection",
            "CHICAGO AGRICULTURE HS - Honors - Selection"
        ],
      "fn": lottery(
        SIBLING_LOTTERY_STAGE,
        GENERAL_LOTTERY_STAGE
      )
    },
    "736b7d124b6930cf8ae642563037eeb9": {
        "name": "",
        "desc": "Attendance at an Information Session is not required, but preference is given to students who attend an Information Session.",
        "programs": [
            "GOODE HS - Early College STEM - Application"
        ],
      // TODO: how to handle this??
      "fn": accept(everyone)
    },
    "85463a98c5a7ba21313aacdaeda48cd0": {
        "name": "",
        "desc": "Students are randomly selcted by computerized lottery. The lottery is conducted in the following order: students who live within the school's overlay boundary and attend an Information Session; students who live within the school's network and attend an Information Session; students who live outside of the network and attend an Information Session; students who live within the school's overlay boundary and do not attend an Information Session; students who live within the school's network and do not attend an Information Session; students who live outside of the network and do not attend an Information Session.",
        "programs": [
            "GOODE HS - Early College STEM - Selection"
        ],
      // TODO incorporate info session?
      // TODO what is school's 'network'?
      "fn": notImplemented
    },
    "8ccbd2eb3d4e026932b83ee576862b16": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP.  An audition is required for all eligible applicants.",
        "programs": [
            "SENN HS - Dance - Application",
            "SENN HS - Music - Application",
            "SENN HS - Theatre - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24
          }))
        }
      )
    },
    "7e054e33cdc685f9b099a243e45f0386": {
        "name": "",
        "desc": "Minimum 2.5 GPA in 7th grade.",
        "programs": [
            "ROBESON HS - Allied Health - Application"
        ],
      "fn": accept(ifHasGrades({
        gpa: 2.5
      }))
    },
    "b3b514880eaa7b9a4db6d6b6308eb1f7": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. The school selects the minimum cutoff score for selections. Preference is given to students who meet the minimum eligibility requirements, attend an Information Session, and are enrolled in the school\u2019s Academic Center.",
        "programs": [
            "MORGAN PARK HS - International Baccalaureate (IB) - Selection"
        ],
      "fn": ibPointSystem
    },
    "7574e7fa48dfdf030b059dbaff5351b6": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling; students who attend Brennemann, Courtenay, or McCutcheon Elementary Schools; general.",
        "programs": [
            "UPLIFT HS - General Education - Selection"
        ],
      "fn": lottery(
        SIBLING_LOTTERY_STAGE,
        {
          filter: ifStudentAttendsOneOf(
            BRENNEMANN_ES_PROGRAM, 
            COURTENAY_ES_PROGRAM, 
            MCCUTCHEON_ES_PROGRAM
          ),
          size: LotteryStageSize.LARGE
        },
        GENERAL_LOTTERY_STAGE
      )
    },
    "f9d7148f613933f83ad7d81004715614": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: students currently enrolled at the University of Chicago Woodlawn, sibling, proximity, general.",
        "programs": [
            "U OF C - WOODLAWN HS - General Education - Selection"
        ],
      "fn": lottery(
        {
          filter: ifStudentAttendsOneOf(
            U_OF_C_WOODLAWN_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM
          ),
          size: LotteryStageSize.LARGE
        },
        SIBLING_LOTTERY_STAGE,
        PROXIMITY_LOTTERY_STAGE,
        GENERAL_LOTTERY_STAGE
      )
    },
    "bc314f72be86fc565247301f6d8f99b8": {
        "name": "",
        "desc": "Minimum percentile of 40 in both reading and math on NWEA MAP, minimum 2.8 GPA in 7th grade, and minimum attendance percentage of 92.",
        "programs": [
            "COLLINS HS - Scholars - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 40,
        gpa: 2.8,
        attendance: 92
      }))
    },
    "685beedfccfae8bdb0649c36f03dfd7a": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: students currently enrolled in Chalmers, Dvorak, Herzl, Johnson, or Morton Elementary Schools; general.",
        "programs": [
            "COLLINS HS - Scholars - Selection"
        ],
      "fn": lottery(
        {
          filter: ifStudentAttendsOneOf(
            CHALMERS_ES_PROGRAM, 
            DVORAK_ES_PROGRAM, 
            HERZL_ES_PROGRAM, 
            JOHNSON_ES_PROGRAM, 
            MORTON_ES_PROGRAM
          ),
          size: LotteryStageSize.LARGE
        },
        GENERAL_LOTTERY_STAGE
      )
    },
    "9a2a27708247d3b692481757756b5226": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum combined percentile of 40 in both reading and math on NWEA MAP, minimum 2.0 GPA in 7th grade, and minimum attendance percentage of 80.  IEP/EL students have no eligibility requirements.",
        "programs": [
            "TEAM HS - General Education - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaCombined: 40,
            gpa: 2.0,
            attendance: 80
          }))
        }
      )
    },
    "8f880cad92a9a0dc49dd8d6ba4209b14": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: students with a 7th grade final GPA of 2.5 or higher, general.",
        "programs": [
            "TEAM HS - General Education - Selection"
        ],
      "fn": lottery(
        {
          filter: ifHasGrades({
            gpa: 2.5
          }),
          size: LotteryStageSize.LARGE
        },
        GENERAL_LOTTERY_STAGE
      )
    },
    "43cabfe5f36cbf1ccbb95a9962d90319": {
        "name": "",
        "desc": "Students enrolled in the Taft Academic Center or students who live within the school's attendance boundary can be admitted automatically. This program only accepts students who live within the school's attendance boundary or who attend the school's Academic Center.",
        "programs": [
            "TAFT HS - General Education - Selection"
        ],
      "fn": accept(
        either(
          ifInAttendBound, 
          ifStudentAttendsOneOf(TAFT_ACADEMIC_CENTER_PROGRAM)
        )
      )
    },
    "9fad1e147fb546e7a25d0fccba608035": {
        "name": "",
        "desc": "Students who are enrolled in the Morgan Park Academic Center and students who live within the school's attendance boundary can be admitted automatically.  Students who live outside of the school's attendance boundary are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "MORGAN PARK HS - General Education - Selection"
        ],
      "fn": conditional(
        {
          filter: ifStudentAttendsOneOf(MORGAN_PARK_ACADEMIC_CENTER_PROGRAM),
          fn: accept(everyone)
        },
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: lottery(
            SIBLING_LOTTERY_STAGE,
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    "7ef878b115498c24fd96f8891c346480": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum attendance percentage of 85.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP, and minimum attendance percentage of 85.",
        "programs": [
            "WILLIAMS HS - General Education - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48,
            attendance: 85
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24,
            attendance: 85
          }))
        }
      )
    },
    "01bb8009b315ff8fc0120dbadf71444c": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading on math on NWEA MAP, minimum 2.5 GPA in 7th grade, and minimum attendance percentage of 90.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP, minimum 2.5 GPA in 7th grade, and minimum attendance percentage of 90.",
        "programs": [
            "HUBBARD HS - University Scholars - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48,
            gpa: 2.5,
            attendance: 90
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24,
            gpa: 2.5,
            attendance: 90
          }))
        }
      )
    },
    "86b8c5719b264aa9072aa6433644fb60": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP, minimum 2.5 GPA in 7th grade, and minimum attendance percentage of 90.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP, and minimum attendance percentage of 90.",
        "programs": [
            "SENN HS - Digital Journalism - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48,
            attendance: 90
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24,
            gpa: 2.5,
            attendance: 90
          }))
        }
      )
    },
    "87bdb6caf5cf899ddb8041511761e58b": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "INTRINSIC HS - General Education - Selection",
            "YOUNG WOMENS HS - General Education - Selection",
            "INSTITUTO - HEALTH - General Education - Selection"
        ],
      "fn": lottery(
        SIBLING_LOTTERY_STAGE,
        GENERAL_LOTTERY_STAGE
      )
    },
    "23e3199eb5514de5456653457f75f366": {
        "name": "",
        "desc": "Minimum percentile of 60 in both reading and math on NWEA MAP, minimum 3.0 GPA in 7th grade, and minimum attendance percentage of 95.",
        "programs": [
            "KENWOOD HS - Magnet Program - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 60,
        gpa: 3.0,
        attendance: 95
      }))
    },
    "9b26cbed99b12a4c7cfca5a4713c6e17": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: students currently enrolled in the Kenwood Academic Center, general.",
        "programs": [
            "KENWOOD HS - Magnet Program - Selection"
        ],
      "fn": lottery(
        {
          filter: ifStudentAttendsOneOf(KENWOOD_ACADEMIC_CENTER_PROGRAM),
          size: LotteryStageSize.SMALL
        },
        GENERAL_LOTTERY_STAGE
      )
    },
    "0df5dab7dc2c1e8d8947d27287872269": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. The school determines the minimum cutoff score for selections. Preference is given to students who meet the minimum eligibilty requirements, attend an Information Session, and are enrolled in the school\u2019s Middle Years Programme partner, Edwards Elementary School.",
        "programs": [
            "CURIE HS - International Baccalaureate (IB) - Selection"
        ],
      "fn": ibPointSystem
    },
    "9e837f0a671ce67593e611ccf595306a": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary can be admitted automatically.  Students who live outside of the schools attendance boundary are randomly selected by computerized lottery. The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "CORLISS HS - Early College STEM - Selection"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: lottery(
            SIBLING_LOTTERY_STAGE,
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    "2fdf00001de412f0e493fa242647bad0": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. The school determines the minimum cutoff score for selections. Preference is given to students who meet the minimum eligibility requirements, attend an Information Session, and are enrolled in the school\u2019s Academic Center.",
        "programs": [
            "TAFT HS - International Baccalaureate (IB) - Selection"
        ],
      "fn": ibPointSystem
    },
    "ba2bb65c77d8d0932634f43bb01707cc": {
        "name": "",
        "desc": "Students who live within the school's attendance area can be admitted automatically.  Students who live outside of the school's attendance boundary are randomly selected by computerized lottery. The lottery is conducted in the following order: students currently enrolled in Carnegie Elementary School, sibling, general.",
        "programs": [
            "HYDE PARK HS - General Education - Selection"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: lottery(
            {
              filter: ifStudentAttendsOneOf(CARNEGIE_ES_PROGRAMS),
              size: LotteryStageSize.LARGE
            },
            SIBLING_LOTTERY_STAGE,
            GENERAL_LOTTERY_STAGE
          )
        }
      )
    },
    "08ee4f1aa31d5eb00bbc81c21139188b": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary: None  Students who live outside of the school's attendance boundary: Minimum percentile of 60 in both reading and math on NWEA MAP and minimum 2.75 GPA in 7th grade. An audition is required for students who live outside of the school's attendance boundary.",
        "programs": [
            "LINCOLN PARK HS - Instrumental Music - Application"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 60,
            gpa: 2.75
          }))
        }
      )
    },
    "d1b719a6ff9e6979e8f14b2c05b63352": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: Alcott Elementary School students, proximity, general.",
        "programs": [
            "ALCOTT HS - General Education - Selection"
        ],
      "fn": lottery(
        {
          filter: ifStudentAttendsOneOf(ALCOTT_ES_PROGRAM),
          size: LotteryStageSize.LARGE
        },
        SIBLING_LOTTERY_STAGE,
        PROXIMITY_LOTTERY_STAGE,
        GENERAL_LOTTERY_STAGE
      )
    },
    "f5ef0c0580eb110a06888b1c15313717": {
        "name": "",
        "desc": "Minimum percentile of 60 in both reading and math on NWEA MAP and minimum 2.75 GPA in 7th grade. An audition is required for all eligible applicants.",
        "programs": [
            "LINCOLN PARK HS - Drama - Application"
        ],
      "fn": accept(ifHasGrades({
        nweaBoth: 60,
        gpa: 2.5
      }))
    },
    "9f4eb5cee59306847a4fa61720f8e54d": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on the student's NWEA MAP scores in reading and math, 7th grade GPA, and the audition.",
        "programs": [
            "LINCOLN PARK HS - Drama - Selection"
        ],
      "fn": notImplemented
    },
    "625d1f6025c2e892f5573e60ab69f903": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on the NWEA MAP.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP.",
        "programs": [
            "HARLAN HS - Pre-Engineering - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24
          }))
        }
      )
    },
    "bc517a96ab40c67deddde65b6a4c07a8": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP.  A portfolio review is required for all eligible applicants.",
        "programs": [
            "SENN HS - Visual Arts - Application"
        ],
      "fn": conditional(
        {
          filter: ifIEPorEL,
          fn: accept(ifHasGrades({
            nweaCombined: 48
          }))
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            nweaBoth: 24
          }))
        }
      )
    },
    "cb76bc6620a1921e5f9630e2a39fb8d8": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on the student's NWEA MAP scores in reading and math, 7th grade final (cumulative) grades, and the portfolio review.",
        "programs": [
            "SENN HS - Visual Arts - Selection"
        ],
      "fn": notImplemented
    },
    "afb0dfcaa0f2cc236b2bd07a0244385e": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary or who attend Grow Community Schools can be admitted automatically. This program only accepts students who live within the school's attendance boundary or attend a Grow Community School.",
        "programs": [
            "AMUNDSEN HS - General Education - Selection"
        ],
      "fn": accept(
        either(
          ifInAttendBound,
          ifStudentAttendsOneOf(...GROW_COMMUNITY_SCHOOL_ES_PROGRAMS)
        )
      )
    },
    "78e3973b67c80b7984271b2a127e9ebf": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements.  Students who live outside of the school's attendance boundary: Minimum 2.5 GPA in 7th grade and minimum attendance percentage of 85.",
        "programs": [
            "KELVYN PARK HS - General Education - Application"
        ],
      "fn": conditional(
        {
          filter: ifInAttendBound,
          fn: accept(everyone)
        },
        {
          filter: everyone,
          fn: accept(ifHasGrades({
            gpa: 2.5,
            attendance: 85
          }))
        }
      )
    },
    "03c4df08f6e417f196f6e87415e2064f": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements and can be admitted automatically.  Eligible students who live outside of the school's attendance boundary are selected on a point system. Points are based on NWEA MAP scores, 7th grade GPA, and the interview.",
        "programs": [
            "KELVYN PARK HS - General Education - Selection"
        ],
        "fn": conditional(
          {
            filter: ifInAttendBound,
            fn: accept(everyone)
          },
          {
            filter: everyone,
            fn: notImplemented
          }
        )
    },
    "95025d14a97b9b32f5a2c8225c4ddd6e": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.  Attendance is required at an Information Session for all eliglble applicants.",
        "programs": [
            "HUBBARD HS - International Baccalaureate (IB) - Application"
        ],
        "fn": ibPointSystem
    },
    "296d2849362aa5311f457ffc834a868b": {
        "name": "",
        "desc": "Students are selected on a point system. Students are assigned points for 7th grade final GPA and 7th grade stanines. Students are ranked and selected from high to low. Students residing within the attendance overlay boundary of the school are selected first.",
        "programs": [
            "JONES HS - Pre-Law - Selection"
        ],
        "fn": notImplemented
    },
    "bb9e0e6f1af678dafb340a8e48ff4fbf": {
        "name": "",
        "desc": "Minimum percentile of 50 in both reading and math on NWEA MAP and minimum 3.0 GPA in 7th grade.",
        "programs": [
            "CHICAGO AGRICULTURE HS - Honors - Application"
        ],
        "fn": accept(ifHasGrades({
          nweaBoth: 50,
          gpa: 3.0
        }))
    },
    "26f5b02fa29f8a9c2b5bc909b844e585": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. The school determines the minimum cutoff score for selections. Preference is given to students who meet the minimum eligibility requirements, attend an Information Session, and are enrolled in the school\u2019s Middle Years Programme partner,  Madero Middle School.",
        "programs": [
            "FARRAGUT HS - International Baccalaureate (IB) - Selection"
        ],
        "fn": ibPointSystem
    },
    "6de001ff1207c6d38de87e65f3e11ff3": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: students currently enrolled at Chicago Collegiate Charter School, sibling, proximity, general.",
        "programs": [
            "CHICAGO COLLEGIATE - General Education - Selection"
        ],
        "fn": lottery(
          {
            filter: ifStudentAttendsOneOf(CHICAGO_VIRTUAL_GENERAL_EDUCATION_JOINT_ES_HS_PROGRAM),
            size: LotteryStageSize.LARGE
          },
          SIBLING_LOTTERY_STAGE,
          PROXIMITY_LOTTERY_STAGE,
          GENERAL_LOTTERY_STAGE
        )
    },
    "351d1f100c07b40673b51f4506b0e34e": {
        "name": "",
        "desc": "None. All interested students, including students who live within the overlay boundary of the school, must submit apply.",
        "programs": [
            "BACK OF THE YARDS HS - General Education - Application"
        ],
        "fn": accept(everyone)
    },
    "fd100fd06ddf9bd72e2809f6d659faf2": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: students who live within the attendance boundaries of Chavez, Daley, Hamline, Hedges, Lara, or Seward Elementary Schools; general.",
        "programs": [
            "BACK OF THE YARDS HS - General Education - Selection"
        ],
        // TODO find attendance bound geometries for these schools
        "fn": lottery(
          GENERAL_LOTTERY_STAGE
        )
    },
    "763686fddcad223e9a51aebaac42b61c": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements.  Students who live outside of the school's attendance boundary: General Education and 504 Plan students: Minimum percentile of 60 in both reading and math on NWEA MAP, minimum 3.0 GPA in 7th grade, and minimum attendance percentage of 95.  IEP/EL students have no eligibility requirements.",
        "programs": [
            "WELLS HS - General Education - Application"
        ],
        "fn": conditional(
          {
            filter: ifInAttendBound,
            fn: accept(everyone)
          },
          {
            filter: ifIEPorEL,
            fn: accept(everyone)
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 60,
              gpa: 3.0,
              attendance: 95
            }))
          }
        )
    },
    "379139122b47f0c7efa0e423df956e30": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements and can be admitted automatically.  Eligible students who live outside of the school's attendance boundary are randomly selected by computerized lottery. The lottery is conducted in the following order: students scoring above designated NWEA MAP percentile, sibling, general.",
        "programs": [
            "WELLS HS - General Education - Selection"
        ],
        "fn": conditional(
          {
            filter: ifInAttendBound,
            fn: accept(everyone)
          },
          {
            filter: everyone,
            fn: lottery(
              {
                filter: ifHasGrades({
                  nweaBoth: 60
                }),
                size:LotteryStageSize.LARGE
              },
              SIBLING_LOTTERY_STAGE,
              GENERAL_LOTTERY_STAGE
            )
          }
        )
    },
    "69aef50164a2914f16a28630afa50270": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 30 in both reading and math on NWEA MAP, minimum 2.0 GPA in 7th grade and minimum attendance percentage of 85.  IEP and EL students: Minimum combined percentile of 24 in reading and math on NWEA MAP, and minimum attendance percentage of 85.",
        "programs": [
            "COLLINS HS - General Education - Application"
        ],
        "fn": conditional(
          {
            filter: ifIEPorEL,
            fn: accept(ifHasGrades({
              nweaCombined: 24,
              attendance: 85
            }))
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 30,
              gpa: 2.0,
              attendance: 85
            }))
          }
        )
    },
    "a105512ab5a0eb6536021215baf98ea8": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conducted in the following order: students currently enrolled in Chalmers, Dvorak, Herzl, Johnson, or Morton Elementary Schools; sibling; general.",
        "programs": [
            "COLLINS HS - General Education - Selection"
        ],
        "fn": lottery(
          {
            filter: ifStudentAttendsOneOf(
              CHALMERS_ES_PROGRAM, 
              DVORAK_ES_PROGRAM,
              HERZL_ES_PROGRAM,
              JOHNSON_ES_PROGRAM,
              MORTON_ES_PROGRAM
            ),
            size: LotteryStageSize.LARGE
          },
          SIBLING_LOTTERY_STAGE,
          GENERAL_LOTTERY_STAGE
        )
    },
    "47750c8ffb643412fb55f3f3d6bde14a": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. The school selects the minimum cutoff score for selections. Preference is given to students who meet the minimum eligibility requirements, attend an Information Session, and are enrolled in the school\u2019s Middle Years Programme partner, Ogden Elementary School.",
        "programs": [
            "OGDEN HS - International Baccalaureate (IB) - Selection"
        ],
        "fn": ibPointSystem
    },
    "a6071a83f74612d54c3f659f9cb8a79c": {
        "name": "",
        "desc": "General Education/504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.  Attendance at an Information Session is required for all eligible applicants.",
        "programs": [
            "SENN HS - International Baccalaureate (IB) - Application"
        ],
        "fn": conditional(
          {
            filter: ifIEPorEL,
            fn: accept(ifHasGrades({
              nweaCombined: 48,
              gpa: 2.5
            }))
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 24,
              gpa: 2.5
            }))
          }
        )
    },
    "8605454896638a4de5feec75ed536489": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. The school determines the minimum cutoff score for selections. Preference is given to students who meet the minimum eligibility requirements, attend an Information Session, and are enrolled in the school\u2019s Middle Years Programme partner, Peirce Elementary School.",
        "programs": [
            "SENN HS - International Baccalaureate (IB) - Selection"
        ],
        "fn": ibPointSystem
    },
    "5e32e9c5ce34b2af75f2ec9e1a6c6643": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 50 in both reading and math on NWEA MAP, minimum 2.5 GPA in 7th grade.    IEP and EL students: Minimum combined percentile of 100 in reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.",
        "programs": [
            "BRONZEVILLE HS - Honors - Application"
        ],
        "fn": conditional(
          {
            filter: ifIEPorEL,
            fn: accept(ifHasGrades({
              nweaCombined: 100,
              gpa: 2.5
            }))
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 50,
              gpa: 2.5
            }))
          }
        )
    },
    "8a0c487746fe132f3f1925a84c56e9ee": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP and minimum 2.5 GPA in 7th grade.  Attendance at an Information Session is required for all eliglble applicants.",
        "programs": [
            "LINCOLN PARK HS - International Baccalaureate (IB) - Application"
        ],
        "fn": conditional(
          {
            filter: ifIEPorEL,
            fn: accept(ifHasGrades({
              nweaCombined: 48,
              gpa: 2.5
            }))
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 24,
              gpa: 2.5
            }))
          }
        )

    },
    "8e60c325cf7da2ae7aa09dc4e543590e": {
        "name": "",
        "desc": "Students are selected based on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. The school selects the minimum cutoff score for selections.",
        "programs": [
            "LINCOLN PARK HS - International Baccalaureate (IB) - Selection"
        ],
        "fn": ibPointSystem
    },
    "f1650d13a99b142887259980d7570270": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. The school determines the minimum cutoff score for selections.  Preference is given to students who meet the minimum eligibility requirements, attend an Information Session, and are enrolled in the school\u2019s Middle Years Programme partner, McPherson Elementary School.",
        "programs": [
            "AMUNDSEN HS - International Baccalaureate (IB) - Selection"
        ],
        "fn": ibPointSystem
    },
    "2434179e9c2fb95777cc4e0c6c998de1": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements.  Students who live outside of the school's attendance boundary: Minimum attendance percentage of 95.",
        "programs": [
            "WORLD LANGUAGE HS - General Education - Application"
        ],
        "fn": conditional(
          {
            filter: ifInAttendBound,
            fn: accept(everyone)
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              attendance: 95
            }))
          }
        )
    },
    "cbc3d549cb9e0240f077ac3c87b0f671": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements and can be admitted automatically.  Eligible students who live outside of the school's attendance boundary are randomly selected by computerized lottery.\u00a0The lottery is conducted in the following order: sibling, general.",
        "programs": [
            "WORLD LANGUAGE HS - General Education - Selection"
        ],
        "fn": conditional(
          {
            filter: ifInAttendBound,
            fn: accept(everyone)
          },
          {
            filter: everyone,
            fn: lottery(
              SIBLING_LOTTERY_STAGE,
              GENERAL_LOTTERY_STAGE
            )
          }
        )
    },
    "5cfeec40267082ca1ee0ca7e469687a7": {
        "name": "",
        "desc": "Contact the school for information.",
        "programs": [
            "LAKE VIEW HS - Early College STEM - Selection"
        ],
        "fn": notImplemented
    },
    "94798381edc76846cfb1ec3503fd61b0": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements.  Students who live outside of the school's attendance boundary: Essay",
        "programs": [
            "SOCIAL JUSTICE HS - General Education - Application"
        ],
        "fn": accept(everyone)
    },
    "62c57f6f0d8cb1d35fb12bd66840819f": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary have no eligibility requirements and can be admitted automatically.  Students who live outside of the school's attendance boundary are selected on a point system. The points are based on the student essay and NWEA MAP scores.",
        "programs": [
            "SOCIAL JUSTICE HS - General Education - Selection"
        ],
        "fn": conditional(
          {
            filter: ifInAttendBound,
            fn: accept(everyone)
          },
          {
            filter: everyone,
            fn: notImplemented
          }
        )
    },
    "182b0f39bdb6558622d86addc2aae6b7": {
        "name": "",
        "desc": "Students are selected on an overall applicant score. Points are based on NWEA MAP scores and 7th grade GPA. Students who live within the school's attendance boundary will be given 50 additional points. The school determines the minimum cutoff score for selections.  Preference is given to students who meet the minimum eligibilty requirements, attend an Information Session, and are enrolled in the school\u2019s Middle Years Programme partner, Carnegie Elementary School.",
        "programs": [
            "HYDE PARK HS - International Baccalaureate (IB) - Selection"
        ],
        "fn": ibPointSystem
    },
    "c7ce3086f4acc55ea53e0c97f71d12aa": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary and students currently enrolled in the Kenwood Academic Center can be admitted automatically. This program only accepts students who live within the school's attendance boundary or who are enrolled in the school's Academic Center.",
        "programs": [
            "KENWOOD HS - General Education - Selection"
        ],
        "fn": accept(either(
          ifInAttendBound,
          ifStudentAttendsOneOf(KENWOOD_ACADEMIC_CENTER_PROGRAM)
        ))
    },
    "65f9f712e101af2ba0f44401e01ca729": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on 7th grade final GPA and NWEA MAP scores. The school determines the minimum cutoff score for selections. Preference is given to students who live within the school's attendance boundary.",
        "programs": [
            "AUSTIN CCA HS - Pre-Engineering - Selection"
        ],
        "fn": notImplemented
    },
    "5fbf1b80166fef3a0e0db9557d500465": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 25 in both reading and math on NWEA MAP.   IEP and EL students: Minimum combined percentile of 50 in reading and math on NWEA MAP, and minimum attendance percentage of 85.",
        "programs": [
            "CHICAGO ACADEMY HS - General Education - Application"
        ],
        "fn": conditional(
          {
            filter: ifIEPorEL,
            fn: accept(ifHasGrades({
              nweaCombined: 50,
              attendance: 85
            }))
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 25
            }))
          }
        )
    },
    "924ceb6aa82922cdb541302a265549eb": {
        "name": "",
        "desc": "Students who live within the school's attendance boundary can be admitted automatically.  Students who live outside of the school's attendance boundary are randomly selected by computerized lottery. The lottery is conducted in the following order: students attending Boone, Field, Gale, Hayt, Jordan, Kilmer, McCutcheon, McPherson, or West Ridge Elementary Schools; sibling; general.",
        "programs": [
            "SULLIVAN HS - General Education - Selection"
        ],
        "fn": conditional(
          {
            filter: ifInAttendBound,
            fn: accept(everyone)
          },
          {
            filter: everyone,
            fn: lottery(
              {
                filter: ifStudentAttendsOneOf(
                  BOONE_ES_PROGRAM,
                  FIELD_ES_PROGRAM,
                  GALE_ES_PROGRAM,
                  HAYT_ES_PROGRAM,
                  JORDAN_ES_PROGRAM,
                  KILMER_ES_PROGRAM,
                  MCCUTCHEON_ES_PROGRAM,
                  MCPHERSON_ES_PROGRAM,
                  WEST_RIDGE_ES_PROGRAM
                ),
                size: LotteryStageSize.LARGE
              },
              SIBLING_LOTTERY_STAGE,
              GENERAL_LOTTERY_STAGE
            )
          }
        )
    },
    "46083386e3daad02ff00ac73d3987286": {
        "name": "",
        "desc": "Students are selected on a point system with a maximum of 900 points. Points are based on 7th grade final grades, NWEA MAP scores, and the admissions test, each worth a maximum of 300 points.",
        "programs": [
            "PAYTON HS - Selective Enrollment High School - Selection"
        ],
        "fn": sePointSystem
    },
    "536556326f56a1875afccbeedde85fb9": {
        "name": "",
        "desc": "Students are randomly selected by computerized lottery. The lottery is conduced in the following order: sibling, general.",
        "programs": [
            "LEGAL PREP HS - General Education - Selection"
        ],
        "fn": lottery(
          SIBLING_LOTTERY_STAGE,
          GENERAL_LOTTERY_STAGE
        )
    },
    "7cc8a6e9cd27c6a9e8d43b323a961475": {
        "name": "",
        "desc": "Applicants must be girls currently enrolled in eighth grade.",
        "programs": [
            "YOUNG WOMENS HS - General Education - Application"
        ],
        // TODO handle gender?
        "fn": accept(everyone)   
    },
    "a787cb9987ca94d3c2370e2cb67d50cc": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 50 in both reading and math on the NWEA MAP and minimum 3.0 GPA in 7th grade.  IEP and EL students: Minimum combined percentile of 60 in reading and math on NWEA MAP.",
        "programs": [
            "MORGAN PARK HS - World Language and International Studies - Application"
        ],
        "fn": conditional(
          {
            filter: ifIEPorEL,
            fn: accept(ifHasGrades({
              nweaCombined: 60
            }))
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 50,
              gpa: 3.0
            }))
          }
        )
    },
    "d7e3e54b06028c21a40cf58127e2aef4": {
        "name": "",
        "desc": "Minimum percentile of 60 in both reading and math on NWEA MAP and minimum 3.0 GPA in 7th grade. Eligible students must submit teacher recommendations and an essay. See www.vonsteuben.org for submission details (click 'Apply' and 'Scholars Program'). Applicants who are not eligible will automatically be included in the computerized lottery selection process for the Von Steuben Science Program.",
        "programs": [
            "VON STEUBEN HS - Scholars - Application"
        ],
        "fn": accept(ifHasGrades({
          nweaBoth: 60,
          gpa: 3.0
        }))
    },
    "0a7d20d2cdbb736d46e6c7a37e5b7764": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on the teacher recommendations and the essay.",
        "programs": [
            "VON STEUBEN HS - Scholars - Selection"
        ],
        "fn": notImplemented
    },
    "a59652b1328b73b5acb08979a32a9db8": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum attendance percentage of 92.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP and minimum attendance percentage of 92.  An audition is required for all eligible applicants.",
        "programs": [
            "CHIARTS HS - Music - Vocal - Application",
            "CHIARTS HS - Theatre - Application",
            "CHIARTS HS - Music - Instumental - Application",
            "CHIARTS HS - Dance - Application"
        ],
        "fn": conditional(
          {
            filter: ifIEPorEL,
            fn: accept(ifHasGrades({
              nweaCombined: 48,
              attendance: 92
            }))
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 24,
              attendance: 92
            }))
          }
        )
    },
    "500cba9f742c1244ddaa1c37070299f1": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on the student's NWEA MAP scores in reading and math and the audition.",
        "programs": [
            "CHIARTS HS - Music - Vocal - Selection",
            "CHIARTS HS - Theatre - Selection",
            "CHIARTS HS - Music - Instumental - Selection",
            "CHIARTS HS - Dance - Selection",
            "CHIARTS HS - Musical Theatre - Selection"
        ],
        "fn": notImplemented
    },
    "b89ee63f6f32c43ca9707a85d8dc98e7": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum attendance percentage of 92.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP and minimum attendance percentage of 92.   A portfolio review is required for all eligible applicants.",
        "programs": [
            "CHIARTS HS - Creative Writing - Application"
        ],
        "fn": conditional(
          {
            filter: ifIEPorEL,
            fn: accept(ifHasGrades({
              nweaCombined: 48,
              attendance: 92
            }))
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 24,
              attendance: 92
            }))
          }
        )
    },
    "fd2b72f8025478fc320959b283c0ff2f": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on the student's NWEA MAP scores in reading and math and the portfolio review.",
        "programs": [
            "CHIARTS HS - Creative Writing - Selection"
        ],
        "fn": notImplemented
    },
    "3f45862ca2003745fc3f4e12492abdfa": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum attendance percentage of 92.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP.  A portfolio review is required for all eligible applicants.",
        "programs": [
            "CHIARTS HS - Visual Arts - Application"
        ],
        "fn": conditional(
          {
            filter: ifIEPorEL,
            fn: accept(ifHasGrades({
              nweaCombined: 48
            }))
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 24,
              attendance: 92
            }))
          }
        )
    },
    "6c2d1016a23c9b0e67736b91a166b594": {
        "name": "",
        "desc": "Students are selected on a point system. Points are based on the student's NWEA MAP socres in reading and math and the portfolio review.",
        "programs": [
            "CHIARTS HS - Visual Arts - Selection"
        ],
        "fn": notImplemented
    },
    "ae43e969113d1c6b1b6fe0c0a1321c40": {
        "name": "",
        "desc": "General Education and 504 Plan students: Minimum percentile of 24 in both reading and math on NWEA MAP and minimum attendance percentage of 92.  IEP and EL students: Minimum combined percentile of 48 in reading and math on NWEA MAP and minimum attendance percentage of 92. An audition is required for all eligible applicants.",
        "programs": [
            "CHIARTS HS - Musical Theatre - Application"
        ],
        "fn": conditional(
          {
            filter: ifIEPorEL,
            fn: accept(ifHasGrades({
              nweaCombined: 48,
              attendance: 92
            }))
          },
          {
            filter: everyone,
            fn: accept(ifHasGrades({
              nweaBoth: 24,
              attendance: 92
            }))
          }
        )
    }
  }

export default HSReqFns;
