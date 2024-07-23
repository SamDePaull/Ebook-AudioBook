const { Book } = require('../models');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ where: { userId: req.user.id } });
    res.json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.addBook = async (req, res) => {
  const { title, content } = req.body;

  try {
    const book = await Book.create({ title, content, userId: req.user.id });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
