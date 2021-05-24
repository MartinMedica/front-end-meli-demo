var express = require("express");
const fetch = require("node-fetch");

var router = express.Router();

router.get("/:id", async function (req, res) {
  const itemResponse = await fetch(
    `https://api.mercadolibre.com/items/${req.params.id}`
  );
  const itemData = await itemResponse.json();

  const descResponse = await fetch(
    `https://api.mercadolibre.com/items/${req.params.id}/description`
  );
  const descData = await descResponse.json();

  const categoriesResponse = await fetch(
    `https://api.mercadolibre.com/categories/${itemData.category_id}`
  );
  const categoriesData = await categoriesResponse.json();
  const categories = categoriesData.path_from_root.map((x) => x.name);

  item = {
    autor: {
      name: "martin",
      lastname: "medica",
    },
    categories: categories,
    item: {
      id: itemData.id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        amount: itemData.price,
        decimals: itemData.price - Math.floor(itemData.price),
      },
      picture: itemData.thumbnail,
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: descData.plain_text,
    },
  };
  res.json(item);
});

router.get("*", async function (req, res) {
  let search = req.query.search;

  const itemsResponse = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
  );
  const itemsData = await itemsResponse.json();

  const items = [];
  var categoriesCount = {};

  for (
    let i = 0;
    i < (itemsData.results.length > 4 ? 4 : itemsData.results.length);
    i++
  ) {
    let item = itemsData.results[i];
    if (typeof categoriesCount[item.category_id] == "undefined") {
      categoriesCount[item.category_id] = 1;
    } else {
      categoriesCount[item.category_id] += 1;
    }
    items.unshift({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: item.price - Math.floor(item.price),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      address: item.address,
    });
  }

  let max = 0;
  let categoryId;
  for (const [key, value] of Object.entries(categoriesCount)) {
    if (value > max) {
      max = value;
      categoryId = key;
    }
  }

  const categoriesResponse = await fetch(
    `https://api.mercadolibre.com/categories/${categoryId}`
  );
  const categoriesData = await categoriesResponse.json();
  const categories = categoriesData.path_from_root.map((x) => x.name);
  const response = {
    autor: {
      name: "martin",
      lastname: "medica",
    },
    categories: categories,
    items: items,
  };
  res.json(response);
});

module.exports = router;
