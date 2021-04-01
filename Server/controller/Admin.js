const crypto = require("crypto");
const createError = require("../utilis/createError");
const asyncHandler = require("../middleware/async");

const sendEmail = require("../utilis/RepondreEmail");
const cron = require("node-cron");
const User = require("../models/User");



const Repondre = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
        throw createError(400, `User with email ${req.body.email} is not found`);


    await user.save({ validateBeforeSave: false });

    try {
        const resetUrl = `dddd`;

        const message = `You ${req.body.message}.`;

        const options = {
            email: user.email,
            subject: "Repondrereclamtion",
            message,
            url: resetUrl,
        };

        await sendEmail(options);

        res
            .status(200)
            .send({ status: "success", message: "ResetPassword token Email sent" });
    } catch (error) {
        console.log(error);

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        throw createError(500, "Email cound't be sent");
    }
});


module.exports = {

    Repondre,

};
