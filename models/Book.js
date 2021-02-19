const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  authors: {
    type: Array,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
