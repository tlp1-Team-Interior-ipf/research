// Imports de dependencias
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { Server as SocketServer } from 'socket.io';
import { createServer } from 'http';

dotenv.config();

import { environments } from "./src/config/environment.js";
import { connectToDatabase } from "./src/config/db.js";
import { passengerRouter } from "./src/routes/passenger.routes.js";
import { driverRouter } from "./src/routes/driver.routes.js";
import { enterpriseRouter } from "./src/routes/enterprise.routes.js";
import { travelRouter } from "./src/routes/travel.routes.js";
import { handleErrors } from "./src/middlewares/handleError.js";
import { createLogs } from "./src/helpers/createLogs.js";

import fileDirName  from "./src/utils/fileDirName.js";
const { __dirname } = fileDirName(import.meta);

const app = express();
const httpServer = createServer(app);
const io = new SocketServer(httpServer);

// Middleware necesario
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(morgan('combined', {
  stream: {
    write: (message) => {
      createLogs(message, __dirname, 'logs');
    },
  },
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas establecidas
app.use('/passenger', passengerRouter);
app.use('/driver', driverRouter);
app.use('/enterprise', enterpriseRouter);
app.use('/travel', travelRouter);

// Gestionar la conexión de un usuario
io.on('connection', (socket) => {
  console.log('Usuario conectado');
  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  socket.on('chat message', (data) => {
    io.emit('chat message', data);
  });
  
  socket.on('typing', (username) => {
    io.emit('user typing', username);
  });

  socket.on('stopped typing', (username) => {
    io.emit('user stopped typing', username);
  });
});

// Manejar errores
app.use(handleErrors);

// Iniciar el servidor
httpServer.listen(environments.PORT, async () => {
  console.log(`Servidor en el puerto http://localhost:${environments.PORT}`);
  connectToDatabase();
});
