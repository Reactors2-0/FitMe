const {
    createCategory,
    getCategory,
    getCategorys,
    updateCategory,
    deleteCategory,
} = require("../controller/Category");



//Category model
const Category = require("../models/Category");

const { protect } = require("../middleware/auth");

const router = require("express").Router();


const advanceResults = require("../middleware/advanceResults");

router.route("/").post(createCategory);
router.route("/").get(advanceResults(Category), getCategorys)
router
    .route("/:id")
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = router;
