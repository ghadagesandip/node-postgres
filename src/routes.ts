import * as express from "express";

import { OrderApi } from "./modules/orders/orders.controller";

export function registerRoutes(app: express.Application): void {
  new OrderApi().register(app);
}
