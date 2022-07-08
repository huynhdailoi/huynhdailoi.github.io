const { Product } = require("../model/product");

const productController = {
  //ADD PRODUCT
  async addProduct(req, res) {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res.json(savedProduct);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },
  //GET ONE PRODUCT
  async getOneProduct(req, res) {
    try {
      const products = await Product.findById(req.params.id);
      res.json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET ALL PRODUCT
  async getAllProduct(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE PRODUCT
  async updateProduct(req, res) {
    try {
      await Product.findByIdAndUpdate(req.params.id, req.body);
      const getProduct = await Product.findById(req.params.id);
      res.json(getProduct);
    } catch (error) {
      res.json(error);
    }
  },

  //DELETE PRODUCT
  async deleteProduct(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json("Deleted successfully");
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = productController;
