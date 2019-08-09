const fs = require('fs');

const getNotes = () => {
    return 'Your Notes...';
};

const addNotes = (title, body) => {
    const notes = loadNotes();
    notes.push({
        title,
        body
    });

    saveNotes(notes);
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
