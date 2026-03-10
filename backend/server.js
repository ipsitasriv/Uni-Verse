const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* Test route */

app.get("/", (req, res) => {
  res.send("Uni-Verse backend is running");
});


/* Login API */

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  if(email === "admin@test.com" && password === "123456"){

    res.json({
      message: "Login successful",
      user: email
    });

  } else {

    res.status(401).json({
      message: "Invalid email or password"
    });

  }

});


/* Register API */

app.post("/register", (req, res) => {

  const { name, email, password } = req.body;

  console.log("New user:", name, email);

  res.json({
    message: "User registered successfully"
  });

});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});