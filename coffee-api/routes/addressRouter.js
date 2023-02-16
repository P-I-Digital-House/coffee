const express = require("express");
const router = express.Router();
const controller = require("../controllers/AddressController");
const middleware = require("../middlewares/LoginMiddleware");
const middlewareCadastro = require("../middlewares/CadastroMiddleware");
const multerUpload = require("../config/multer");


router.get("/", middleware.validateToken, controller.getAddress);
router.get("/:id", middleware.validateToken, controller.getAddressById);
router.post("/", middlewareCadastro.validateUser, multerUpload.single("file"), controller.createAddress);
router.get("/userId/:userId", middleware.validateToken, controller.getAddressByUserId)
router.put("/:id",middleware.validateToken,multerUpload.single("file"), controller.updateAddress);
router.delete("/:id", middleware.validateToken, controller.deleteAddress);

module.exports = router;