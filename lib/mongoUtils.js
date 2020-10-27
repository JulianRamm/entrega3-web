const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://dbUser:clavemongo@cluster0.n25ib.mongodb.net/Donarte?retryWrites=true&w=majority";
const conn = MongoClient.connect(uri, { useUnifiedTopology: true });

module.exports = conn;
