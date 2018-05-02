/**
 * buildProgramTypes takes programTypesConfig, a js object matching the
 * schema at ../schema/program-type-ids.config.json, and returns a js object
 * that maps program type IDs to program type names.
 * */
function buildProgramTypeIDTable(programTypeIDsConfig) {
  let output = {}
  programTypesConfig.forEach( record => {
    output[record.id] = record.name;
  });
  return output;
}

module.exports = buildProgramTypeIDTable;
