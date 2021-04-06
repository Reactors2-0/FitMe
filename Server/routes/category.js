const {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    removeCategory,
} = require("../controller/Category");

//Invoked middleware.
const advanceResults = require("../middleware/advanceResults");
const { protect, permission } = require("../middleware/auth");

//User model
const Category = require("../models/Category");

const router = require("express").Router();

router
    .route("/")
    .get(advanceResults(Category), getCategories)
    .post(addCategory);


    router.route("/:id").get(getCategory).put(updateCategory).delete(removeCategory);

module.exports = router;
