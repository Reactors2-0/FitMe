const {
    createCategory,
} = require("../controller/Category");



//Category model
const Category = require("../models/Category");

const { protect } = require("../middleware/auth");

const router = require("express").Router();



router.route("/createcatgory").post(createCategory);


module.exports = router;
