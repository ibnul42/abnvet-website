const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const heroRoutes = require("./routes/heroRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // or your frontend origin
    credentials: true, // ✅ very important to allow cookies
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/hero", heroRoutes);
app.use("/assets", express.static(path.join(__dirname, "assets")));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
