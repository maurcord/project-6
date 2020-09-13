const mongoose = require("./connection");
const Character = require("./models/Character");
const data = require("./characters.json");
//Putting the information into the database
// Bringing in data from Characters Json file
// Bringing in the world Model
// structuring data

const newCharacterData = data.map((item) => {
  const character = {};
  character.name = item.name;
  character.description = item.description;
  character.imageUrl = item.imageUrl;
  return character;
});
console.log(newCharacterData);

// deletes data and starts fresh
Character.deleteMany({}).then(() => {
  Character.create(newCharacterData)
    .then((characters) => {
      console.log(characters);
    })
    .catch((err) => {
      console.log(err);
    });
});
