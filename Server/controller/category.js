const asyncHandler = require("../middleware/async");
const createError = require("../utilis/createError");
const Category = require("../models/Category");
const Product = require("../models/Product");


const getCategorys = asyncHandler(async (req, res, next) => {
    res.status(200).send({ status: "success", data: res.advanceResults });
});
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
    const editcategory = await catgory.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true, });
    if (!editcategory) throw createError(404,`Category is not found with id of ${req.params.id}`);
    const updatedcategory = await Brand.findById(req.params.id);
    res.status(201).send({ status: "success", data: updatedcategory });
  });



const deleteCategory = asyncHandler(async (req, res, next) => {
    const deletecategory = await Category.findById(req.params.id);
    if (!deletecategory) throw createError(404, `category is not found with id of ${req.params.id}`);
    await deletecategory.remove();
    res.status(204).send({ status: "success", message: "category Deleted Successfully" });
  });

module.exports = {
    getCategory,
    getCategorys,
    createCategory,
    updateCategory,
    deleteCategory,
}
