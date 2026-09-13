import { Server } from "socket.io";
import http from "http";

import app from "./app";
import { config } from "./config/config";
import connectDB from "./config/db";
import "./config/redis";
import { registerSocketHandlers } from "./socket/sockethandlers";

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: config.frontendUrl,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("✅ User connected: ", socket.id);

  registerSocketHandlers(socket, io);

  socket.on("disconnect", (reason) => {
    console.log("❌ User disconnected: ", socket.id, "Reason", reason);
  });
});

const startServer = async () => {
  await connectDB();

  const port = config.port;

  if (!process.env.VERCEL) {
    httpServer.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
};

startServer();

export default httpServer;
