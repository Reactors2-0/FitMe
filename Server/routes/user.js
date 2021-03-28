const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    blockuser,
} = require("../controller/user");


// middleware
const advanceResults = require("../middleware/advanceResults");
const { protect, permission } = require("../middleware/auth");

//User model
const User = require("../models/User");

const router = require("express").Router();

router.use(protect);
router.use(permission("admin"));

router.route("/").get(advanceResults(User), getUsers).post(createUser);
router.route("/admin/:id").get(blockuser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
module.exports = router;

