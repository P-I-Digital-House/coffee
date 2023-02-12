const express = require("express");
const router = express.Router();
const controller = require("../controllers/UserControllerSequelize");
const middleware = require("../middlewares/LoginMiddleware");
const middlewareCadastro = require("../middlewares/CadastroMiddleware");
const multerUpload = require("../config/multer");


router.get("/", middleware.validateToken, controller.getUsers);
router.get("/:id", middleware.validateToken, controller.getUserById);
router.post("/", middlewareCadastro.validateUser, multerUpload.single("file"), controller.createUser);
router.put("/:id",multerUpload.single("file"), controller.updateUser);
router.delete("/:id", middleware.validateToken, controller.deleteUser);

module.exports = router; 