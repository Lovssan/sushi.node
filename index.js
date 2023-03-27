import express, { request, response } from "express";
import path from "path";
import serverRoutes from "./rourers/server.js";
import http from "http";
import { Server } from "socket.io";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(serverRoutes);

app.use(express.static(path.resolve(__dirname, "user")));

app.get("/admin", (request, response) => {
  response.sendFile(path.resolve(__dirname, "user", "admin", "admin.html"));
});
app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "user", "index.html"));
});
app.get("/Akcii", (request, response) => {
  response.sendFile(path.resolve(__dirname, "user", "pages", "Akcii.html"));
});
app.get("/contacts", (request, response) => {
  response.sendFile(path.resolve(__dirname, "user", "pages", "contacts.html"));
});
app.get("/dostavka", (request, response) => {
  response.sendFile(path.resolve(__dirname, "user", "pages", "dostavka.html"));
});
app.get("/korzina", (request, response) => {
  response.sendFile(path.resolve(__dirname, "user", "pages", "korzina.html"));
});
io.on("connection", (socket) => [
  socket.on("chat message", (data) => {
    io.emit("chat message", data);
  }),
]);

server.listen(PORT, () => {
  response.render;
});
