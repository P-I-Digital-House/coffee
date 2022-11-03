const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
// const multerUpload = require("../config/multer");

router.get("/", userController.listarUsuarios);

router.post("/cadastrar", userController.criarUsuarios)

router.post("/login", userController.logarUsuarios)

router.put("/atualizar", userController.atualizarUsuario)


// router.post("/products", (request, response) => {
//   const body = request.body;
//   console.log(body);
//   //tratar os dados para salvar no banco
//   response.json(body);
// });

// router.put("/products/:id", (request, response) => {
//   const { id } = request.params;
//   const body = request.body;
//   console.log(body);
//   response.json({ body: body, id: id, message: "Produto Atualizado com Sucesso!" });
// });

// router.delete("/products/:id", (request, response) => {
//   const { id } = request.params;
//   console.log(id);
//   //tratar os dados para salvar no banco
//   response.json({ message: "Este Produto Foi Apagado!" });
// });

module.exports = router;