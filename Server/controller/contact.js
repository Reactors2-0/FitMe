const asyncHandler = require("../middleware/async");
//const createError = require("../utilis/createError");
const Contact = require("../models/Contact");



const createContact = asyncHandler(async (req, res, next) => {
    const contact = await Contact.create({ ...req.body });
    res.status(201).send({ status: "success add ", data: contact });
});

// dear sadek use it to delete msg from admin panel Regards .
const deletemsg = asyncHandler(async (req, res, next) => {
    const deleteMsg = await Contact.findById(req.params.id);
    await deleteMsg.remove();
    res
        .status(204)
        .send({ status: "success", message: "User Deleted Successfully" });
});
// dear sadek also haw rtahtek
const getMsg = asyncHandler(async (req, res, next) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact)
        throw createError(404, `contact is not found with id of ${req.params.id}`);

    res.status(200).send({ status: "success", data: contact });
});

const getContacts = asyncHandler(async (req, res, next) => {
    res.status(200).send({ status: "success", data: res.advanceResults });
});
module.exports = {
    createContact,
    deletemsg,
    getMsg,
    getContacts,
};

