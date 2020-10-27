const conn = require("../lib/mongoUtils");
const mu = require("../lib/mongoUtils");

//GET ALL
const getUsers = (callback) => {
  mu.then((client) => {
    client
      .db("Donarte")
      .collection("Users")
      .find({})
      .toArray((err, data) => {
        callback(data);
      });
  });
};

//GET ONE
const getUser = (email, callback) => {
  mu.then((client) => {
    client
      .db("Donarte")
      .collection("Users")
      .findOne({ email })
      .then((data) => {
        callback(data);
      });
  });
};

//POST
const addUser = (usuario, callback) => {
  mu.then((client) => {
    client
      .db("Donarte")
      .collection("Users")
      .insertOne(usuario)
      .then((response) => {
        callback(response);
      });
  });
};

const user = { getUsers, getUser, addUser };

module.exports = user;
