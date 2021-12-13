const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en la consola'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: 'Límite de la tabla'
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
