const asyncHandler = require("../middleware/async");
const createError = require("../utilis/createError");
// cyrine chnya hadhi ?
const newsletter = require("../models/newsletter");

const getNewsletters = asyncHandler(async (req, res, next) => {
    res.status(200).send({ status: "success", data: res.advanceResults });
});
// for admin dashBoard 
const getNewsletter = asyncHandler(async (req, res, next) => {
    const newsletter = await newsletter.findById(req.params.id);

    if (!newsletter)
        throw createError(404, `Newsletter is not found with id of ${req.params.id}`);

    res.status(200).send({ status: "success", data: newsletter });
});

const createNewsletter = asyncHandler(async (req, res, next) => {
    const newsletter = await newsletter.create(req.body);

    res.status(201).send({ status: "success", data: newsletter });
});


const updateNewsletter = asyncHandler(async (req, res, next) => {
    const newsletter = await newsletter.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!newsletter)
        throw createError(404, `User is not found with id of ${req.params.id}`);

    const updatedNewsletter = await newsletter.findById(req.params.id);

    res.status(201).send({ status: "success", data: updatedNewsletter });
});


// for dashboard admin
const deleteNewsletter = asyncHandler(async (req, res, next) => {
    const newsletter = await v.findById(req.params.id);

    if (!newsletter)
        throw createError(404, `Newsletter is not found with id of ${req.params.id}`);

    await newsletter.remove();
    res
        .status(204)
        .send({ status: "success", message: "Newsletter Deleted Successfully" });
});
module.exports = {
    getNewsletters,
    getNewsletter,
    createNewsletter,
    updateNewsletter,
    deleteNewsletter,
    
};