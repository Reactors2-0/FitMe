const {
    getReview,
    getReviews,
    createReview,
    updateReview,
    deleteReview,
    updateRating,
} = require("../controller/review");

const router = require("express").Router({ mergeParams: true });

//Invoked middleware
const advanceResults = require("../middleware/advanceResults");
//TODO : Invoked middleware for review
//const { protect } = require("../middleware/auth");

//Review model
const Review = require("../models/Review");

router
    .route("/")
    .get(
        advanceResults(Review, {
            path: "productId",
            select: "name brand",
        }),
        getReviews
    )
    .post(createReview);
// TODO : add permission to review router

router
    .route("/:id")
    .get(getReview)
    .put(updateReview)
    .delete(deleteReview);
router.route("/updateRating/:id").put(updateRating);

module.exports = router;
