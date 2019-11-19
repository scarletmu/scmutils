"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const pkg = require('../package.json');
let cmdInputed = false;
program.version(pkg.version);
program
    .command('gradle2maven [source]')
    .description('Transform Gradle local dep files to Maven style.')
    .action((source) => {
    console.log('hello');
});
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
//# sourceMappingURL=index.js.map