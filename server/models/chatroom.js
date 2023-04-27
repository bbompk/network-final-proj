const mongoose = require("mongoose");

const ChatroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        unique: true,
    },
    users: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
    },
    messages: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Message',
    },
});

module.exports = mongoose.model("Chatroom", ChatroomSchema);