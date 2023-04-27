const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "Please add a message"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
  },
  timestamp: {
    type: Date,
  },
  
});

module.exports = mongoose.model("Message", MessageSchema);