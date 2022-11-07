const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");

function listarUsuarios(req, res) {
   const userList = UserModel.getAll();
   return res.json(userList)
}


function listarUsuariosPeloDocumento(req, res) {
    const { document } = req.params;
    const userList = UserModel.findByDocument(document);
    return res.json(userList)
 }

function criarUsuarios(req, res) {
    let fileLocation = "";
    
    if (req.file) {
        fileLocation = `../public/uploads/${req.file.filename}`;
    } else {
        fileLocation = req.body.picture;
    }
    const { name, document, age, tel, email, password } = req.body;

  UserModel.create(fileLocation, name, document, age, tel, email, password);
  return res.status(200).send("Funcionou");
}

function logarUsuarios(req, res) {
    const { email, senha } = req.body;
    const teste = UserModel.login(email, senha);
    res.clearCookie("token");
    if (teste) {
        const token = jwt.sign({ email }, jwtKey, { expiresIn: "1d" });
        res.cookie("token", token);
    }
    return res.status(200).send(teste);
}

function atualizarUsuario(req, res) {
    let fileLocation = "";
    
    if (req.file) {
        fileLocation = `../public/uploads/${req.file.filename}`;
    } else {
        fileLocation = req.body.picture;
    }
    const { name, document, age, tel, email, password } = req.body;

    UserModel.update(fileLocation, name, document, age, tel, email, password);
    return res.status(200).send("Funcionou");
}

function deletarUsuario(req, res) {
    const { document } = req.params;
    UserModel.deleteByDocument(document);
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
    listarUsuariosPeloDocumento,
    criarUsuarios,
    logarUsuarios,
    atualizarUsuario,
    deletarUsuario,
};