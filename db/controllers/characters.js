const express = require("express");
const router = express.Router();

const Character = require("../models/Character")


router.get("/", (req, res) => {
    // option 1, just send some html back
    // res.send('<h1>Sup Multiverse?</h1>')
  
    // option 2, send a regular object back
    // res.json({hello: 'multiverse'})
  
    // option 3, use the model to look up data in mongodb
    // send back the data as json
    Character.find({}).then(allCharacter => res.json(allCharacter));
  });

  module.exports = router;