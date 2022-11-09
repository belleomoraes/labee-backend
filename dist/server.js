import express from "express";
var server = express();
server.use(express.json());
server.listen(process.env.PORT, function () {
    console.log("Magic happens on ".concat(process.env.PORT));
});
