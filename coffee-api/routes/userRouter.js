const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const middleware = require("../middlewares/LoginMiddleware");
const middlewareCadastro = require("../middlewares/CadastroMiddleware");
const multerUpload = require("../config/multer");

router.get("/", middleware.validateToken, userController.listarUsuarios);

router.get("/:document", userController.listarUsuariosPeloDocumento);

// router.post("/cadastrar", multerUpload.single("file"),userController.criarUsuarios)

 router.post("/login", middleware.fieldsValidation, middleware.validateUser, userController.logarUsuarios)

// router.put("/atualizar", userController.atualizarUsuario)

// router.delete("/deletar/:id", userController.deletarUsuario)


router.post("/cadastrar", middlewareCadastro.fieldsValidation, multerUpload.single("file"), userController.criarUsuarios);


router.put(
  "/atualizar",
 // middleware.validateToken,
   multerUpload.single("file"),
  userController.atualizarUsuario
);

router.delete("/deletar/:document", middleware.validateToken, userController.deletarUsuario);

module.exports = router;