const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");
const getNotes = require('./notes.js');
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// CREATE ADD COMMAND
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Body Note",
            demandOption: true,
            type: "string"
        },
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// CREATE REMOVE COMMAND
yargs.command({
    command: "remove",
    describe: "Remove the note",
    handler: function () {
        notes.removeNote(argv.title);
    }
});

// CREATE READ COMMAND OR GET COMMAND
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

// CREATE LIST COMMAND
yargs.command({
    command: "list",
    describe: "List of notes",
    handler: function () {
        notes.listNotes();
    }
});

// console.log(process.argv);
console.log(yargs.argv);

// ------------------------------------------------------------------------------------------- //
// 1. Validator module

// const validator = require("validator");
// const getNotes = require('./notes.js');
// const msg = getNotes();
// console.log(msg);
// console.log(validator.isEmail("devgan@gmail.com"));




// ------------------------------------------------------------------------------------------ //
// 2. Chalk module

// const chalk = require("chalk");
// const getNotes = require('./notes.js');
// console.log(chalk.red(msg));
// console.log(chalk.green.underline.bgYellow.bold("Success...."));




// ----------------------------------------------------------------------------------------- //
// 3. Adding and Removing notes

// const chalk = require("chalk");
// const getNotes = require('./notes.js');
// console.log(process.argv[2]);
// const command = process.argv[2];
// if (command === "add") {
//     console.log("Adding Note!");
// } else if(command === "remove") {
//     console.log("Removing Note!");
// }