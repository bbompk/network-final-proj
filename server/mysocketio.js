const { newUserConnect, getUser, getAllUsers, userDisconnect } = require('./db/user');
const { addChatRoom, removeChatRoom, userJoinChatRoom, userLeaveChatRoom, getChatRooms } = require('./db/chatroom');

const initChatRoomEvents = (io, socket) => {
  socket.on('client-send-message', (message, room) => {
    console.log(message);
    io.to(room).emit('server-send-message', message);
  })

  socket.on('client-create-room', (roomName) => {
    let newRoom = addChatRoom(roomName);
    socket.join(roomName);
    socket.roomName = roomName;
    if(newRoom) io.emit('server-room-created', getChatRooms());
    else socket.emit('server-room-duplicate', getChatRooms());
  })

  socket.on('client-join-room', (roomName) => {
    socket.join(roomName);
    userJoinChatRoom(roomName, socket.id);
    socket.roomName = roomName;
    socket.emit('server-room-joined', roomName);
    socket.broadcast.to(roomName).emit('server-user-joined-room', getChatRooms());
  })

  socket.on('client-leave-room', (roomName) => {
    socket.leave(roomName);
    userLeaveChatRoom(roomName, socket.id);
    socket.roomName = undefined
    socket.emit('server-room-left', roomName);
    socket.broadcast.to(roomName).emit('server-user-left-room', getChatRooms());
  })
}

const initUserEvents = (io, socket) => {
  socket.on('client-set-user', (user) => {
    newUserConnect(socket.id, user.name, user.avatar);
    io.emit('server-new-user', getAllUsers());
  })
}


module.exports = {
  initChatRoomEvents,
  initUserEvents,
};