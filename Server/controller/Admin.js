const createError = require("../utilis/createError");
const asyncHandler = require("../middleware/async");
const RepondreMailAdmin = require("../utilis/RepondreMailAdmin");
const cron = require("node-cron");



const Repondre = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
        throw createError(400, `User with email ${req.body.email} is not found`);


    await user.save({ validateBeforeSave: false });

    try {

        const message = `You are receiving this email because you (or someone else ) has
    requested the reset of a password.`;

        const options = {
            email: "sadek.selmi@esprit.tn",
            subject: "Password reset token",
            message,
            url: user.email,
        };

        await RepondreMailAdmin(options);

        res
            .status(200)
            .send({ status: "success", message: "Repondre  Email sent" });
    } catch (error) {
        console.log(error);


        await user.save({ validateBeforeSave: false });

        throw createError(500, "Email cound't be sent");
    }
});








module.exports = {
    Repondre

};
