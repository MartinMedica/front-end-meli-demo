const express = require("express");
const path = require("path");
const proxy = require("express-http-proxy");
const app = express();

app.use(express.static(path.resolve(__dirname, "dist")));
app.use("/images", express.static(path.resolve(__dirname, "src", "images")));

app.get('/api/items', async function(req,res) {
  let search = req.query.search;
  console.log(search)
  res.send({ok:"ok"})
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname,"dist","index.html"));
});

// app.use(proxy("localhost:3000"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("running server on port:", port);
  console.log("-------------------------");
});
