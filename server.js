import express from "express";
import { ping } from "./src/api/controller/ping";

const app = express();

app.get("/ping", ping);
app.listen(3001);

