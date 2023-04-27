const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Please add a username"],
    unique: true,
  },
  nickname: {
    type: String,
    trim: true,
    required: [true, "Please add a nickname"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength : 6
  },
  friends: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
  },
});

module.exports = mongoose.model("User", UserSchema);