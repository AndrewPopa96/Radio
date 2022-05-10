const asyncHandler = require("express-async-handler");
const Video = require("../models/videoModel");
const ytdl = require("ytdl-core");

// Create and Save a new Tutorial
const createVideo = asyncHandler(async (req, res) => {
  const { link } = req.body;

  const linkExists = await Video.findOne({ link });

  if (linkExists) {
    res.status(400);
    throw new Error("Video Already Exists");
  }

  var title = "";

  await ytdl.getInfo(`https://www.youtube.com/watch?v=${link}`).then((info) => {
    title = info.player_response.videoDetails.title;
  });

  const video = await Video.create({
    link,
    title,
  });

  if (video) {
    res.status(201).json({
      _id: video._id,
      link: video.link,
      title: video.title,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }

  res.json({
    link,
    title,
  });
});

const findByTitle = (req, res) => {
  const { title } = req.body;

  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};
  Video.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving videos.",
      });
    });
};

const deleteVideo = (req, res) => {
  const { _id } = req.body;

  Video.findByIdAndRemove(_id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Video with id=${_id}`,
        });
      } else {
        res.send({
          message: "Video was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Video",
      });
    });
};

const retrieveAll = (req, res) => {
  Video.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// module.exports = {
//   findByTitle: function (req, res) {
//     const title = req.query.title;
//     var condition = title
//       ? { title: { $regex: new RegExp(title), $options: "i" } }
//       : {};
//     Video.find(condition)
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving videos.",
//         });
//       });
//   },
//   deleteVideo: function (req, res) {
//     const id = req.params.id;
//     Video.findByIdAndRemove(id)
//       .then((data) => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot delete Video with id=${id}`,
//           });
//         } else {
//           res.send({
//             message: "Video was deleted successfully!",
//           });
//         }
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message: "Could not delete Video",
//         });
//       });
//   },
//   retrieveAll: function (req, res) {
//     Tutorial.find({ _id })
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials.",
//         });
//       });
//   },
// };

module.exports = { createVideo, findByTitle, deleteVideo, retrieveAll };
