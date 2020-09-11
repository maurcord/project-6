const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const charactersController = require("./db/controllers/characters");
require("dotenv").config();

const app = express();

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.use(cors());

app.use("/", charactersController);

app.get("/", (req,res) => {
  res.send("<h1>hey</h1>")
  // res.redirect("/characters")
});

app.use("/characters", charactersController);


app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
