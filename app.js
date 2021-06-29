const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

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
