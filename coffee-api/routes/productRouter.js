const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const middlewareToken = require("../middlewares/LoginMiddleware");

router.get("/",middlewareToken.validateToken, productController.findProducts);

router.get("/category/:category", productController.findProductsByCategory);

module.exports = router;