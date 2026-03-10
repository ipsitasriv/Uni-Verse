exports.loginUser = (req, res) => {

    const { email, password } = req.body;
  
    if (email === "admin@test.com" && password === "123456") {
  
      res.json({
        message: "Login successful",
        user: email
      });
  
    } else {
  
      res.status(401).json({
        message: "Invalid credentials"
      });
  
    }
  
  };
  
  
  exports.registerUser = (req, res) => {
  
    const { name, email, password } = req.body;
  
    res.json({
      message: "User registered successfully",
      user: name
    });
  
  };