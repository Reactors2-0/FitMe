const {getBrands,getBrand,createBrand,updateBrand,deleteBrand,getBrandByUserId } = require("../controller/brand");
const router = require("express").Router();
const { protect, permissions, permission } = require("../middleware/auth");
// const { route } = require("./review");

router.route("/:brandId").get(getBrand).put(protect, permissions(["admin","seller"]),updateBrand).delete(deleteBrand);
router.route("/:userId/getbyuser").get(getBrandByUserId);
router.route("/").get(getBrands).post(protect, permission("user"),createBrand);


module.exports = router;
