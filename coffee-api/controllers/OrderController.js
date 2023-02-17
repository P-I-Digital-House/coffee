const database = require("../database/models");

function createOrder(req, res) {
  const { odescription, totalPrice, dt_create, delivery_date, users_id, address_id } = req.body;
  database.Order.create({
    odescription, totalPrice, dt_create, delivery_date, users_id, address_id
  }).then((data) => {
    res.json(data);
  });
}

function getOrderByIdUser(req, res){
  const { userId } = req.params;
  database.Order.findAll({
    where: {
      users_id: userId
    }
  }).then((data) => {
    res.json(data);
  });
}

function deleteOrder(req, res) {
  const { id } = req.params;
  database.Order.destroy({ where: { id } }).then((data) => res.json(data));
}

module.exports = {
  createOrder,
  getOrderByIdUser,
  deleteOrder
};