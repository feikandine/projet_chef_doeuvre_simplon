const express = require("express");

// recordRoutes est une instance du routeur express.
// Nous l'utilisons pour définir nos routes.
// Le routeur sera ajouté en tant que middleware et prendra le contrôle des requêtes commençant par le chemin /record.
const recordRoutes = express.Router();

// ceci nous aidera a nous connectés à la base de donné
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb("immobilier");
    db_connect
      .collection("records")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   // This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
    let db_connect = dbo.getDb("immobilier");
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
      .collection("records")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
    });

    // This section will help you create a new record .
recordRoutes.route("/record/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    // let body = JSON.parse(req.body)
    let myobj = {
      name: req.body.name,
      firstname: req.body.firstname,
      email: req.body.email,
      number: req.body.number,
      message: req.body.message,
    };
    console.log(req.body)
    db_connect.collection("contacts").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

   // This section will help us update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb("immobilier");
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };
    db_connect
      .collection("records")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
   });
   // This section will help us delete a record
recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb("immobilier");
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
   });
    
   module.exports = recordRoutes;
      