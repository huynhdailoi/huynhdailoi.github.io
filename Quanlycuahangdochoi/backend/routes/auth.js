const authController = require("../controllers/authController");

const router = require("express").Router();

//ADD CUSTOMER
router.post("/", authController.addAuth);

//GET CUSTOMERS
router.get("/", authController.getAllAuth);

//GET ONE CUSTOMER
router.get("/:id", authController.getOneAuth);

//UPDATE CUSTOMER
router.put("/:id", authController.updateAuth);

//DELETE CUSTOMER
router.delete("/:id", authController.deleteAuth);

module.exports = router;
