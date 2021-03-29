const {getBrands,getBrand,createBrand,updateBrand,deleteBrand, } = require("../controller/brand");
const router = require("express").Router();
const { protect, permissions } = require("../middleware/auth");




router.route("/").get(getBrands).post(protect, permissions(["admin","user"]),createBrand);
router.route("/:brandId").get(getBrand).put(protect, permissions(["admin","seller"]),updateBrand).delete(deleteBrand);

module.exports = router;
