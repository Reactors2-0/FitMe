const asyncHandler = require("../middleware/async");
const createError = require("../utilis/createError");
const Brand = require("../models/Brand");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const getBrands = asyncHandler(async (req, res, next) => {
  console.log("Fetching brands");
  const keyWord = req.query.keyWord;
  if(keyWord){
      const searchItem = keyWord ? {name : {$regex: keyWord , $options: "i"}}:{};
      const searchBrand = await Brand.find(searchItem);
      res.status(200).send({status: "success",data: { results : searchBrand , count: searchBrand.length }})
  }else{
      const brands = await Brand.find();
      res.status(200).send({status: "success",data: { results : brands , count: brands.length }})
  }
});
const getBrandByUserId = asyncHandler(async (req, res, next) => {
  console.log("Fetching brand by user id = "+req.params.userId);
  const brand = await Brand.findOne({userId:req.params.userId});
  if (!brand)
    throw createError(404,`brand is not found with user id of ${req.params.userId}`);
  res.status(200).send({ status: "success", data: brand });
});

const getBrand = asyncHandler(async (req, res, next) => {
  console.log("Fetching brand with id "+ req.params.brandId);
  const brand = await Brand.findById(req.params.brandId);
  if (!brand)
    throw createError(404,`brand is not found with id of ${req.params.brandId}`);
  res.status(200).send({ status: "success", data: brand });
});

const createBrand = asyncHandler(async (req, res, next) => {
  console.log("Creating brand");
  if (!req.files) throw createError(400, "Please add a photo & Proof");
  const image = req.files.brandImage;
  const proof = req.files.brandProof;
  if (!image.mimetype.startsWith("image"))
    throw createError(400, "This file is not supported");
  // restruction pdf / ==> application/pdf  .php /* application/pdf
  if(!proof.mimetype.startsWith("application/pdf"))
    throw createError(400, "This proof is not supported");
  if (image.size > process.env.FILE_UPLOAD_SIZE || proof.size > process.env.FILE_UPLOAD_SIZE)
    throw createError(400,`Please upload a image or proof of size less than ${process.env.FILE_UPLOAD_SIZE}`);
  const brandByName = await Brand.find({ brandName: req.body.brandName});
  if(brandByName)
    throw createError(400, "Brand already exists");
  cloudinary.uploader.upload(
    proof.tempFilePath,
    { use_filename: true, folder: "brands/"+req.body.brandName },
    async function (proofError, proofResult) {
      if (proofError) throw createError(409, `failed to upload brand proof`);
      cloudinary.uploader.upload(
        image.tempFilePath,
        { use_filename: true, folder: "brands/"+req.body.brandName },
        async function (imageError, imageResult) {
          if (imageError) throw createError(409, `failed to upload brand image`);
          const brand = await Brand.create({
            ...req.body,
            brandImage: imageResult.url,
            brandProof: proofResult.url,
          });
          res.status(200).send({ status: "success", data: brand });
        }
      );
    });
});

const updateBrand = asyncHandler(async (req, res, next) => {
  console.log("Updating brand");
  const editBrand = await Brand.findByIdAndUpdate(req.params.brandId,req.body,{ new: true, runValidators: true, });
  if (!editBrand) throw createError(404,`Brand is not found with id of ${req.params.brandId}`);
  const updatedBrand = await Brand.findById(req.params.brandId);
  res.status(201).send({ status: "success", data: updatedBrand });
});

const deleteBrand = asyncHandler(async (req, res, next) => {
  const deleteBrand = await Brand.findById(req.params.brandId);
  if (!deleteBrand) throw createError(404, `Brand is not found with id of ${req.params.brandId}`);
  await deleteBrand.remove();
  res.status(204).send({ status: "success", message: "Brand Deleted Successfully" });
});

module.exports = {
  getBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
  getBrandByUserId
};
