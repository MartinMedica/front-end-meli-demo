const express = require("express");
const routes = require('./routes');
var cors = require("cors");

const app = express();

app.use(cors());
app.use("/api/items", routes.items);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("running server on port:", port);
  console.log("-------------------------");
});
