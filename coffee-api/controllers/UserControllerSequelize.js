const database = require("../database/models");

function getUsers(req, res) {
  database.User.findAll().then((data) => {
    res.json(data);
  });
}

function getUserById(req, res) {
  const { id } = req.params;
  database.User.findByPk(id).then((data) => {
    res.json(data);
  });
}

function createUser(req, res) {
  const { uname, document, email, upassword, phone, birthdate, picture } = req.body;
  database.User.create({
    uname,
    document,
    email,
    upassword,
    phone,
    birthdate,
    picture
  }).then((data) => {
    res.json(data);
  });
}

function updateUser(req, res) {
  const { id } = req.params;
  const { uname, document, email, upassword, phone, birthdate, file, picture } = req.body;

  let fileLocation = "";

  if (req.file) {
    fileLocation = `../public/uploads/${req.file.filename}`;
  } else {
    fileLocation = picture;
  }

  database.User.update({
    uname,
    document,
    email,
    upassword,
    phone,
    birthdate,
    picture: fileLocation
  }, {
    where: {
      id
    }
  }).then((data) => {
    res.json(data);
  });
}

function deleteUser(req, res) {
  const { id } = req.params;
  database.User.destroy({ where: { id } }).then((data) => res.json(data));
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};