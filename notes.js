const fs = require('fs');
const _ = require('lodash');

const getNotes = () => {
    return 'Your Notes...';
};

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateArray = _.filter(notes, e => e.title === title);
    if (duplicateArray.length == 0) {
        notes.push({
            title,
            body
        });
    
        saveNotes(notes);
    }
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

module.exports.getNotes = getNotes;
module.exports.addNotes = addNotes;
