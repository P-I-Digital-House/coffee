const database = require("../database/models");

function createProductOrder(req, res) {
  const { totalPrice,unitPrice,quantity,orders_id,product_id } = req.body;
  database.ProductOrder.create({
    totalPrice,unitPrice,quantity,orders_id,product_id
  }).then((data) => {
    res.json(data);
  });
}

function getByOrderId(req, res){
    const { orderId } = req.params
    database.ProductOrder.findAll({
        where: {
            orders_id: orderId
        }
      }).then((data) => {
        res.json(data);
      });
}

module.exports = {
  createProductOrder,
  getByOrderId
};