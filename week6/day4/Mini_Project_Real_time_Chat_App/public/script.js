const socket = io();

const joinBox = document.getElementById("joinBox");
const joinBtn = document.getElementById("joinBtn");
const usernameInput = document.getElementById("usernameInput");
const roomInput = document.getElementById("roomInput");
const roomInfo = document.getElementById("roomInfo");
const roomName = document.getElementById("roomName");
const usersList = document.getElementById("usersList");
const messagesEl = document.getElementById("messages");
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const leaveBtn = document.getElementById("leaveBtn");

let currentRoom = null;
let currentUsername = null;

function addMessage(msg, self = false) {
  const li = document.createElement("li");
  li.className = self ? "message-self" : "message-other";
  li.innerHTML = msg.system
    ? `<em>${msg.text}</em>`
    : `<strong>${msg.username}:</strong> ${msg.text}`;
  messagesEl.appendChild(li);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

joinBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const room = roomInput.value.trim();

  if (!username || !room) {
    alert("Please enter both username and room name");
    return;
  }

  currentRoom = room;
  currentUsername = username;

  socket.emit("joinRoom", { room, username });

  joinBox.classList.add("hidden");
  roomInfo.classList.remove("hidden");
  messageForm.classList.remove("hidden");
  roomName.textContent = `Room: ${room}`;
  messagesEl.innerHTML = "";
});

leaveBtn.addEventListener("click", () => {
  socket.emit("leaveRoom");
  currentRoom = null;
  currentUsername = null;
  joinBox.classList.remove("hidden");
  roomInfo.classList.add("hidden");
  messageForm.classList.add("hidden");
  usersList.innerHTML = "";
  messagesEl.innerHTML = "";
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = messageInput.value.trim();
  if (!text) return;
  socket.emit("sendMessage", { text });
  addMessage({ username: currentUsername, text }, true);
  messageInput.value = "";
});

socket.on("message", (msg) => addMessage(msg, false));

socket.on("history", (history) => {
  history.forEach((m) => addMessage(m, m.username === currentUsername));
});

socket.on("roomData", ({ users }) => {
  usersList.innerHTML = "";
  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = u.username;
    usersList.appendChild(li);
  });
});
