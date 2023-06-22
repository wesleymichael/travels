import express, { json } from "express";
import cors from 'cors';
import router from "./routers/index.router.js";
//import httpStatus from "http-status";

const app = express();
app.use(cors());
app.use(json());
app.use(router)

//app.get("/health", (req, res) => res.sendStatus(httpStatus.OK));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})