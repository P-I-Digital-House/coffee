const ProductModel = require("../models/Product");

function findProducts(req, res, next) {
  try {
    const productList = ProductModel.getAll();
    return res.json(productList);
  } catch (error) {
    return res.status(500).send("Erro ao buscar produtos no Servidor");
  }
}

function findProductsByCategory(req, res, next) {
  const { category } = req.params;
  const productList = ProductModel.getByCategory(category);
  return res.json(productList);
}

function createProduct(req, res) {
  const {
    nameProduct,
    quantity,
    category,
    img,
    price,
    available,
    description,
  } = req.body;

  ProductModel.create(
    nameProduct,
    quantity,
    category,
    img,
    price,
    available,
    description
  );
  return res.status(200).json({Product: req.body});
}

module.exports = {
  findProducts,
  findProductsByCategory,
  createProduct,
};
