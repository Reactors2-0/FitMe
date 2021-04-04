const asyncHandler = require("../middleware/async");
const createError = require("../utilis/createError");
const Category = require("../models/category");

const getCategories = asyncHandler(async (req, res, next) => {
    res.status(200).send({ status: "success", data: res.advanceResults });
});

const getCategory = asyncHandler(async (req, res, next) => {
    const category = await Category.findById(req.params.id);

    if (!category)
        throw createError(
            404,
            `Category is not found with id of ${req.params.id}`
        );

    res.status(200).send({ status: "success", data: category });
});
const addCategory = asyncHandler(async (req, res, next) => {
    console.log(req)
    const category = await Category.create(req.body);

    res.status(201).send({ status: "success", data: req.body });
});

const updateCategory = asyncHandler(async (req, res, next) => {
    const editCategory = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!editCategory)
        throw createError(
            404,
            `Category is not found with id of ${req.params.id}`
        );

    const updatedUser = await Category.findById(req.params.id);

    res.status(201).send({ status: "success", data: updatedUser });
});

const removeCategory = asyncHandler(async (req, res, next) => {
    const findCategory = await Category.findByIdAndDelete(req.params.id);

    if (!findCategory)
        throw createError(
            404,
            `Category is not found with id of ${req.params.id}`
        );

    res
        .status(204)
        .send({ status: "success", message: "Category Deleted Successfully" });
});
module.exports = {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    removeCategory,
};
