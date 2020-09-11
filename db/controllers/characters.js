const express = require("express");
const router = express.Router();

//importing the Character Model
const Character = require("../models/Character")


router.get("/", (req, res) => {
    res.send("<h1>Sup</h1>")
    Character.find({}).then(allCharacters => res.json(allCharacters));
  });



// router.get("/:name", (req, res) => {
//     Character.find({ name: req.params.name }).then(characters => res.json(characters));
//   });
  


// // router.post("/", (req, res) => {
// //   const newCharacter = req.body;
// //   Character.create(req.body)
// //     // send the new record back as json
// //     .then(characters => res.json(characters));
// // });



// router.delete("/:name", (req, res) => {
//     Character.findOneAndDelete({ name: req.params.name }).then(characters => {
//       res.json(characters);
//     });
//   });

  module.exports = router;