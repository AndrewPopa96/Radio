const express = require("express");
const {
  createVideo,
  retrieveAll,
  deleteVideo,
  findByTitle,
} = require("../controllers/videoControllers");

const router = express.Router();

router.route("/").post(createVideo);
router.route("/find").get(findByTitle);
router.route("/retrieve").get(retrieveAll);
router.route("/delete").delete(deleteVideo);

module.exports = router;
