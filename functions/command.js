const colors = require('colors');

let createFileFn = require('./multiplication');
let listFn = require('./list');

const selectCommand = (command, base, limit = 10) => {
  switch (command) {
    case 'list':
      listFn(base, limit)
        .then(data => console.log(data))
        .catch(err => console.error(err));
      break;
    case 'create':
      createFileFn(base, limit, (error, res) => {
        if (error) return console.error(error);

        console.log(res);
      });
      break;
    case undefined:
      console.log('The command is require.'.red);
      break;
    default:
      console.log(`The command ${command} don't exist.`.yellow);
      break;
  }
}

module.exports = selectCommand;