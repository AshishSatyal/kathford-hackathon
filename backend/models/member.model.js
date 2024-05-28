const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the member schema
const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Create the Member model
const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
