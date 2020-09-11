const express = require("express");
const router = express.Router();

//importing the Character Model
const Character = require("../models/Character");

router.get("/", (req, res) => {
  Character.find({}).then((allCharacters) => res.json(allCharacters));
});

router.get("/name/:Name", (req, res) => {
  Character.find({ Name: req.params.name }).then((characters) =>
    res.json(characters)
  );
});

// router.post("/", (req, res) => {
//   const newCharacter = req.body;
//   Character.create(req.body)
//     // send the new record back as json
//     .then(characters => res.json(characters));
// });

// router.delete("/:name", (req, res) => {
//     Character.findOneAndDelete({ name: req.params.name }).then(characters => {
//       res.json(characters);
//     });
//   });

module.exports = router;
