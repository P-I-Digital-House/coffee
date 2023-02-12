const UserModel = require("../database/models/User");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");


function authentication(req, res) {
 
  const { email, password } = req.body;

  const user = UserModel.login(email, password);
  
  if (user) {
    const token = jwt.sign({ email }, jwtKey, { expiresIn: "30s" });
    const {name, document} = user;
    return res.status(200).send({token: token, user: {name : name, document : document, email: email}});

  }

  return res.status(403).send({token: "", message: "Usuário ou senha inválidos!"});
  
}

module.exports = {
  authentication
};
