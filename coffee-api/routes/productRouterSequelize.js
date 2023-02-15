const express = require("express");
const router = express.Router();
const controller = require("../controllers/ProductControllerSequelize");
const middlewareToken = require("../middlewares/LoginMiddleware");


router.get("/", middlewareToken.validateToken, controller.getProducts);
router.get("/:id", controller.getProductById);
router.get("/category/:category", controller.getProductsByCategory);
router.get("/search/:search", controller.getProductsBySearch);
router.post("/", controller.createProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;