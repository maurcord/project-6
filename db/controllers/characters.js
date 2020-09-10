const express = require("express");
const router = express.Router();
const Character = require("../models/Character")



router.get("/", (req, res) => {
   Character.find({}).then(allCharacter => res.json(allCharacter));
  });



router.get("/:name", (req, res) => {
    Character.find({ title: req.params.name }).then(characters => res.json(characters));
  });
  


router.post("/", (req, res) => {
  const newCharacter = req.body;
  Character.create(req.body)
    // send the new record back as json
    .then(character => res.json(character));
});



router.delete("/:name", (req, res) => {
    Character.findOneAndDelete({ title: req.params.name }).then(character => {
      res.json(character);
    });
  });

  module.exports = router;