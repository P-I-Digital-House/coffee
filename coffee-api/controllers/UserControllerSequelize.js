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
  const { name, document, email, password, phone, birthdate, picture } = req.body;
  database.User.create({
    name,
    document,
    email,
    password,
    phone,
    birthdate,
    picture
  }).then((data) => {
    res.json(data);
  });
}

function updateUser(req, res) {
  const { id } = req.params;
  const { name, document, email, password, phone, birthdate, picture } = req.body;
  database.User.update({
    name,
    document,
    email,
    password,
    phone,
    birthdate,
    picture
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