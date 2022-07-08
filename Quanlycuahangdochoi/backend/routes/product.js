const productController = require("../controllers/productController");

const router = require("express").Router();

//ADD PRODUCT
router.post("/", productController.addProduct);

//GET PRODUCTS
router.get("/", productController.getAllProduct);

//GET ONE PRODUCT
router.get("/:id", productController.getOneProduct);

//UPDATE PRODUCT
router.put("/:id", productController.updateProduct);

//DELETE PRODUCT
router.delete("/:id", productController.deleteProduct);

module.exports = router;
