const express = require("express");
const app = express();
const Character = require('./models/Character');
const bodyParser = require("body-parser");

app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => {
  res.redirect("/characters");
});

// app.get('/characters', (req,res) => {
//    try {
//      let characters = Character.find().then((characters) => {
//        console.log(characters);
//        if (characters) {
//          return res.status(200).json(characters);
//        } else {
//           return res.status(404).send('characters not found');
//        }
//      });
//    } catch(e) {
//      return res.status(500).json({ error: e });
//    }
//   });

// app.get("/characters/:id", (req, res) => {
//   try {
//     let characters = Character.findOne({ _id: req.params.id }).then(
//       (characters) => {
//         console.log(characters);
//         if (characters) {
//           return res.status(200).json(characters);
//         } else {
//           return res.status(404).send("characters not found");
//         }
//       }
//     );
//   } catch (e) {
//     return res.status(500).json({ error: e });
//   }
// });

// app.post("/characters", (req, res) => {
//   let character = req.body;
//   console.log(character);
//   Character.create(character).then((characterResponse) => {
//     console.log(characterResponse);
//   });
//   res.json(character);
// });

app.listen(3000, () => {
  console.log("listening on 3000");
});


// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });