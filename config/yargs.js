let options = {
  base: {
    demandOption: true,
    alias: 'b',
  },
  limit: {
    alias: 'l',
    default: 10,
  },
};

const { argv } = require('yargs')
  .command('list', 'List table in console', options)
  .command('create', 'create file with table', options);

module.exports = {
  argv,
};