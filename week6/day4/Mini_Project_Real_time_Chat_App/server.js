const path = require("path");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// In-memory store
const rooms = {};

// Join room helper
function joinRoom(room, socket, username) {
  socket.join(room);
  if (!rooms[room]) {
    rooms[room] = { users: {}, messages: [] };
  }
  rooms[room].users[socket.id] = { username };

  io.to(room).emit("roomData", {
    room,
    users: Object.values(rooms[room].users),
  });
}

// Leave room helper
function leaveRoom(room, socket) {
  if (!rooms[room]) return;
  delete rooms[room].users[socket.id];
  socket.leave(room);
  io.to(room).emit("roomData", {
    room,
    users: Object.values(rooms[room].users),
  });
  if (Object.keys(rooms[room].users).length === 0) delete rooms[room];
}

// Socket events
io.on("connection", (socket) => {
  console.log("New user connected:", socket.id);

  socket.on("joinRoom", ({ room, username }) => {
    socket.data.room = room;
    socket.data.username = username;

    joinRoom(room, socket, username);

    const history = rooms[room]?.messages || [];
    socket.emit("history", history);

    const joinMsg = {
      system: true,
      text: `${username} joined the room`,
      timestamp: Date.now(),
    };
    rooms[room].messages.push(joinMsg);
    socket.to(room).emit("message", joinMsg);
  });

  socket.on("sendMessage", (payload) => {
    const { room } = socket.data;
    if (!room) return;

    const message = {
      username: socket.data.username,
      text: payload.text,
      timestamp: Date.now(),
    };

    rooms[room].messages.push(message);
    io.to(room).emit("message", message);
  });

  socket.on("leaveRoom", () => {
    const { room } = socket.data;
    if (room) leaveRoom(room, socket);
  });

  socket.on("disconnect", () => {
    const { room } = socket.data;
    if (room) leaveRoom(room, socket);
    console.log("User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
