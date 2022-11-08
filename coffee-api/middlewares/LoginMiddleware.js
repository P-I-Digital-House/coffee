const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");

function validateUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
}

const fieldsValidation = [
  body("email").isEmail().withMessage("Você precisa digitar o email"),
  body("password")
    .notEmpty()
    .withMessage("Você precisa digitar a senha")
    .isLength({ min: 5 })
    .withMessage("A senha precisa ter pelo menos 5 caracteres"),
];

function validateToken(req, res, next) {
  console.log(req.headers.authorization);
  //const { token } = req.cookies;
  const token = req.headers.authorization;
  // Se não tiver token, redireciona para a página de login
  if (!token) {
    return res.status(403).json({ message: "Não autorizado!" });
  }

  // Se o token for inválido, redireciona para a página de login
  try {
    const decoded = jwt.verify(token, jwtKey);
    console.log(decoded);
  } catch (error) {
    res.cookie("token", "");
    return res.status(500).send("nao func");
  }

  // Se tiver token e o token for válido, deixa continuar
  next();
}

module.exports = {
  validateUser,
  fieldsValidation,
  validateToken,
};
