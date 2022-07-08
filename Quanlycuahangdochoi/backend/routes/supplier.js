const supplierController = require("../controllers/supplierController");

const router = require("express").Router();

//ADD SUPPLIER
router.post("/", supplierController.addSupplier);

//GET SUPPLIERS
router.get("/", supplierController.getAllSupplier);

//GET ONE SUPPLIER
router.get("/:id", supplierController.getOneSupplier);

//UPDATE SUPPLIER
router.put("/:id", supplierController.updateSupplier);

//DELETE SUPPLIER
router.delete("/:id", supplierController.deleteSupplier);

module.exports = router;
