const database = require("../database/models");

function createProductOrder(req, res) {
  const { totalprice,unitPrice,quantity,orders_id,product_id } = req.body;
  database.ProductOrder.create({
    totalprice,unitPrice,quantity,orders_id,product_id
  }).then((data) => {
    res.json(data);
  });
}


module.exports = {
  createProductOrder  
};