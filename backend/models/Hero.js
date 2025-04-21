const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    positions: { type: String, required: false },
    content: { type: String, required: true },
    background: { type: String, required: true },
    profile1: { type: String, required: true },
    profile2: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hero", heroSchema);
