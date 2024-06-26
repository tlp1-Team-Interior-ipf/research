// Imports the dependencies
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
import { routes } from './src/routes/routes.js'
import { handleErrors } from "./src/middlewares/handleError.js";
import { createLogs } from "./src/helpers/createLogs.js";

import fileDirName  from "./src/utils/fileDirName.js";
const { __dirname } = fileDirName(import.meta);


const app = express();
const httpServer = createServer(app);
export const io = new SocketServer(httpServer, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  },
});

// Manejo de conexiones de Socket.IO
io.on('connection', (socket) => {
  console.log('New socket connection:', socket.id);
  // Lógica para manejar conexiones de pasajeros
  socket.on('pasajero-conectado', (data) => {
    // Manejar la conexión del pasajero
    // Emitir eventos o realizar acciones según sea necesario
  });

  // Lógica para manejar conexiones de choferes
  socket.on('chofer-conectado', (data) => {
    // Manejar la conexión del chofer
    // Emitir eventos o realizar acciones según sea necesario
  });

});

//Middleware necessary
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
app.use(express.json())
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.urlencoded({ extended: false }));



//Routes are established

app.use(routes);

 // Error handling
 app.use(handleErrors);

// Starting the server
httpServer.listen(environments.PORT, async () => {
    console.log(`server on port http://localhost:${environments.PORT}`)
    connectToDatabase()
});