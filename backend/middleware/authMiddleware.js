const jwt = require("jsonwebtoken");
const responseHandler = require("../utils/responseHandler");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token exists and starts with "Bearer"
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Attach decoded user info to request
      return next();
    } catch (err) {
      return responseHandler(res, false, "Invalid or expired token", null, 401);
    }
  } else {
    return responseHandler(res, false, "No token provided", null, 401);
  }
};

module.exports = authMiddleware;
