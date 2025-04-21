const Hero = require("../models/Hero");
const responseHandler = require("../utils/responseHandler");
const path = require("path");
const fs = require("fs");

const createHero = async (req, res) => {
  try {
    const { title, positions, content } = req.body;

    if (!title || !content || !req.files) {
      return responseHandler(res, false, "All fields are required", null, 400);
    }

    const background = req.files["background"]?.[0];
    const profile1 = req.files["profile1"]?.[0];
    const profile2 = req.files["profile2"]?.[0];

    if (!background || !profile1 || !profile2) {
      return responseHandler(
        res,
        false,
        "1 background and 2 profile photos are required",
        null,
        400
      );
    }

    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const newHero = await Hero.create({
      title,
      positions,
      content,
      background: `${baseUrl}/assets/hero/${background.filename}`,
      profile1: `${baseUrl}/assets/hero/${profile1.filename}`,
      profile2: `${baseUrl}/assets/hero/${profile2.filename}`,
    });

    return responseHandler(res, true, "Hero section created", null, 201);
  } catch (error) {
    console.error("Create Hero Error:", error);
    return responseHandler(res, false, "Something went wrong", null, 500);
  }
};

const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne().sort({ createdAt: -1 });
    if (!hero) {
      return responseHandler(res, false, "No hero section found", null, 404);
    }

    return responseHandler(res, true, "Hero section fetched", hero, 200);
  } catch (error) {
    console.error("Get Hero Error:", error);
    return responseHandler(res, false, "Something went wrong", null, 500);
  }
};

const updateHero = async (req, res) => {
  try {
    const { title, positions, content } = req.body;
    const heroId = req.params.id;

    const hero = await Hero.findById(heroId);
    if (!hero) {
      return responseHandler(res, false, "Hero section not found", null, 404);
    }

    const background = req.files?.["background"]?.[0];
    const profile1 = req.files?.["profile1"]?.[0];
    const profile2 = req.files?.["profile2"]?.[0];

    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const deleteFile = (fileUrl) => {
      const filePath = path.join(__dirname, "..", fileUrl.replace(baseUrl, ""));
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    };

    const updatedFields = {};

    if (background) {
      //   deleteFile(hero.background);
      updatedFields.background = `${baseUrl}/assets/hero/${background.filename}`;
    }

    if (profile1) {
      //   deleteFile(hero.profile1);
      updatedFields.profile1 = `${baseUrl}/assets/hero/${profile1.filename}`;
    }

    if (profile2) {
      //   deleteFile(hero.profile2);
      updatedFields.profile2 = `${baseUrl}/assets/hero/${profile2.filename}`;
    }

    if (title) updatedFields.title = title;
    if (content) updatedFields.content = content;
    if (positions) updatedFields.positions = positions;

    await Hero.findByIdAndUpdate(heroId, updatedFields);

    return responseHandler(res, true, "Hero section updated", null, 200);
  } catch (error) {
    console.error("Update Hero Error:", error);
    return responseHandler(res, false, "Something went wrong", null, 500);
  }
};

module.exports = {
  createHero,
  getHero,
  updateHero,
};
