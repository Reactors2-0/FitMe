const {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    removeCategory,
} = require("../controller/category");

//Invoked middleware.
const advanceResults = require("../middleware/advanceResults");
const { protect, permission } = require("../middleware/auth");

//User model
const Category = require("../models/category");

const router = require("express").Router();

router
    .route("/")
    .get(advanceResults(Category), getCategories)
    .post(protect, addCategory);

router
    .route("/:categoryId")
    .get(getCategory)
    .put(protect, permission("admin"), updateCategory)
    .delete(protect, permission("admin"), removeCategory);

module.exports = router;
