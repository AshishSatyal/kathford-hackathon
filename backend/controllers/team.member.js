// controllers/userController.js
const User = require("../models/member.model.js");
const Member = require("../models/member.model.js");

// Function to handle user registration
exports.registerMembers = async (req, res) => {
  try {
    const users = req.body.users;
    if (!Array.isArray(users)) {
      return res.status(400).send({ message: "Users should be an array" });
    }
    const newUsers = await User.insertMany(users);
    res.status(201).json({
      success: true,
      message: "Users registered successfully",
      data: newUsers,
    });
  } catch (error) {
    console.log("Error registering users", error);
    res.status(500).send({ message: "Error registering users", error });
  }
};

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json({
      success: true,
      message: "Members retrieved successfully",
      data: members,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving members", error });
  }
};
