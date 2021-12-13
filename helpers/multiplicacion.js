const fs = require("fs");
const colors = require('colors');


const crearArchivo = async (base, listar, hasta) => {
  
  let salida = "";
  let nombreArchivo = `tabla-${base}.txt`;
  
  for (let index = 0; index <= hasta; index++) {
    salida += `${base} x ${index} = ${index * base}\n`;
  }
  
  if (listar) {
    console.log(colors.rainbow("==============="));
    console.log(" Tabla del ", base);
    console.log(colors.rainbow("==============="));
    console.log(salida.rainbow);
  }

  fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
  });

  return nombreArchivo;
};

module.exports = {
  crearArchivo,
};
