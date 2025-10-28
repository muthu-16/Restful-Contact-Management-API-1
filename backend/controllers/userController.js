const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already registered!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ userName, email, password: hashedPassword });

  res.status(201).json({ _id: user._id, userName: user.userName, email: user.email });
});

module.exports = { registerUser };
