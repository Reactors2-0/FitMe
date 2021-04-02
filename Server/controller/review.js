const asyncHandler = require("../middleware/async");
const createError = require("../utilis/createError");
const Review = require("../models/Review");
const Product = require("../models/Product");

const getReviews = asyncHandler(async (req, res, next) => {
    if (req.params.productId) {
        const findProduct = await Product.findById(req.params.productId);
        if (!findProduct) {
            throw createError(
                404,
                `product with id: ${req.params.productId} not found`
            );
        }
        const productReviews = await Review.find(
            { productId: req.params.productId }
        ).populate({
            path: "userId",
            select: "name email"
        });

        return res.status(200).send({
            status: "success",
            count: productReviews.length,
            data: productReviews,
        });
    } else {
        res.status(200).send(res.advanceResults);
    }
})

const getReview = asyncHandler(async (req, res, next) => {
    const review = await Review.findById(req.params.id).populate({
        path: "userId",
        select: "name email"
    });

    if (!review)
        throw createError(404, `review with id ${req.params.id} not found`);

    res.status(200).send({
        status: "success",
        count: review.length,
        data: review
    });
});

const createReview = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.productId);

    if (!product)
        throw createError(`Product with id ${req.params.productId} not found`);

    const isReview = await Review.findOne({
        productId: req.params.productId,
        userId: req.user.id,
    })

    if (isReview)
        throw createError(409, "Already Review for this product");

    const review = await Review.create({
        ...req.body,
        productId: req.params.productId,
        userId: req.user.id
    })
    res.status(201).send({ status: "success", data: review });
});


const updateReview = asyncHandler(async (req, res, next) => {
    const review = await Review.findById(req.params.id);

    if (!review)
        throw createError(404, `Review is not found with id of ${req.params.id}`);

    //check if review belongs to user created or user is admin

    const findReview = await Review.findOne({
        _id: req.params.id,
        userId: req.user._id,
    });

    if (!findReview && req.user.role !== "admin")
        throw createError(400, "Not authorized to update this review");

    const editReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    const updatedReview = await Review.findById(req.params.id);

    res.status(200).send({ status: "success", data: updatedReview });
});

const updateRating = asyncHandler(async (req, res, next) => {
    const review = await Review.findById(req.params.id);

    if (!review)
        throw createError(404, `Review with id: ${req.params.id} not found`);

    const findReview = await Review.findOne({
        _id: req.params.id,
        userId: req.user._id
    })
    if (!findReview && req.user.role !== "admin")
        throw createError(400, "Not authorized");

    review.rating = req.body.newRating;
    await review.save();
    const updatedReview = await Review.findById(req.params.id);

    res.status(200).send({ status: "success", data: updatedReview });
});

const deleteReview = asyncHandler(async (req, res, next) => {
    const review = await Review.findById(req.params.id);

    if (!review)
        throw createError(`review with id ${req.params.id} not found`);

    const findReview = await Review.findOne({
        _id: req.params.id,
        userId: req.user.id
    });

    if (!findReview && req.user.role !== "admin")
        throw createError(400, "Not authorized");

    await review.remove();

    res
        .status(204)
        .send({ status: "success", message: "review deleted successfully !" });
});

module.exports = {
    getReviews,
    getReview,
    createReview,
    updateReview,
    updateRating,
    deleteReview,
}
