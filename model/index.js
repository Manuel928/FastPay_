const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/WSDB", (error) => {
    if(!error) {
        console.log("Connection to the database has been made successfully!");
    }
    else{
        console.log("Error connecting to DB");
    }
});

const Info = require("./wsdb.model");