import { app } from "./app";
import http from "http";
import { connectDb } from "./db/config";
const port = process.env.PORT;

const server = http.createServer(app);

const start = async () => {
  try {
    let retry = 5;
    while (retry) {
      try {
        await connectDb();
        break;
      } catch (err) {
        console.log("error db connnecting", err);
        retry -= 1;
        console.log("retry left", retry);
        await new Promise((res) => setTimeout(res, 5000));
      }
    }
    server.listen(port, () => {
      console.info(`app is up and running on ${port} again`);
    });
  } catch (err) {
    console.log("connection error");
  }
};
start();
