const fs = require("fs");

function User( picture, name, document, age, tel, email, password) {
  this.picture = picture;
    this.name = name;
    this.document = document
    this.age = age
    this.tel = tel
    this.email = email
    this.password = password
}

function getAll() {
  const userList = JSON.parse(
    fs.readFileSync(require.resolve("../database/Usuario.json"), {encoding: "utf-8"} )
  );
  return userList.map(
    (user) =>
      new User(
        user.picture,
        user.name,
        user.document,
        user.age,
        user.tel,
        user.email,
        user.password
      )
  );
}


function create(picture, name, document, age, tel, email, password) {
  const newUser = new User(picture, name, document, age, tel, email, password);
  const userList = getAll();
  userList.push(newUser);
  fs.writeFileSync(require.resolve("../database/Usuario.json"), JSON.stringify(userList));
}

function login(email, password){
  const userList = getAll();

  const findByEmail = (item) => item.email == email && item.password == password;

  const indexUser = userList.findIndex(findByEmail)
  if(indexUser !== -1){
    return true
  }
  return false
}


function update(picture, name, document, age, tel, email, password) {
  // Buscar todos os imóveis
  const userList = getAll();

  const findByDocument = (item) => item.document == document;

  const indexUser = userList.findIndex(findByDocument)
  const user = userList[indexUser]
  if (user) {
    user.picture = picture;
    user.name = name;
    user.document = document;
    user.age = age;
    user.tel = tel;
    user.email = email;
    user.password = password;
  }
  // Salvar os dados alterados no arquivo do banco de dados
  fs.writeFileSync(require.resolve("../database/Usuario.json"), JSON.stringify(userList));
}

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
  create,
  update,
  login
};