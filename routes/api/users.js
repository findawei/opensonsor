const express = require("express");
const router = express.Router();
// User Model
const User = require("../../models/User");

// /**
//  * @route   GET api/users
//  * @desc    Get all users
//  * @access  Public
//  */

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No users exist");
    res.json(users);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const newUser = new User({
    name: req.body.name,
    sport: req.body.sport,
    gender: req.body.gender,
    dob: req.body.dob,
    about: req.body.about,
    location: req.body.location,
    team: req.body.team,
    interests: req.body.interests,
    profileImage: req.body.profileImage,
  });

  // const newUser = new User(req.body);
  // console.log(newUser);
  try {
    const user = await newUser.save();
    if (!user) throw Error("Something went wrong saving the item");

    res.status(200).json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// router.put("/:id", async (req, res) => {
//   try {
//     const users = await User.find();
//     if (!users) throw Error("No users exist");
//     res.json(users);
//   } catch (e) {
//     res.status(400).json({ msg: e.message });
//   }
// });

module.exports = router;
