const {
    Repondre

} = require("../controller/Admin");

const router = require("express").Router();

router.route("/Repondre").post(Repondre);

module.exports = router;
