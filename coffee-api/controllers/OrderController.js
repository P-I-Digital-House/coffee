const database = require("../database/models");

function createOrder(req, res) {
  const { odescription, totalPrice, dt_create, delivery_date, users_id, address_id } = req.body;
  database.Order.create({
    odescription, totalPrice, dt_create, delivery_date, users_id, address_id
  }).then((data) => {
    res.json(data);
  });
}

module.exports = {
  createOrder
};