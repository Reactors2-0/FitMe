const asyncHandler = require("../middleware/async");
const createError = require("../utilis/createError");
const path = require("path");
const Product = require("../models/Product");


const getProducts = asyncHandler(async(req, res, next) => {
    const keyWord = req.query.keyWord;

    if (keyWord) {
        const searchItem = keyWord ?
            { name: { $regex: keyWord, $options: "i" } } :
            {};

        const searchProduct = await Product.find(searchItem);

        res.status(200).send({
            status: "success",

            data: { results: searchProduct, count: searchProduct.length },
        });
    } else {
        res.status(200).send({ status: "success", data: res.advanceResults });
    }
});

const createProduct = asyncHandler(async(req, res, next) => {
    if (!req.files) throw createError(400, "Please add a photo");

    console.log(req.files);

    const file = req.files.productImage;

    //Check file type
    if (!file.mimetype.startsWith("image"))
        throw createError(400, "This file is not supported");

    //Check file size
    if (file.size > process.env.FILE_UPLOAD_SIZE)
        throw createError(
            400,
            `Please upload a image of size less than ${process.env.FILE_UPLOAD_SIZE}`
        );



    const product = await Product.create({
        ...req.body,
        productImage: "no url ",
    });
    res.status(200).send({ status: "success", data: product });
});


module.exports = {
    getProducts,
    // getProduct,
    createProduct,
    // updateProduct,
    // deleteProduct,
};
