const fs = require('fs');
const _ = require('lodash');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your Notes...';
};

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateValue = _.find(notes, e => e.title === title);
    if (!duplicateValue) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Note save sucessfully!'));
    } else {
        console.log(chalk.red.inverse('Note with title present!'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = _.filter(notes, e => title !== e.title);
    if(!_.isEqual(notes, newNotes)) {
        console.log(chalk.green.inverse('Note Removed!'));
        saveNotes(newNotes);
    } else {
        console.log(chalk.red.inverse('No Note Found!')); 
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('Your Notes'));
    _.forEach(notes, (note) => {
        console.log(`title: \'${note.title}\' body: \'${note.body}\'`);
    });
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./notes.json');
        return JSON.parse(dataBuffer.toString());
    }
    catch(e) {
        return [];
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = _.find(notes, el => title === el.title);

    if(note) {
        console.log(chalk.green.inverse('Note Found'));
        console.log(`title: \'${note.title}\' body: \'${note.body}\'`);
    } else {
        console.log(chalk.red.inverse('Note not found'));
    }
};

module.exports.getNotes = getNotes;
module.exports.addNotes = addNotes;
module.exports.removeNote = removeNote;
module.exports.listNotes = listNotes;
module.exports.readNote = readNote;