const express = require("express");
const { createHero, getHero } = require("../controllers/heroController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { updateHero } = require("../controllers/heroController");
const router = express.Router();

const heroFolder = path.join(__dirname, "../assets/hero");
if (!fs.existsSync(heroFolder)) {
  fs.mkdirSync(heroFolder, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, heroFolder);
  },
  filename: function (req, file, cb) {
    let customName = "";

    if (file.fieldname === "background") {
      customName = "background" + path.extname(file.originalname);
    } else if (file.fieldname === "profile1") {
      customName = "profile1" + path.extname(file.originalname);
    } else if (file.fieldname === "profile2") {
      customName = "profile2" + path.extname(file.originalname);
    } else {
      customName = Date.now() + "-" + file.originalname;
    }

    cb(null, customName);
  },
});

const upload = multer({ storage });

router.get("/", getHero);

router.post(
  "/",
  authMiddleware,
  upload.fields([
    { name: "background", maxCount: 1 },
    { name: "profile1", maxCount: 1 },
    { name: "profile2", maxCount: 1 },
  ]),
  createHero
);

router.put(
  "/update/:id",
  upload.fields([
    { name: "background", maxCount: 1 },
    { name: "profile1", maxCount: 1 },
    { name: "profile2", maxCount: 1 },
  ]),
  authMiddleware,
  updateHero
);

module.exports = router;
