const fs = require("fs");

function Product(id, img, nameProduct, quantity, price, category) {
    this.id = id;
    this.img = img;
    this.nameProduct = nameProduct
    this.quantity = quantity
    this.price = price
    this.category = category
}

function getAll() {
  const productList = JSON.parse(
    fs.readFileSync(require.resolve("../database/Products.json"), {encoding: "utf-8"} )
  );
  return productList.map(
    (product) =>
      new Product(
        product.id,
        product.img,
        product.nameProduct,
        product.quantity,
        product.price,
        product.category
        
      )
  );
}

function getByCategory(category) {
  const productList = JSON.parse(
    fs.readFileSync(require.resolve("../database/Products.json"), {encoding: "utf-8"} )
  );
  return productList.filter(
    (product) =>
      product.category == category
  );
}

function create(nameProduct, quantity, category, img, price, available, description) {
  const newProduct = new Product(nameProduct, quantity, category, img, price, available, description);
  const productList = getAll();
  productList.push(newProduct);
  fs.writeFileSync("database/Products.json", JSON.stringify(productList));
}


// function update(id, picture, price, status, description) {
//   // Buscar todos os imóveis
//   const immobileList = getAll();
//   // Alterar o imóvel que possui o index = id
//   const immobile = immobileList[id];
//   immobile.picture = picture;
//   immobile.price = price;
//   immobile.status = status;
//   immobile.description = description;
//   // Salvar os dados alterados no arquivo do banco de dados
//   fs.writeFileSync("database/Immobiles.json", JSON.stringify(immobileList));
// }

// function deleteById(id) {
//   // Buscar todos os imóveis
//   // Remover o imóvel do index = id
//   // Salvar a lista novamente
//   const immobileList = getAll();
//   immobileList.splice(id, 1);
//   fs.writeFileSync("database/Immobiles.json", JSON.stringify(immobileList));
// }

module.exports = {
  getAll,
  getByCategory,
  create
};