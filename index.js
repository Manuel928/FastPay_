const connection = require("./model");
const express = require("express")
const uri = process.env.MONGODB_URI
const { MongoClient } = require("mongodb");
const app = express();
const path = require("path");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
require("dotenv").config();

const mongoose = require("mongoose");

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB CONNECTED");
    })

// const client = new MongoClient(uri, { useUnifiedTopology: true });
const WSDBController = require("./controllers/wsdb");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("views", path.join(__dirname, "/views/"));

app.engine("hbs", engine({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

app.set("view engine", "hbs")

app.get("/", (req, res) => {
    // res.send("HELLO UNIVERSE112!!!")
    res.render("index", {})
});

app.use("/", WSDBController)
app.use(express.static('/public'));
app.use('/fonts', express.static(__dirname + "/public/fonts"));
app.use('/css', express.static(__dirname + "/public/css"));
app.use('/js', express.static(__dirname + "/public/js"));
app.use('/img', express.static(__dirname + "/public/img"));
app.use('/icon-fonts', express.static(__dirname + "/public/icon-fonts"));


app.listen(process.env.PORT, () => {
    console.log("App listening on port", process.env.PORT);
})