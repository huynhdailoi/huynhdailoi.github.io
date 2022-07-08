const { Book, Author } = require("../model/model");

const authorController = {
  //ADD AUTHOR
  async addAuthor(req, res) {
    try {
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.json(savedAuthor);
    } catch (err) {
      console.log(err.message);
      res.status(500).json(err);
    }
  },

  //GET ALL AUTHOR
  async getAllAuthor(req, res) {
    try {
      const authors = await Author.find();
      res.json(authors);
    } catch (err) {
      res.json(err);
    }
  },
  //GET AN AUTHOR
  async getAnAuthor(req, res) {
    try {
      const author = await Author.findById(req.params.id).populate("books");
      res.json(author);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE AUTHOR
  async updateAuthor(req, res) {
    try {
      const author = await Author.findById(req.params.id);
      await author.updateOne({ $set: req.body });
      res.json("update successfully");
    } catch (error) {
      res.json(error);
    }
  },

  //DELETE AUTHOR
  async deleteAuthor(req, res) {
    try {
      await Book.updateMany({ author: req.params.id }, { author: null });
      await Author.findByIdAndDelete(req.params.id);
      res.json("Deleted successfully");
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = authorController;
