const express = require("express");
const path = require("path");

const app = express();

// IMPORTANT: lowercase "public"
app.use(express.static("public"));

// homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Hyperno running on port " + PORT);
});
