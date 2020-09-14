const express = require("express");
const router = express.Router();
const Character = require("../models/Character");

router.get("/", (req, res) => {
  Character.find({}).then((allCharacters) => res.json(allCharacters));
});

router.get("/name/:name", (req, res) => {
  Character.find({ name: req.params.name }).then((characters) =>
    res.json(characters)
  );
});

router.post("/", (req, res) => {
  Character.create(req.body).then((Character) => res.json(Character));
});

router.put("/name/:name", (req, res) => {
  Character.findOneAndUpdate({
    name: req.params.name,
  }).then((characters) => {
    res.json(characters);
  });
});

router.delete("/name/:name", (req, res) => {
  Character.findOneAndDelete({ name: req.params.name }).then((characters) => {
    res.json(characters);
  });
});

module.exports = router;
