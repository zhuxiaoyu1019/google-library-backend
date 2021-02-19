const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
// app.use(cors());
app.use(
  cors({
    origin: ["https://google-library-frontend.herokuapp.com"],
  })
);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googleLibrarydb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
