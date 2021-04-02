const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "catogry Name is required"],
  }
});

CategorySchema.virtual("Products", {
  ref: "Product",
  localField: "_id",
  foreignField: "CategoryId",
  justOne: false,
});
module.exports = mongoose.model("Category", CategorySchema);
