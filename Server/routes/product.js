const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controller/product");

// TODO : Invoked middleware for product.

const Product = require("../models/Product");
const advanceResults = require("../middleware/advanceResults");

const reviewRouter = require("./review");

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
    // TODO : Invoked middleware for authorasation to create product
    .post(createProduct);
router.use("/:productId/reviews", reviewRouter);

// TODO : add permission to product router

 router
    .route("/:productId")
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;
