const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/User");
const initUser = require("./utilities/initUser");
require("dotenv").config();

const startServer = async () => {
  const app = express();
  const PORT = process.env.PORT;
  const DB_CONNECTION = process.env.DB_CONNECTION;
  await mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("database connection established");
  await initUser(userModel);
  app.use(cors());
  app.use(express.json());
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
};

startServer();
