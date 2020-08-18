const { createNewNote, validateNote, deleteById } = require("../../lib/notes")
const { notes } = require("../../db/db")
const router = require('express').Router();

router.get("/notes", (req,res) => {
    let results = notes;
    res.json(results);
});


router.post("/notes", (req,res) => {
    req.body.id = Math.floor(Math.random()*999999999).toString();
    if(!validateNote(req.body)) {
        res.status(400).send("The note is not properly formatted.");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete("/notes/:id", (req, res) => {
notes.splice(req.body.id,1)
res.send("Note deleted")
});

module.exports = router;