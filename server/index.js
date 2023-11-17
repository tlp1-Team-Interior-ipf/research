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
import { passengerRouter } from "./src/routes/passenger.routes.js";
import { driverRouter } from "./src/routes/driver.routes.js";
import { enterpriseRouter } from "./src/routes/enterprise.routes.js";
import { handleErrors } from "./src/middlewares/handleError.js";
import { createLogs } from "./src/helpers/createLogs.js";
import './src/models/driver_enterprise.js';

import fileDirName  from "./src/utils/fileDirName.js";
const { __dirname } = fileDirName(import.meta);


const app = express();
const httpServer = createServer(app);
const io = new SocketServer(httpServer);

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

app.use(express.urlencoded({ extended: false }));



//Routes are established

app.use('/passenger', passengerRouter)
app.use('/driver', driverRouter)
app.use('/enterprise', enterpriseRouter)

 // Error handling
 app.use(handleErrors);

// Starting the server
httpServer.listen(environments.PORT, async () => {
    console.log(`server on port http://localhost:${environments.PORT}`)
    connectToDatabase()
});