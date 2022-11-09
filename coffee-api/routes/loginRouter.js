const loginController = require("../controllers/LoginController");
const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/LoginMiddleware");

router.post("/", middleware.fieldsValidation, loginController.authentication);

module.exports = router;