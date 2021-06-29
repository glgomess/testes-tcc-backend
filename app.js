const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.get("/", (req, res) => {
  console.log("Request received.");
  return res
    .status(200)
    .json("Testing Integration Front - Back - Heroku - Successful!");
});

app.listen(port, () => {
  console.log(`Teste listening at http://localhost:${port}`);
});
