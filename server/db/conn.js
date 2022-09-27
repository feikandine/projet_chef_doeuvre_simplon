// connexion de à la base de donné
// require('dotenv').config('../.config.env')
const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("immobilier");
        console.log("Successfully connected to MongoDB." + _db); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};