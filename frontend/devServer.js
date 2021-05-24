const express = require("express");
const path = require("path");
const proxy = require("express-http-proxy");
const app = express();
require('dotenv').config({ path: path.join(__dirname, ".env") })

app.use(express.static(path.resolve(__dirname, "dist")));
app.use("/images", express.static(path.resolve(__dirname, "src", "images")));

app.get("/*", (req,res) =>{
  res.sendFile(path.join(__dirname,"dist","index.html"));
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("running server on port:", port);
  console.log("-------------------------");
});
