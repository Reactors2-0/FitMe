const router = require("express").Router();


const {
     getNewsletters,
    getNewsletter,
    createNewsletter,
    updateNewsletter,
    deleteNewsletter,
}= require("../controller/newsletter");

router.route("/").post(createNewsletter);

router.route("/").get(getNewsletters);

router.route("/:id").get(getNewsletter).put(updateNewsletter).delete(deleteNewsletter);
module.exports = router;

