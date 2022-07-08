const personnalController = require("../controllers/personnalController");

const router = require("express").Router();

//ADD PERSONNAL
router.post("/", personnalController.addPersonnal);

//GET PERSONNALS
router.get("/", personnalController.getAllPersonnal);

//GET ONE PERSONNAL
router.get("/:id", personnalController.getOnePersonnal);

//UPDATE PERSONNAL
router.put("/:id", personnalController.updatePersonnal);

//DELETE PERSONNAL
router.delete("/:id", personnalController.deletePersonnal);

module.exports = router;
