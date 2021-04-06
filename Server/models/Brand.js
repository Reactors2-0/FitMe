const mongoose = require("mongoose");
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

const colorValidator = (v) => (/^#([0-9a-f]{3}){1,2}$/i).test(v)
const BrandSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    brandName: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    brandImage: {
        type: String,
        required: [true, "Image is required"],
    },
    brandProof: {
      type: String,
      required: [true, "Proof is required"],
    },
    color: {
      type: String,
      validator: [colorValidator, 'Invalid color'],
      required: true,
    },
  });
  
  BrandSchema.pre("remove", async function (next) {
    console.log("Removing ")
    await Order.deleteMany({ brandId: this._id });
    await Product.deleteMany({ brandId: this._id });
    console.log(this.userId)
    const user = await User.findOne({_id:this.userId});
    console.log(user);
    user.role = "user";
    await user.save();
    next();
  });

  BrandSchema.virtual("Products", {
    ref: "Product",
    localField: "_id",
    foreignField: "brandId",
    justOne: false,
  });

  module.exports = mongoose.model("Brand", BrandSchema);
