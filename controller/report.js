const mu = require("../lib/mongoUtils");
const ObjectId = require("mongodb").ObjectId;

//GET ALL
const getReports = (callback) => {
  mu.then((client) => {
    client
      .db("Donarte")
      .collection("Reports")
      .find({})
      .toArray((err, data) => {
        callback(data);
      });
  });
};

//GET ONE
const getReport = (id, callback) => {
  mu.then((client) => {
    client
      .db("Donarte")
      .collection("Reports")
      .findOne({ _id: ObjectId(id) })
      .then((data) => {
        callback(data);
      });
  });
};

//POST
const addReport = (report, callback) => {
  mu.then((client) => {
    client
      .db("Donarte")
      .collection("Reports")
      .insertOne(report)
      .then((response) => {
        callback(response);
      });
  });
};

const report = { getReports, getReport, addReport };

module.exports = report;
