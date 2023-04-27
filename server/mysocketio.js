export const initChatRoomEvents = (io, socket) => {
  socket.on('client-send-message', (message) => {
    console.log(message);
    io.emit('server-send-message', message);
  })
}

module.exports = {
  initChatRoomEvents,
};