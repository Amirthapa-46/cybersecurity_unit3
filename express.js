const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Define API routes here
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Node.js Web Service!" });
});

app.get("/api/data", (req, res) => {
  res.json({ id: 1, name: "Node.js API", status: "Running" });
});

module.exports = app; // Export the app
