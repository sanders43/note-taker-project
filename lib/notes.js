const fs = require("fs");
const path = require("path");



const createNewNote = (body, notesArray) => {
    const newNote = body;
    notesArray.push(newNote)
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return newNote;
}

const validateNote = (note) => {
    if(!note.title || typeof note.title !== "string") {
        return false;
    }

    if(!note.text || typeof note.text !== "string") {
        return false;
    }

    if(!note.id || typeof note.id !== "string") {
        return false;
    }
    return true;
}
const deleteById = (id, notesArray) => {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

module.exports = {
    createNewNote,
    validateNote,
    deleteById
}