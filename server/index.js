// Importaciones
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import http from "http";

import { Server as SocketServer } from "socket.io";

import { environment } from "./config/environment.js";
import { connectToDatabase } from "./config/db.js";
import { handleErrors } from "./middlewares/handleError.js";
import { createLogs } from "./helpers/createdLogs.js";
import "./models/driver_enterprise.js";

dotenv.config();

//Routes
import { passengerRouter } from "./routers/passenger.routes.js";
import { driverRouter } from "./routers/driver.routes.js";
import { enterpriseRouter } from "./routers/enterprise.routes.js";
import { travelRouter } from "./routers/travel.routes.js";

import getFileDirName from "./utils/fileDirName.js";
const { __dirname } = getFileDirName(import.meta);

const app = express();

const server = http.createServer(app);
const io = new SocketServer(server);

//Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(
  morgan("combined", {
    stream: {
      write: (message) => {
        createLogs(message, __dirname, "logs");
      },
    },
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//Routes are established

app.use('/passenger', passengerRouter);
app.use('/driver', driverRouter);
app.use('/enterprise', enterpriseRouter);
app.use('/travel', travelRouter);

 // Error handling
 app.use(handleErrors);

io.on("connection", (socket) => {
  console.log("Client connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected: ", socket.id);
  });

  socket.on("message", (body) => {
    console.log(body);

    socket.broadcast.emit("message", { body, from: socket.id });
  });
});

server.listen(environment.DB.PORT, () => {
  console.log("Server on port", environment.DB.PORT);
  connectToDatabase();
});
