const database = require("../database/models");

function getPayment(req, res) {
  database.Payment.findAll().then((data) => {
    res.json(data);
  });
}

function getPaymentById(req, res) {
  const { id } = req.params;
  database.Payment.findByPk(id).then((data) => {
    res.json(data);
  });
}

function getPaymentByUserId(req, res) {
  const { userId } = req.params;
  database.Payment.findOne({
    where: {
      users_id: userId
    }
  }).then((data) => {
    res.json(data);
  });
}

function createPayment(req, res) {
  const { cardNumber, cardName, securityCode, validity, users_id } = req.body;
  database.Payment.create({
    cardNumber,
    cardName,
    securityCode,
    validity,
    users_id
  }).then((data) => {
    res.json(data);
  });
}

function updatePayment(req, res) {
  const { id } = req.params;
  const { cardNumber, cardName, securityCode, validity } = req.body;
  database.Payment.update({
    cardNumber,
    cardName,
    securityCode,
    validity
  }, {
    where: {
      id
    }
  }).then((data) => {
    res.json(data);
  });
}

function deletePayment(req, res) {
  const { id } = req.params;
  database.Payment.destroy({ where: { id } }).then((data) => res.json(data));
}

module.exports = {
  getPayment,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
  getPaymentByUserId
};