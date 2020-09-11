// const cors = require("cors");
const express = require("express");
const parser = require("body-parser");

const charactersController = require("./db/controllers/characters");
require("dotenv").config();
// app.use(cors());
const app = express();

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.get("/", (req, res) => {
  res.redirect("/characters");
});

app.use("/characters", charactersController);

 app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
