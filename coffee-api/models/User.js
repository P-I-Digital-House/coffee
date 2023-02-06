/* const fs = require("fs");

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

function findByDocument (document) {
  const userList = getAll();

  const findByDocument = (item) => item.document == document;

  const indexUser = userList.findIndex(findByDocument)
  const user = userList[indexUser]
  return user;
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

  const user = userList.find(findByEmail)
  if(user){
    return user;
  }
  return null;
}

function update(name, document, age, tel, email, password, picture = 0) {
  // Buscar todos os imóveis
  const userList = getAll();

  const findByDocument = (item) => item.document == document;

  const indexUser = userList.findIndex(findByDocument)
  const user = userList[indexUser]
  if (user) {
    picture != 0 ? user.picture = picture : null;
    user.name = name;
    user.document = parseInt(document);
    user.age = parseInt(age);
    user.tel = tel;
    user.email = email;
    user.password = password;
  }
  // Salvar os dados alterados no arquivo do banco de dados
  fs.writeFileSync(require.resolve("../database/Usuario.json"), JSON.stringify(userList));
}

function deleteByDocument(document) {
  const userList = getAll();

  const findByDocument = (item) => item.document == document;
  
  const indexUser = userList.findIndex(findByDocument)

  indexUser != -1 ? userList.splice(indexUser, 1) : userList;

  fs.writeFileSync(require.resolve("../database/Usuario.json"), JSON.stringify(userList));
}

module.exports = {
  getAll,
  create,
  update,
  login,
  deleteByDocument,
  findByDocument,
}; */