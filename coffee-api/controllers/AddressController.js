const database = require("../database/models");

function getAddress(req, res) {
  database.Address.findAll().then((data) => {
    res.json(data);
  });
}

function getAddressById(req, res) {
  const { id } = req.params;
  database.Address.findByPk(id).then((data) => {
    res.json(data);
  });
}

function createAddress(req, res) {
  const { aname, cep, street, anumber, complement, district, city, state, users_id } = req.body;
  database.Address.create({
    aname,
    cep,
    street,
    anumber,
    complement,
    district,
    city,
    state,
    users_id
  }).then((data) => {
    res.json(data);
  });
}

function updateAddress(req, res) {
  const { id } = req.params;
  const { aname, cep, street, anumber, complement, district, city, state } = req.body;
  database.Address.update({
    aname,
    cep,
    street,
    anumber,
    complement,
    district,
    city,
    state
  }, {
    where: {
      id
    }
  }).then((data) => {
    res.json(data);
  });
}

function deleteAddress(req, res) {
  const { id } = req.params;
  database.Address.destroy({ where: { id } }).then((data) => res.json(data));
}

module.exports = {
  getAddress,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress
};
