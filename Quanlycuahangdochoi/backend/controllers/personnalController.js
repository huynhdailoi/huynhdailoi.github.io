const { Personnal } = require("../model/personnal");

const personnalController = {
  //ADD PERSONNAL
  async addPersonnal(req, res) {
    try {
      const newPersonnal = new Personnal(req.body);
      const savedPersonnal = await newPersonnal.save();
      res.json(savedPersonnal);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  //GET ONE PERSONNAL
  async getOnePersonnal(req, res) {
    try {
      const personnals = await Personnal.findById(req.params.id);
      res.json(personnals);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL PERSONNAL
  async getAllPersonnal(req, res) {
    try {
      const personnals = await Personnal.find();
      res.json(personnals);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE PERSONNAL
  async updatePersonnal(req, res) {
    try {
      await Personnal.findByIdAndUpdate(req.params.id, req.body);
      const getPersonnal = await Personnal.findById(req.params.id);
      res.json(getPersonnal);
    } catch (error) {
      res.json(error);
    }
  },

  //DELETE PERSONNAL
  async deletePersonnal(req, res) {
    try {
      await Personnal.findByIdAndDelete(req.params.id);
      res.json("Deleted successfully");
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = personnalController;
