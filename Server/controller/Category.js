const asyncHandler = require("../middleware/async");
const createError = require("../utilis/createError");
const Category = require("../models/Category");
const Product = require("../models/Product");

// get byid

const getCategory = asyncHandler(async (req, res, next) => {
    const catgory = await Category.findById(req.params.id)

    if (!catgory)
        throw createError(404, `catgory with id ${req.params.id} not found`);

    res.status(200).send({
        status: "success",
        count: category.length,
        data: category
    });
});


// create catg

const createCategory= asyncHandler(async (req, res, next) => {
    //const product = await Product.findById(req.params.productId);
    // create 
    const category = await Category.create(req.body )
    res.status(201).send({ status: "success created", data: category });
});


const updateCategory = asyncHandler(async (req, res, next) => {
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



const deleteCategory = asyncHandler(async (req, res, next) => {
    const Category = await Review.findById(req.params.id);

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
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}
