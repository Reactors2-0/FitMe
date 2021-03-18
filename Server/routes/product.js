const {
    getProducts,
    createProduct,
} = require("../controller/product");

const Product = require("../models/Product");
const advanceResults = require("../middleware/advanceResults");


const router = require("express").Router();

router
    .route("/")
    .get(
        advanceResults(Product, {
            path: "Reviews",
            select: "title",
        }),
        getProducts
    )
    .post(createProduct);

//router.use("/:productId/reviews", reviewRouter);

// router
//     .route("/:productId")
//     .get(getProduct)
//     .put(protect, permission("admin"), updateProduct)
//     .delete(protect, permission("admin"), deleteProduct);

module.exports = router;
