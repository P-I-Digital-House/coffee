const express = require("express");
const router = express.Router();
const controller = require("../controllers/OrderController");
const middleware = require("../middlewares/LoginMiddleware");
const middlewareCadastro = require("../middlewares/CadastroMiddleware");
const multerUpload = require("../config/multer");


router.post("/", middlewareCadastro.validateUser, multerUpload.single("file"), controller.createOrder);

router.get("/userId/:userId", middleware.validateToken, controller.getOrderByIdUser);

router.delete("/:id", middleware.validateToken, controller.deleteOrder);

module.exports = router;
