const minimist = require('minimist');

const args = minimist(process.argv.slice(2), {
    string: ['nama'],
    alias: {
        nama: 'n'
    },
});

console.log(args);
console.log(`hi ${args.nama}`);