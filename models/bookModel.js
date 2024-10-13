import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // ربط الكتاب بالمستخدم
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

export default Book;
