const { Supplier } = require("../model/supplier");

const supplierController = {
  //ADD SUPPLIER
  async addSupplier(req, res) {
    try {
      const newSupplier = new Supplier(req.body);
      const savedSupplier = await newSupplier.save();
      res.json(savedSupplier);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  //GET ONE SUPPLIER
  async getOneSupplier(req, res) {
    try {
      const suppliers = await Supplier.findById(req.params.id);
      res.json(suppliers);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL SUPPLIER
  async getAllSupplier(req, res) {
    try {
      const suppliers = await Supplier.find();
      res.json(suppliers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE SUPPLIER
  async updateSupplier(req, res) {
    try {
      await Supplier.findByIdAndUpdate(req.params.id, req.body);
      const getSupplier = await Supplier.findById(req.params.id);
      res.json(getSupplier);
    } catch (error) {
      res.json(error);
    }
  },

  //DELETE SUPPLIER
  async deleteSupplier(req, res) {
    try {
      await Supplier.findByIdAndDelete(req.params.id);
      res.json("Deleted successfully");
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = supplierController;
