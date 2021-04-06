const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product Name is required"],
            trim: true,
        },
        productImage: {
            type: String,
            required: [true, "Image is required"],
        },
        brand:
            { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' }
        ,
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
        category:
            { type: mongoose.Schema.Types.ObjectId, ref: 'category' }
        ,
        color:[{
            value:String,
            color : String,
            label: String
        }],
        size:[{
            value:String,
            label:String
        }],
        countInStock: {
            type: Number,
            default: 0,
            required: [true, "Product Stock is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        averageRating: {
            type: Number,
            min: [1, "Rating must be at least 1"],
            max: [10, "Rating must can not be more than 10"],
        },
        isDiscounted: {
            type: Boolean,
        },
        discount: {
            type: Number,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: { virtuals: true },
    }
);
ProductSchema.pre("remove", async function (next) {
    await this.model("Review").deleteMany({ productId: this._id });

    next();
});

ProductSchema.virtual("Reviews", {
    ref: "Review",
    localField: "_id",
    foreignField: "productId",
    justOne: false,
});


module.exports = mongoose.model("Product", ProductSchema);
