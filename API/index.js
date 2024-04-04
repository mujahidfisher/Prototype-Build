const express = require("express");
const app = express();
require("./config/route");
require("./models/connectDB");
const cors = require("cors");
const excel = require("exceljs");
const bodyParser = require("body-parser");
const User = require("./models/connectDB");
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(express.static("./static"));
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, personalityType1 } = req.body;

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      personalityType1: personalityType1
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });