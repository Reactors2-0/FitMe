const crypto = require("crypto");
const createError = require("../utilis/createError");
const asyncHandler = require("../middleware/async");

const sendEmailadmin = require("../utilis/RepondreEmail");
const cron = require("node-cron");
const User = require("../models/User");



const Repondre = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
        throw createError(400, `User with email ${req.body.email} is not found`);


    await user.save({ validateBeforeSave: false });

    try {


        const options = {
            email: user.email,
            subject: "Repondre reclamtion",
            name:req.body.messages,
        
        };

        await sendEmailadmin(options);

        res
            .status(200)
            .send({ status: "success", message: " Email sent" });
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
