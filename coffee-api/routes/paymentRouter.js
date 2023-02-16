const express = require("express");
const router = express.Router();
const controller = require("../controllers/PaymentController");
const middleware = require("../middlewares/LoginMiddleware");
const middlewareCadastro = require("../middlewares/CadastroMiddleware");
const multerUpload = require("../config/multer");


router.get("/", middleware.validateToken, controller.getPayment);
router.get("/:id", middleware.validateToken, controller.getPaymentById);
router.post("/", middlewareCadastro.validateUser, multerUpload.single("file"), controller.createPayment);
router.get("/userId/:userId", middleware.validateToken, controller.getPaymentByUserId)
router.put("/:id",middleware.validateToken,multerUpload.single("file"), controller.updatePayment);
router.delete("/:id", middleware.validateToken, controller.deletePayment);

module.exports = router;
