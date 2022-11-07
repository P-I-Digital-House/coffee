const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");

function validateUser(req, res, next) {
  console.log("Olá, cheguei no middleware");
  // if (!req.body.email) {
  //   return res.send("Você precisa digitar o email");
  // }

  // if (!req.body.email.includes("@")) {
  //   return res.send("Você precisa digitar o email corretamente");
  // }

  // if (!req.body.password) {
  //   return res.send("Você precisa digitar a senha");
  // }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
}

const fieldsValidation = [
  body("email").isEmail().withMessage("Você precisa digitar o email"),
  body("senha")
    .notEmpty()
    .withMessage("Você precisa digitar a senha")
    .isLength({ min: 5 })
    .withMessage("A senha precisa ter pelo menos 5 caracteres"),
];

function validateToken(req, res, next) {
  const { token } = req.cookies;

  // Se não tiver token, redireciona para a página de login
  if (!token) {
    return res.status(500).send('nao func');
  }

  // Se o token for inválido, redireciona para a página de login
  try {
    const decoded = jwt.verify(token, jwtKey);
    console.log(decoded);
  } catch (error) {
    res.cookie("token", "");
    return res.status(500).send('nao func');
  }

  // Se tiver token e o token for válido, deixa continuar
  next();
}

module.exports = {
  validateUser,
  fieldsValidation,
  validateToken,
};