const { body } = require("express-validator");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");


const fieldsValidation = [
  body("email").isEmail().withMessage("Você precisa digitar o email"),
  body("password")
    .notEmpty()
    .withMessage("Você precisa digitar a senha")
    .isLength({ min: 8 })
    .withMessage("A senha precisa ter pelo menos 5 caracteres"),
];

function validateToken(req, res, next) {

  const {authorization} = req.headers;

  if (!authorization) {
    return res.status(403).json({ message: "Token não encontrado!" });
  }

  try {
    jwt.verify(authorization, jwtKey);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao válidar o Token!" });
  }

  next();
}

module.exports = {
  fieldsValidation,
  validateToken,
};
