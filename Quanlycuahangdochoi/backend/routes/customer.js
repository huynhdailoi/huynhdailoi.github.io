const customerController = require("../controllers/customerController");

const router = require("express").Router();

//ADD CUSTOMER
router.post("/", customerController.addCustomer);

//GET CUSTOMERS
router.get("/", customerController.getAllCustomer);

//GET ONE CUSTOMER
router.get("/:id", customerController.getOneCustomer);

//UPDATE CUSTOMER
router.put("/:id", customerController.updateCustomer);

//DELETE CUSTOMER
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
