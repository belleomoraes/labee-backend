import express from "express";



const server = express();

server.use(express.json());

server.listen(process.env.PORT, () => {
  console.log(`Magic happens on 4000`);
});
