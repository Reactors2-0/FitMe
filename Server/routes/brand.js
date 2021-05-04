const {getBrands,getBrand,createBrand,updateBrand,deleteBrand,getBrandByUserId,toggleVerify } = require("../controller/brand");
const router = require("express").Router();
const { protect, permissions, permission } = require("../middleware/auth");

router.route("/").get(getBrands).post(protect, permission("user"),createBrand);
router.route("/verify").post(protect,permissions(["admin","seller","user"]), toggleVerify);
router.route("/:brandId").get(getBrand).put(protect, permissions(["admin","seller"]),updateBrand).delete(deleteBrand);
router.route("/:userId/getbyuser").get(getBrandByUserId);



module.exports = router;
