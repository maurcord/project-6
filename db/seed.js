const Character = require("./models/Character");
const data = require("./characters.json");
//Putting the information into the database
// Bringing in data from Characters Json file
// Bringing in the world Model
// structuring data




const newCharacterData = data.map((item) => {
  const newCharacters = {
    Name: item.Name,
    description: item.description,
    imageUrl: item.imageUrl,
  };
  return newCharacters;
});
console.log(newCharacterData);

// deletes data and starts fresh
Character.deleteMany({}).then(() => {
  Character.create(newCharacterData)
    .then((character) => console.log(character))
    .catch((err) => console.log(err));
});


