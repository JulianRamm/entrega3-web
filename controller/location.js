const mu = require("../lib/mongoUtils");
const ObjectId = require("mongodb").ObjectId;

//GET ALL
const getLocations = (callback) => {
  mu.then((client) => {
    client
      .db("Donarte")
      .collection("Locations")
      .find({})
      .toArray((err, data) => {
        callback(data);
      });
  });
};

//GET ONE
const getLocation = (id, callback) => {
  mu.then((client) => {
    client
      .db("Donarte")
      .collection("Locations")
      .findOne({ _id: ObjectId(id) })
      .then((data) => {
        callback(data);
      });
  });
};

//POST
const addLocation = (location, callback) => {
  mu.then((client) => {
    client
      .db("Donarte")
      .collection("Locations")
      .insertOne(location)
      .then((response) => {
        callback(response);
      });
  });
};

//PUT
const updateLocation= (id,ubicacion,callback)=>{
  mu.then((client)=>{
    client
    .db("Donarte")
    .collection("Locations")
    .updateOne({_id: new ObjectId(id)},
    {
      $set:{
        nombre:ubicacion.nombre,
        latitud:ubicacion.latitud,
        longitud: ubicacion.longitud
      }
    })
    .then((result)=>{
      callback(result);
    })
    .catch((err)=>{
      callback(err);
    });
  });
};

//DELETE
const deleteLocation=(id,callback)=>{
  mu.then((client)=>{
    client
    .db("Donarte")
    .collection("Locations")
    .deleteOne({_id: ObjectId(id)})
    .then((result)=>{
      callback(result)
    });
  });
};

const location = { getLocations, getLocation, addLocation,updateLocation,deleteLocation };

module.exports = location;
