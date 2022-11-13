import express from "express";
import "dotenv/config";
import cors from "cors";
import productRouter from "./routers/productsRouter.js";

const server = express();
server.use(express.json());
const allowedOrigins = [`http://localhost:${process.env.PORT}`];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

server.use(cors(options));
server.use(express.json());
server.use(productRouter);


server.listen(process.env.PORT, () => {
  console.log(`Magic happens on ${process.env.PORT}`);
});
