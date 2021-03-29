const asyncHandler = require("../middleware/async");
const createError = require("../utilis/createError");
const path = require("path");
const Product = require("../models/Product");


const getProducts = asyncHandler(async (req,res,next)=>{
    const keyWord = req.query.keyWord;
    const ltORgt = req.query;

    if(keyWord || ltORgt ){
        const searchItem = keyWord ?
            {name : {$regex: keyWord , $options: "i"}}:
            {};
        const priceRange = (!isNaN(Number(ltORgt.priceMin)) && !isNaN(Number(ltORgt.priceMax))) ?
            {price: {$gt: Number(ltORgt.priceMin), $lt: Number(ltORgt.priceMax)}}:
            {};
        console.log(priceRange)

        const searchProduct = await Product.find(priceRange);
        console.log("Products",searchProduct)
        res.status(200).send({
            status: "success",
            data: { results : searchProduct , count: searchProduct.length }
        })
    }else{
        const products = await Product.find();

        res.status(200).send({
            status: "success",
            data: { results : products , count: products.length }
        })
    }

});
const getProduct =asyncHandler(async (req,res,next)=>{
    const product= await Product.findById(req.params.productId).populate({
        path : "Review",
        select: "title text"
    })
    if(!product)
        throw createError(404,`Product with id ${req.params.productId} not found`);

    res.status(200).send({status : "success",data : product});
})

const createProduct = asyncHandler(async (req,res,next)=>{
    if(!req.files)
        throw createError(400 , "please add photo");

    const file = req.files.productImage;
    //Check file type
    if(!file.mimetype.startsWith("image"))
        throw createError(400,"This file is not supported");

    //TODO : check file size

    //TODO : Store img in cloud
    // TODO : XML element accesse *
    const product = await Product.create({
        ...req.body,
        productImage : "add photo in cloud !"
    });

    res.status(200).send({status : "success",data : product});
});

const updateProduct = asyncHandler(async (req,res,next)=>{
    const editProduct = await Product.findByIdAndUpdate(
        req.params.productId,
        req.body,
        {
            new : true,
            runValidators : true
        }
    )

    if(!editProduct)
        throw createError(404 , `Product with id ${req.params.productId} not found `);

    const updatedProduct = await Product.findById(req.params.productId);

    res.status(201).send({status : "success" , data : updatedProduct});
})

const deleteProduct = asyncHandler(async (req,res,next)=>{
    const deleteProduct = await Product.findByIdAndDelete(req.params.productId);

    if(!deleteProduct)
        throw createError(404,`Product with id ${req.params.productId} not found `);

    await deleteProduct.remove();
    res.status(204).send({status : "success" , message : "Product deleted successfully"});
})

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
