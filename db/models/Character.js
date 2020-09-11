const mongoose = require("../connection");

// Setting up what we want our database to look like

const characterSchema = new mongoose.Schema({
  Name: String,
  description: String,
  imageUrl: String,
});



// Creates a model using the Schmea and attachdes it to our moongoose instance.
// A model i s used to query and change data in the database
const Character = mongoose.model("Character", characterSchema);


// this exports the instantiated model. kind of like a class
module.exports = Character;

