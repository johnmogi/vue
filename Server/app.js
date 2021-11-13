const express = require("express");
const cors = require("cors");
const itemsController = require("./controllers/items-controller");
const catsController = require("./controllers/category-controller");
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api/items", itemsController);
server.use("/api/cats", catsController);

server.listen(4000, () => console.log("Listening on http://localhost:4000"));
