const yargs = require('yargs');
const { addNotes, removeNote, listNotes, readNote } = require('./notes');

// creating a notes application
// we can add, remove, list and read the notest.
yargs.version('1.0');

// Create a add command for the notes app
yargs.command({
    command: 'add',
    describe: 'To add a note',
    builder: {
        title: {
            describe: 'Title of a note',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Body of a note',
            demandOption: true,
            type: 'string',
        }
    },
    handler(args) {
        addNotes(args.title, args.body);
    }
});

// Create a remove command for the notes app
yargs.command({
    command: 'remove',
    describe: 'To remove a note',
    builder: {
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string',
        },
    },
    handler(args) {
        removeNote(args.title);
    }
});

// Create a list command for listing of notes
yargs.command({
    command: 'list',
    describe: 'To list all notes',
    handler() {
        listNotes();
    }
});

// Create a read command for reading a note
yargs.command({
    command: 'read',
    describe: 'To read a note',
    builder: {
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string',
        },
    },
    handler(args) {
        readNote(args.title);
    }
});

yargs.parse();

// const tasks = {
//     tasks: [
//         {
//             name: 'grocery shopping',
//             status: true,
//         },
//         {
//             name: 'fruit picking',
//             status: false,
//         },
//     ],
//     getTasksToDo() {
//         return this.tasks.filter(el => !el.status);
//     }
// };

// console.log(tasks.getTasksToDo());

// console.log(process.argv[2]);

// const chalk = require('chalk');
// console.log(chalk.bgGreen.bold.blue('Success!'));

// const validator = require('validator');
// console.log(validator.isURL('http://harry'));

// Task_2
// const { getNotes } = require('./notes');

// console.log(getNotes());
// Requiring the file
// const { name } = require('./utils.js');
// console.log('My name is: ', name);

// Task to Append the data in sync in file
// const fs = require('fs')
// fs.appendFileSync('appendFile.txt', 'Harshit Pareek');
// fs.appendFileSync('appendFile.txt', 'Appended Text');
