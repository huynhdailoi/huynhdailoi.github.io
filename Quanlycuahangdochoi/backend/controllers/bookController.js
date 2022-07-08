const { Book, Author } = require("../model/model");

const bookController = {
  //ADD A BOOK
  async addBook(req, res) {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      if (req.book.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.json(savedBook);
    } catch (error) {
      res.json(error);
    }
  },

  //GET ALL BOOKS
  async getAllBooks(req, res) {
    try {
      const allBooks = await Book.find();
      res.json(allBooks);
    } catch (error) {
      res.json(error);
    }
  },

  //GET A BOOK
  async getABook(req, res) {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      res.json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE BOOK
  async updateBook(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.json("update successfully");
    } catch (error) {
      res.json(error);
    }
  },

  //DETELE BOOK
  async deleteBook(req, res) {
    try {
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Book.findByIdAndDelete(req.params.id);
      res.json("Deleted successfully");
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = bookController;
