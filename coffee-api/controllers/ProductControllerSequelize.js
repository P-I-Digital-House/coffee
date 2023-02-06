const database = require("../database/models");

function getProducts(req, res) {
  database.Product.findAll().then((data) => {
    res.json(data);
  });
}

function getProductById(req, res) {
  const { id } = req.params;
  database.Product.findByPk(id).then((data) => {
    res.json(data);
  });
}

function createProduct(req, res) {
  const { pname, pdescription, picture, category } = req.body;
  database.Product.create({
    pname,
    pdescription,
    picture,
    category
  }).then((data) => {
    res.json(data);
  });
}

function updateProduct(req, res) {
  const { id } = req.params;
  const { pname, pdescription, picture, category } = req.body;
  database.Product.update({
    pname,
    pdescription,
    picture,
    category
  }, {
    where: {
      id
    }
  }).then((data) => {
    res.json(data);
  });
}

function deleteProduct(req, res) {
  const { id } = req.params;
  database.Product.destroy({ where: { id } }).then((data) => res.json(data));
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};