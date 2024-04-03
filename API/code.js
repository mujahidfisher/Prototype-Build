const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(express.static("./static"));
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });