import { randomBytes, createHash } from "crypto";
import { Schema, model } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        trim: true,
    },
    uid: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
        ],
        unique: true,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        minlength: [8, "Password should be 8 character long"],
        required: [true, "Please add a password"],
        select: false,
    },
    role: {
        type: String,
        default: "user",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre("remove", async function (next) {
    await this.model("Review").deleteMany({ userId: this._id });
    await this.model("Order").deleteMany({ userId: this._id });

    next();
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const SaltFactor = await genSalt(10);

    this.password = await hash(this.password, SaltFactor);

    next();
});

UserSchema.methods.genAuthToken = function () {
    return sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIREIN,
    });
};

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await compare(enteredPassword, this.password);
};

UserSchema.methods.getResetPasswordToken = function () {
    const resetToken = randomBytes(20).toString("hex");

    //hash the resetToken and set it to this.resetPasswordToken

    this.resetPasswordToken = createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

export default model("User", UserSchema);
