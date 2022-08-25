import express, { Request, Response } from "express";
import { json } from "body-parser";
import { registerRoutes } from "./routes";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(json());

registerRoutes(app);

app.get("/", (req: Request, resp: Response) => {
  resp.send({ message: "welcome" });
});

export { app };
