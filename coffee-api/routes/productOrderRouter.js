const express = require("express");
const router = express.Router();
const controller = require("../controllers/ProductOrderController");
const middleware = require("../middlewares/LoginMiddleware");
const middlewareCadastro = require("../middlewares/CadastroMiddleware");
const multerUpload = require("../config/multer");

router.post("/", middlewareCadastro.validateUser, multerUpload.single("file"), controller.createProductOrder);
router.get("/orderId/:orderId", middleware.validateToken, controller.getByOrderId)
module.exports = router;