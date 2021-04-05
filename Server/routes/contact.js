const router = require("express").Router();
const advanceResults = require("../middleware/advanceResults");
const Contact = require("../models/Contact");

const {
    createContact,
    deletemsg,
    getMsg,
    getContacts,
} = require("../controller/contact");

// create contact msg 
router.route("/contactus").post(createContact);
router.route("/contactus/:id").delete(deletemsg);
router.route("/contactus/:id").get(getMsg);
router.route("/").get(advanceResults(Contact), getContacts).post(createContact);
module.exports = router;

