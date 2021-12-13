// const { argv } = require("process");
const argv = require('./config/yargs')
const { option, boolean } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicacion");

console.clear();

// const [, , arg3] = process.argv;
// const [ , base = 5] = arg3.split('=')
// console.log(process.argv)
// console.log(argv);
// console.log(argv.b);

// console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
