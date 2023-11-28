// Imports de las dependencias
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import { environments } from './src/config/environment.js';
import { connectToDatabase } from './src/config/db.js';
import { passengerRouter } from './src/routes/passenger.routes.js';
import { driverRouter } from './src/routes/driver.routes.js';
import { enterpriseRouter } from './src/routes/enterprise.routes.js';
import { travelRouter } from './src/routes/travel.routes.js';
import { handleErrors } from './src/middlewares/handleError.js';
import { createLogs } from './src/helpers/createLogs.js';
import fileDirName from './src/utils/fileDirName.js';

const { __dirname } = fileDirName(import.meta);

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new SocketServer(httpServer, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  },
});

// Middleware para configurar CORS
app.use(cors());

// Resto de tu configuración y rutas
app.use(helmet({ contentSecurityPolicy: false }));
app.use(
  morgan('combined', {
    stream: {
      write: (message) => {
        createLogs(message, __dirname, 'logs');
      },
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Establece las rutas
app.use('/passenger', passengerRouter);
app.use('/enterprise', enterpriseRouter);
app.use('/travel', travelRouter);
app.use('/driver', driverRouter);

// Manejo de errores
app.use(handleErrors);

// Inicia el servidor
httpServer.listen(environments.PORT, async () => {
  console.log(`server on port http://localhost:${environments.PORT}`);
  connectToDatabase();
});