const {
    createCategory,
    getCategory,
    getCategorys,
    updateCategory,
    deleteCategory,
} = require("../controller/Category");

//Invoked middleware.
const advanceResults = require("../middleware/advanceResults");
const { protect, permission } = require("../middleware/auth");

//User model
const Category = require("../models/Category");

const router = require("express").Router();

router
    .route("/")
    .get(advanceResults(Category), getCategorys)
    .post(createCategory);

  
    router.route("/:id").get(getCategory).put(updateCategory).delete(deleteCategory);

module.exports = router;
