

const NewsletterSchema = {
    email: {
        type: String,
        required: [true, "Please add an email"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
        ],
    },

};




module.exports = mongoose.model("newsletter", NewsletterSchema);