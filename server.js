const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const config = require("./config");
const users = require("./routes/api/users");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cors());

//DB config
const { MONGO_URI, MONGO_DB_NAME } = config;
const db = `${MONGO_URI}`;

//Connect to mongo
mongoose
  .connect(db, {})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

//Use Routes
app.use("/api/users", users);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Connect on PORT
const { PORT, HOST } = config;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
