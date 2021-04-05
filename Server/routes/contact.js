const router = require("express").Router();

const {
    createContact,
    deletemsg,
    getMsg
} = require("../controller/contact");

// create contact msg 
router.route("/contactus").post(createContact);
router.route("/contactus/:id").delete(deletemsg);
router.route("/contactus/:id").get(getMsg);

module.exports = router;

