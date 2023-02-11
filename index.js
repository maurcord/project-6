const cors = require("cors");
const express = require("express");
const parser = require("body-parser");
const Character = require("./db/models/Character");
const charactersController = require("./db/controllers/characters");
require("dotenv").config();
const app = express();

app.use(cors());

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.get("/", (req, res) => {
  res.redirect("/characters");
});

app.get("/characters", (req, res) => {
  Character.find({}).then((Character) => {
    res.json(Character);
  });
});

app.post("/characters", (req, res) => {
  Character.create(req.body).then((characters) => {
    res.json(characters);
  });
});

app.delete("/characters/:name", function (req, res) {
  Character.findOneAndRemove({ name: req.params.id }).then((characters) => {
    res.json(characters);
  });
});

app.use("/characters/", charactersController);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
