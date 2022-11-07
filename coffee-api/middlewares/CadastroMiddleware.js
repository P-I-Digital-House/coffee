const { body, validationResult } = require("express-validator");

function validateUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200);
  }

  next();
}

const fieldsValidation = [
  body("name")
    .notEmpty()
    .withMessage("Nome obrigatório"),
  body("document")
    .notEmpty()
    .withMessage("Documento obrigatório")
    .isLength({ min: 11 })
    .withMessage("O documento precisa ter pelo menos 11 caracteres"),
  body("age")
    .notEmpty()
    .withMessage("Idade obrigatória"),
  body("email")
    .isEmail()
    .withMessage("Email obrigatório"),
  body("password")
    .notEmpty()
    .withMessage("Senha obrigatória")
    .isLength({ min: 5 })
    .withMessage("A senha precisa ter pelo menos 5 caracteres"),
];

module.exports = {
  validateUser,
  fieldsValidation,
};