const { Customer } = require("../model/customer");

const customerController = {
  //ADD CUSTOMER
  async addCustomer(req, res) {
    try {
      const newCustomer = new Customer(req.body);
      const savedCustomer = await newCustomer.save();
      res.json(savedCustomer);
    } catch (err) {
      console.log(err.message);
      res.json(err);
    }
  },

  //GET ONE CUSTOMER
  async getOneCustomer(req, res) {
    try {
      const customers = await Customer.findById(req.params.id);
      res.json(customers);
    } catch (err) {
      res.json(err);
    }
  },

  //GET ALL CUSTOMER
  async getAllCustomer(req, res) {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (err) {
      res.json(err);
    }
  },

  //UPDATE CUSTOMER
  async updateCustomer(req, res) {
    try {
      await Customer.findByIdAndUpdate(req.params.id, req.body);
      const getCustomer = await Customer.findById(req.params.id);
      res.json(getCustomer);
    } catch (error) {
      res.json(error);
    }
  },

  //DELETE CUSTOMER
  async deleteCustomer(req, res) {
    try {
      await Customer.findByIdAndDelete(req.params.id);
      res.json("Deleted successfully");
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = customerController;
