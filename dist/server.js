import express from "express";
import "dotenv/config";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productsRouter.js";
var server = express();
server.use(express.json());
var allowedOrigins = ["http://localhost:".concat(process.env.PORT)];
var options = {
    origin: allowedOrigins
};
server.use(cors(options));
server.use(express.json());
server.use(userRouter);
server.use(productRouter);
server.listen(process.env.PORT, function () {
    console.log("Magic happens on ".concat(process.env.PORT));
});
