//  ici il est exigé que express et cors soient utilisés
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path:".config.env"}); //config.env n'est encors crée
const  port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

//obtenir la connexion du pilote
const dbo = require("./db/conn");

app.listen(port,() =>{
    //effectuer une connexion à la base de données au démarrage du serveur
    dbo.connectToserver(function(err){
        if(err)console.error(err);
    });
    console.log(`server is running on port:${port}`);
});