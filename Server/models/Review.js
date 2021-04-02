const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a Subject"],
        trim: true,
        maxlength: [100, "title cannot be longer than 100 character its not a letter "],
    },
    text: {
        type: String,
        required: [true, "Please add a description "],
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, "Please add a rating between 1 and 5"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

ReviewSchema.index({ productId: 1, userId: 1 }, { unique: true });

ReviewSchema.statics.getRating = async function (productId) {
    const obj = await this.aggregate([
        {
            $match: { productId: productId },
        },
        {
            $group: {
                _id: "$productId",
                averageRating: { $avg: "$rating" },
            },
        },
    ]);
    try {
        await this.model("Product").findByIdAndUpdate(productId, {
            averageRating: obj[0].averageRating,
        });
    } catch (error) {
        console.log(error);
    }
};

ReviewSchema.post("save", function () {
    this.constructor.getRating(this.productId);
});

ReviewSchema.pre("remove", function () {
    this.constructor.getRating(this.productId);
});

module.exports = mongoose.model("Review", ReviewSchema);
