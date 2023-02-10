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

function getProductsByCategory(req, res) {
  const { category } = req.params;

  database.Product.findAll({
    where: {
      category: category
    },
  }).then((data) => {
    res.json(data);
  });
}

function createProduct(req, res) {
  const { pname, pdescription, picture, category, price, pquantity } = req.body;
  database.Product.create({
    pname,
    pdescription,
    picture,
    category,
    price,
    pquantity
  }).then((data) => {
    res.json(data);
  });
}

function updateProduct(req, res) {
  const { id } = req.params;
  const { pname, pdescription, picture, category, price, pquantity } = req.body;
  database.Product.update({
    pname,
    pdescription,
    picture,
    category,
    price,
    pquantity
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
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct
};