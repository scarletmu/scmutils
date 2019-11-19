import * as program from 'commander';
const pkg = require('../package.json');
let cmdInputed = false;

program.version(pkg.version);

program
    .command('*')
    .action(() => {
        console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
        process.exit(1);
    });

program.parse(process.argv);

if (process.argv.length < 3) {
    program.help();
}

