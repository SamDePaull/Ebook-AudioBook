const { Book } = require('../models');

exports.createDummyBooks = async (req, res) => {
  try {
    const books = [
      {
        title: 'Book 1',
        content: 'Content of Book 1',
        isCompleted: false,
        userId: 1,
      },
      {
        title: 'Book 2',
        content: 'Content of Book 2',
        isCompleted: true,
        userId: 1,
      },
      {
        title: 'Book 3',
        content: 'Content of Book 3',
        isCompleted: false,
        userId: 2,
      },
      // Tambahkan lebih banyak buku jika perlu
    ];

    await Book.bulkCreate(books);

    res.status(201).json({ message: 'Dummy books created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
