const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { required } = require("nodemon/lib/config");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

const corsOption = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("OK");
});

//databse connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database is connected !");
  } catch (error) {
    console.log("MongoDB database connection failed !");
  }
};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));

connectDB();

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on the PORT ${PORT}`);
});
