import {expect} from "chai";

import StudentData from "../../../../../src/shared/types/student-data";
import CPSProgram from "../../../../../src/shared/types/cps-program";

import {ifStudentAttendsOneOf} from "../../../../../src/shared/util/req-fn-builders/filters";

// FIXME: I'm not sure the rest of your code understands that this needs to be using ProgramID.
describe("ifStudentAttends requirement function filter", () => {

  it("should return a filter that returns true if the student attends one of the passed hs programs", () => {

  });
});
