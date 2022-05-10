const mongoose = require("mongoose");

const videoSchema = mongoose.Schema(
  {
    link: String,
    title: String,
  },
  {
    timestamp: true,
  }
);

const Videos = mongoose.model("video", videoSchema);

module.exports = Videos;
