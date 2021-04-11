const asyncHandler = require("../middleware/async");
const createError = require("../utilis/createError");
const path = require("path");
const Product = require("../models/Product");
const categoryRouter = require("../models/Category");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
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
        let BrandQuery =  req.query.Brand.split(",")
        let CategoryQuery =  req.query.Category.split(",")

        const BrandSearch = req.query.Brand ? {brand : {$in : BrandQuery }}  : {}
        const CategorySearch = req.query.Category ? {category : {$in : CategoryQuery }}  : {}

           const searchProduct = await Product.find({$and :[ priceRange , BrandSearch,CategorySearch ]}).populate('Category').populate('brand');

        res.status(200).send({
            status: "success",
            data: { results : searchProduct.reverse() , count: searchProduct.length }
        })
    }else{
        const products = await Product.find().populate('brand').populate('Category');

        res.status(200).send({
            status: "success",
            data: { results : products.reverse() , count: products.length }
        })
    }

});
const getProduct =asyncHandler(async (req,res,next)=>{
    const product= await Product.findById(req.params.productId).populate({
        path : "Review",
        select: "title text"
    }).populate('Category').populate('brand');
    if(!product)
        throw createError(404,`Product with id ${req.params.productId} not found`);

    res.status(200).send({status : "success",data : product});
})

const createProduct = asyncHandler(async (req,res,next)=>{



    const file = JSON.parse(req.body.productImage);

    if (!file) throw createError(400, "Please add a photo");


    //Check file type
    // if (!file.mimetype.startsWith("image"))
    //     throw createError(400, "This file is not supported");

    //Check file size
    if (file.size > process.env.FILE_UPLOAD_SIZE)
        throw createError(
            400,
            `Please upload a image of size less than ${process.env.FILE_UPLOAD_SIZE}`
        );

    console.log(file.preview)

    cloudinary.uploader.upload(
        "C:\\Users\\Med\\Pictures\\"+file.path,
        {use_filename: true, folder: "products"},
        async function (error, result) {
            console.log(error)
            if (error) throw createError(409, `failed to create product`);
            const product = await Product.create({
                ...req.body,
                color :  JSON.parse(req.body.color),
                size : JSON.parse(req.body.size),
                productImage: result.url,
            });
            res.status(200).send({status: "success", data: product});
        }
    );

});




const updateProduct = asyncHandler(async (req,res,next)=>{
  const  productToUpdate =req.body;
    productToUpdate.color = JSON.parse(req.body.color);
    // productToUpdate.size = JSON.parse(req.body.size);
    // console.log(productToUpdate.color)

    const editProduct = await Product.findByIdAndUpdate(
        req.params.productId,
        productToUpdate,
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
