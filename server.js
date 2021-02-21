const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

const server = http.createServer(app);
const io = socketIo(server);

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
