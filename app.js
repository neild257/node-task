const yargs = require('yargs');
const { addNotes, removeNote } = require('./notes');

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
    handler: (args) => {
        // console.log(`Title: ${args.title}`);
        // console.log(`Body: ${args.body}`);
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
    handler: (args) => {
        removeNote(args.title);
    }
});

// Create a list command for listing of notes
yargs.command({
    command: 'list',
    describe: 'To list all notes',
    handler: (args) => {
        console.log('handler for listing all notes');
    }
});

// Create a read command for reading a note
yargs.command({
    command: 'read',
    describe: 'To read a note',
    handler: (args) => {
        console.log('handler for reading a note');
    }
});

yargs.parse();

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
