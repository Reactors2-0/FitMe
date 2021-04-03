const mongoose = require("mongoose");
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
    await this.model("Oder").deleteMany({ brandId: this._id });
    await this.model("Product").deleteMany({ brandId: this._id });
    await this.model("User").deleteOne({ _id: this.userId });
    // TODO : Replace above code to set verify = false 
    next();
  });



  module.exports = mongoose.model("Brand", BrandSchema);
