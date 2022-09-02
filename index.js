const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Root Routes
app.get("/", (req, res) => {
  res.send("Madrasha Server IS Running");
});

app.listen(port, () => {
  console.log(`Madrasha Server running on port ${port}`);
});
