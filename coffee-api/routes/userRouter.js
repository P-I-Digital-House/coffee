const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const middleware = require("../middlewares/LoginMiddleware");
const middlewareCadastro = require("../middlewares/CadastroMiddleware");
const multerUpload = require("../config/multer");

// se o método é diferente não precisa ter outra rota

router.get("/", middleware.validateToken, userController.findAll);

router.post(
  "/",
  middlewareCadastro.fieldsValidation,
  multerUpload.single("file"),
  userController.create
); 

router.put("/", multerUpload.single("file"), userController.update);

router.get("/:document", userController.findUserByDocument);

router.delete(
  "/:document",
  middleware.validateToken,
  userController.deleteByDocument
);

module.exports = router;
