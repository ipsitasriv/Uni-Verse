const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* Test route */

app.get("/", (req, res) => {
  res.send("Uni-Verse backend running");
});

/* Auth routes */

app.use("/api", authRoutes);

app.listen(5001, () => {
  console.log("Server running on port 5001");
});