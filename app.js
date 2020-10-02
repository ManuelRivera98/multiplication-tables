const { argv } = require('./config/yargs');

let command = require('./functions/command');

command(argv._[0], argv.base, argv.limit);