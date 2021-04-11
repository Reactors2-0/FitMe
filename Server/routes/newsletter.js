const router = require("express").Router();
const advanceResults = require("../middleware/advanceResults");
const news = require("../models/newsletter");


const {
    getNewsletters,
    createNewsletter,
    getNewsletter,
    updateNewsletter,
    deleteNewsletter
}= require("../controller/newsletter");


router.route("/").get(advanceResults(news), getNewsletters).post(createNewsletter);
router.route("/:id").get(getNewsletter).put(updateNewsletter);
router.route("/:id").delete(deleteNewsletter);
module.exports = router;

