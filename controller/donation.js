const conn =require("../lib/mongoUtils")
const ObjectId = require("mongodb").ObjectId;

// GET all
const getDonations=(callback)=>{
    conn.then(client=>{
        client
        .db("Donarte")
        .collection("Donations")
        .find({})
        .toArray((err,data)=>{
            callback(data);
        });
    });
};

// GET

const getDonation=(id,callback)=>{
    conn.then((client)=>{
        client
        .db("Donarte")
        .collection("Donations")
        .findOne({_id: ObjectId(id)})
        .then((data)=>{
            callback(data);
        });
    });
};

//POST
const addDonation=(donation,callback)=>{
    conn.then((client)=>{
        client
        .db("Donarte")
        .collection("Donations")
        .insertOne(donation)
        .then((response)=>{
            callback(response);
        });
    });
};

//DELTE
const deleteDonation = (id,callback)=>{
    conn.then((client)=>{
        client
        .db("Donarte")
        .collection("Donations")
        .deleteOne({ _id: ObjectId(id) })
        .then((result)=>{
            callback(result)
        });
    });
};

const donation={getDonation,getDonations,addDonation,deleteDonation};
module.exports=donation;