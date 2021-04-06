const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        trim: true,
    },
    message: {
        type: String,
        required: [true, "Please add a name"],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, "Please add a name"],
        trim: true,

    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
        ],

    },
});


module.exports = mongoose.model("Contact", ContactSchema);
