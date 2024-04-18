import { Router } from "express";
import { driverRouter } from "./driver.routes.js";
import { passengerRouter } from "./passenger.routes.js";
import { enterpriseRouter } from "./enterprise.routes.js";
import { travelRouter } from "./travel.routes.js";

const routes = Router();

routes.use('/driver', driverRouter);
routes.use('/passenger', passengerRouter);
routes.use('/enterprise', enterpriseRouter);
routes.use('/travel', travelRouter);

export { routes };