const fs = require('fs');
const colors = require('colors/safe');

let createFile = (base, limit, cb) => {

  if (!base) return cb(colors.red(`base is require.`));

  if (!Number(base)) return cb(colors.red(`The value ${base} isn't number.`));

  let data = '';

  for (let i = 1; i <= limit; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  };

  console.log(process.cwd());

  fs.writeFile(`${process.cwd()}/tables/table-${base}.txt`, data, (error) => {
    if (error) return console.error('El archivo no se ha podido escribir', colors.red(error.message));

    cb(null, `El archivo: ${colors.green(`table-${base}`)} ha sido creado correctamente`);
  });
}

module.exports = createFile;