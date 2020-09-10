const mongoose = require("../connection");

// Setting up what we want our database to look like

const characterSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;

