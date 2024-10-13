import Book from '../models/bookModel.js';
import User from '../models/userModel.js';

export const addBook = async (req, res) => {
  const { title, author } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newBook = new Book({ title, author, user: user._id });
    await newBook.save();

    user.books.push(newBook._id); 
    await user.save();

    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error });
  }
};
