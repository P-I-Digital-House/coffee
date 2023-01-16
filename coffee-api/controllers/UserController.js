const UserModel = require("../models/User");

function findAll(req, res) {
  const userList = UserModel.getAll();
  return res.json(userList);
}

function findUserByDocument(req, res) {
  const { document } = req.params;
  const user = UserModel.findByDocument(document);
  return res.json(user);
}

function create(req, res) {
  let fileLocation = "";

  if (req.file) {
    fileLocation = `../public/uploads/${req.file.filename}`;
  } else {
    fileLocation = req.body.picture;
  }
  const { name, document, age, tel, email, password } = req.body;

  UserModel.create(fileLocation, name, document, age, tel, email, password);
  return res.status(200).json({ message: "Usuário criado com sucesso!" });
  
}

function update(req, res) {
  let fileLocation = "";

  if (req.file) {
    fileLocation = `../public/uploads/${req.file.filename}`;
  } else if (req.body.picture !== undefined || req.body.picture !== null) {
    fileLocation = req.body.picture;
  } else {
    fileLocation = null;
  }
  const { name, document, age, tel, email, password } = req.body;

  fileLocation != null
    ? UserModel.update(name, document, age, tel, email, password, fileLocation)
    : UserModel.update(name, document, age, tel, email, password);
  return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
}

function deleteByDocument(req, res) {
  const { document } = req.params;
  UserModel.deleteByDocument(document);
  return res.status(200).json({ message: "Usuário deletado com sucesso!" });
}

module.exports = {
  findAll,
  findUserByDocument,
  create,
  update,
  deleteByDocument,
};
