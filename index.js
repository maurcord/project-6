const express = require("express");
const parser = require("body-parser");
const app = express();
const charactersController = require("./db/controllers/characters");
require("dotenv").config();

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.use("/", charactersController);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
