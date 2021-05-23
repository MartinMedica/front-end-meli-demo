const express = require("express");
const path = require("path");
const proxy = require("express-http-proxy");
const app = express();
require('dotenv').config({ path: path.join(__dirname, ".env") })

app.use(express.static(path.resolve(__dirname, "dist")));
app.use("/images", express.static(path.resolve(__dirname, "src", "images")));

app.get('/api/items/:id', async function(req,res) {
  
  item = {
    autor:{
      name: "martin",
      lastname: "medica"
    },
    categories: [
      "Electronica, Audio y Video",
      "iPod",
      "Reproductores",
      "iPod touch",
      "32 GB",
    ],
    item: {
        id: "MLA772921213",
        title: "Mesa Mesita De Luz Vintage Retro Nordica Pino Con Cajones",
        price: {
            currency: "ARS",
            amount: 2327,
            decimals: 5
        },
        picture: "http://http2.mlstatic.com/D_606843-MLA44938086335_022021-O.jpg",
        condition: "new",
        free_shipping: false,
        sold_quantity: 123,
        description: `El breadcrumb que se muestra en el listado de búsqueda debe armarse basado en la categoría que más
        resultados obtuvo (dicha información está disponible en la API de Search). (Obviamente, el breadcrumb de la
        página de detalle del ítem debe armarse con la categoría propia del ítem).
        ● Podés usar en el listado de search la imagen que devuelve la API (90x90) aunque esta se vea pixelada al
        estirarla para ajustarse al diseño del test. (A fines del test, no hace falta que busques la imagen en el tamaño
        exacto)`
      }
  }
  res.send(item);
});

app.get('/api/items', async function(req,res) {
  let search = req.query.search;
  console.log(search)
  const items = {
    autor:{
      name: "martin",
      lastname: "medica"
    },
    categories: [
      "Electronica, Audio y Video",
      "iPod",
      "Reproductores",
      "iPod touch",
      "32 GB",
    ],
    items: [
      {
        id: "MLA772921213",
        title: "Mesa Mesita De Luz Vintage Retro Nordica Pino Con Cajones",
        price: {
            currency: "ARS",
            amount: 2327,
            decimals: 5
        },
        picture: "http://http2.mlstatic.com/D_606843-MLA44938086335_022021-O.jpg",
        condition: "new",
        free_shipping: false,
        address: {
          state_id: "AR-C",
          state_name: "Capital Federal",
          city_id: "TUxBQlZJTDc4MDda",
          city_name: "Villa del Parque"
        }
      }
    ]
  }
  res.send(items)
});


app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname,"dist","index.html"));
});

app.use(proxy(process.env.API_URL));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("running server on port:", port);
  console.log("-------------------------");
});
