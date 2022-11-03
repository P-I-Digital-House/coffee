const UserModel = require("../models/User");

function listarUsuarios(req, res) {
   const userList = UserModel.getAll();
   return res.json(userList)
}

function criarUsuarios(req, res) {
    const { name, document, age, tel, email, password } = req.body;
  UserModel.create(name, document, age, tel, email, password);
  return res.status(200).send("Funcionou");
}

function logarUsuarios(req, res) {
    const { email, senha } = req.body;
    const teste = UserModel.login(email, senha);
    return res.status(200).send(teste);
}

function atualizarUsuario(req, res) {
    const { name, document, age, tel, email, password } = req.body;

    UserModel.update(name, document, age, tel, email, password);
    return res.status(200).send("Funcionou");
}

// function showEditPage(req, res) {
//   const { id } = req.params;
//   const immobile = ImmobileModel.getById(id);
//   return res.render("updateImmobile", { immobile });
// }

// function updateById(req, res) {
//   const { id } = req.params;
//   const { picture, price, status, description } = req.body;
//   // Se tiver req.file, vamos usar o req.file
//   // Se não, vamos usar o picture
//   let fileLocation = "";

//   if (req.file) {
//     fileLocation = `/uploads/${req.file.filename}`;
//   } else {
//     fileLocation = picture;
//   }

//   ImmobileModel.update(id, fileLocation, price, status, description);
//   return res.redirect("/");
// }

// function deleteById(req, res) {
//   const { id } = req.params;
//   ImmobileModel.deleteById(id);
//   return res.redirect("/");
// }

module.exports = {
    listarUsuarios,
    criarUsuarios,
    logarUsuarios,
    atualizarUsuario
};