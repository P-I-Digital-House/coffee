const UserModel = require("../database/models/User");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");
const database = require("../database/models");

async function authentication(req, res) {
  const {email, password} = req.body

  const user = await database.User.findOne({
    where:{
      email: email,
      upassword: password
    }
  })
  if (user != null) {
    console.log('usuario', user)
    const token = jwt.sign({ email }, jwtKey, { expiresIn: "3d" });
    const {name, document, id} = user;
    return res.status(200).send({token: token, user: {name : name, document : document, email: email, id : id}});
  }
  return res.status(403).send({token: "", message: "Usuário ou senha inválidos!"});
}

function getAllUsers(req, res) {
  database.User.findAll().then((data) => {
    res.json(data);
  });

}


module.exports = {
  authentication
};
