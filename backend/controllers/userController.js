const responseHandler = require("../utils/responseHandler");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return responseHandler(res, false, "All fields are required", null, 400);
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return responseHandler(res, false, "Email already registered", null, 409);
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create and save user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const userData = {
      name: newUser.name,
      email: newUser.email,
    };

    return responseHandler(
      res,
      true,
      "User registered successfully",
      userData,
      201
    );
  } catch (error) {
    console.error("Register Error:", error);
    return responseHandler(res, false, "Something went wrong", null, 500);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validate input
    if (!email || !password) {
      return responseHandler(
        res,
        false,
        "Email and password are required",
        null,
        400
      );
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return responseHandler(res, false, "Invalid credentials", null, 401);
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return responseHandler(res, false, "Invalid credentials", null, 401);
    }

    // Create token
    const token = jwt.sign(
      { id: user._id, email: user.email }, // payload
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" } // expiry time
    );

    // Respond with success (you can include a token here)
    const userData = {
      name: user.name,
      email: user.email,
      token,
    };

    return responseHandler(res, true, "Login successful", userData, 200);
  } catch (error) {
    console.error("Login Error:", error);
    return responseHandler(res, false, "Something went wrong", null, 500);
  }
};

const getProfile = async (req, res) => {
  try {
    console.log(req.user.id);
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return responseHandler(res, false, "User not found", null, 404);
    }

    return responseHandler(res, true, "User profile fetched", user, 200);
  } catch (error) {
    console.error("Get Profile Error:", error);
    return responseHandler(res, false, "Something went wrong", null, 500);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return responseHandler(
        res,
        false,
        "Name, email, and password are required",
        null,
        400
      );
    }

    // Find user by ID
    const user = await User.findById(req.user.id);
    if (!user) {
      return responseHandler(res, false, "User not found", null, 404);
    }

    // Compare input password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return responseHandler(res, false, "Incorrect password", null, 401);
    }

    // ✅ Use findByIdAndUpdate instead of save()
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true } // returns the updated document
    );

    return responseHandler(
      res,
      true,
      "Profile updated successfully",
      {
        name: updatedUser.name,
        email: updatedUser.email,
      },
      200
    );
  } catch (error) {
    console.error("Update Error:", error);
    return responseHandler(res, false, "Something went wrong", null, 500);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
};
