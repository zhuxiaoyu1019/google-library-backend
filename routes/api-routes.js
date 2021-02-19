const db = require("../models");

module.exports = function (app) {
  // /api/books (get) - Should return all saved books as JSON.
  app.get("/api/books", (req, res) => {
    db.Book.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // /api/books (post) - Will be used to save a new book to the database.
  app.post("/api/books", ({ body }, res) => {
    db.Book.create(body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
  app.delete("/api/books/:id", (req, res) => {
    db.Book.deleteOne({ _id: req.params.id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
