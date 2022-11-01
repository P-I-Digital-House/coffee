const ProductModel = require("../models/Product");

function listarProdutos(req, res, next) {
   const productList = ProductModel.getAll();
   return res.json(productList)
}

function listarProdutosPorCategoria(req, res, next) {
  const { category } = req.params;
  const productList = ProductModel.getByCategory(category);
  return res.json(productList)
}

function createProduct(req, res) {

  const { nameProduct, quantity, category, img, price, available, description } = req.body;
  ProductModel.create(nameProduct, quantity, category, img, price, available, description);
  return res.redirect("/");
}

// function showEditPage(req, res) {
//   const { id } = req.params;
//   const immobile = ImmobileModel.getById(id);
//   return res.render("updateImmobile", { immobile });
// }

// function updateById(req, res) {
//   const { id } = req.params;
//   const { picture, price, status, description } = req.body;
//   // Se tiver req.file, vamos usar o req.file
//   // Se não, vamos usar o picture
//   let fileLocation = "";

//   if (req.file) {
//     fileLocation = `/uploads/${req.file.filename}`;
//   } else {
//     fileLocation = picture;
//   }

//   ImmobileModel.update(id, fileLocation, price, status, description);
//   return res.redirect("/");
// }

// function deleteById(req, res) {
//   const { id } = req.params;
//   ImmobileModel.deleteById(id);
//   return res.redirect("/");
// }

module.exports = {
  listarProdutos,
  listarProdutosPorCategoria,
  createProduct
};