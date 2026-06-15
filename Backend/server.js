const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

const connectDB = require("./config/db");

//connectDB();

// Middleware
app.use(express.json());
app.use(cors());

const PORT = 5000;

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    category: "Mobile",
    image: "https://m.media-amazon.com/images/I/51PtFHUPjBL._AC_UY218_.jpg"
  },
  {
    id: 2,
    name: "Samsung S24",
    price: 69999,
    category: "Mobile",
    image: "https://m.media-amazon.com/images/I/51wQxCsDMSL._AC_UY218_.jpg"
  },
  {
    id: 3,
    name: "Dell Laptop",
    price: 65000,
    category: "Laptop",
    image: "https://m.media-amazon.com/images/I/71VEmjMX5nL._AC_UY218_.jpg"
  }
];


const users = [];

// Home API
app.get("/", (req, res) => {
  res.send("Amazon Clone API Running");
});

// Products API
app.get("/products", (req, res) => {
  res.json(products);
});

// Login API
app.post("/login", (req, res) => {
  res.json({
    success: true,
    message: "Login Successful"
  });
});

app.post("/register", (req, res) => {

  const { name, email, password } = req.body;

  const existingUser = users.find(
    (user) => user.email === email
  );

  if (existingUser) {
    return res.json({
      success: false,
      message: "User already exists"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password
  };

  users.push(newUser);

  res.json({
    success: true,
    message: "Registration successful",
    user: newUser
  });

});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (user) {
    res.json({
      success: true,
      message: "Login successful",
      user: user
    });
  } else {
    res.json({
      success: false,
      message: "Invalid email or password"
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});