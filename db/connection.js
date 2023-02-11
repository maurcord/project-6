const mongoose = require("mongoose");

mongoose.Promise = Promise;


// let mongoURI = process.env.DB_URL;

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://127.0.0.1:27017/character";
  }

  mongoose
  .connect(mongoURI, { useUnifiedTopology: true },{ useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection failed!", error));


module.exports = mongoose;