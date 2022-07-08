const { Auth } = require("../model/auth");

const customerController = {
  //ADD CUSTOMER
  async addAuth(req, res) {
    try {
      const newAuth = new Auth(req.body);
      const savedAuth = await newAuth.save();
      res.json(savedAuth);
    } catch (err) {
      console.log(err.message);
      res.json(err);
    }
  },

  //GET ONE CUSTOMER
  async getOneAuth(req, res) {
    try {
      const customers = await Auth.findById(req.params.id);
      res.json(customers);
    } catch (err) {
      res.json(err);
    }
  },

  //GET ALL CUSTOMER
  async getAllAuth(req, res) {
    try {
      const customers = await Auth.find();
      res.json(customers);
    } catch (err) {
      res.json(err);
    }
  },

  //UPDATE CUSTOMER
  async updateAuth(req, res) {
    try {
      await Auth.findByIdAndUpdate(req.params.id, req.body);
      const getAuth = await Auth.findById(req.params.id);
      res.json(getAuth);
    } catch (error) {
      res.json(error);
    }
  },

  //DELETE CUSTOMER
  async deleteAuth(req, res) {
    try {
      await Auth.findByIdAndDelete(req.params.id);
      res.json("Deleted successfully");
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = customerController;
