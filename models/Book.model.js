const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre'
  },
  auther: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;