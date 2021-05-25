const { response } = require("express");
var express = require("express");
const fetch = require("node-fetch");

var router = express.Router();

let getCategories = async function (category_id) {
  const categoriesData = await fetch(
    `https://api.mercadolibre.com/categories/${category_id}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const categories =
    categoriesData && categoriesData.path_from_root
      ? categoriesData.path_from_root.map((x) => x.name)
      : [];

  return categories;
};

router.get("/:id", async function (req, res) {
  const itemId = req.params.id;
  let [itemRes, descRes] = await Promise.allSettled([
    fetch(`https://api.mercadolibre.com/items/${itemId}`).then((res) =>
      res.json()
    ),
    fetch(`https://api.mercadolibre.com/items/${itemId}/description`).then(
      (res) => res.json()
    ),
  ]).then((res) => [res[0], res[1]]);

  let itemData, descData;
  if (itemRes.status == "fulfilled") {
    itemData = itemRes.value;
    if (descRes.status == "fulfilled") {
      descData = descRes.value;
    }
  } else {
    res
      .status(500)
      .send({ error: true, errorMessage: `Could not find any item with id: ${itemId}` });
    return;
  }

  const categories = await getCategories(itemData.category_id);

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
      free_shipping: itemData.shipping && itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: descData && descData.plain_text,
    },
  };
  res.json({data: item, error: false});
});

router.get("*", async function (req, res) {
  let search = req.query.search;

  const itemsData = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
  )
    .then((res) => res.json())
    .catch((err) => {
      res.status(500).send({ error: true, errorMessage: err.message });
    });

  if (!itemsData) {
    return;
  }
  if (!itemsData.results || itemsData.results.length ==  0 ) {
    res.status(500).send({ error: true, errorMessage:`Could not find any items.` });
    return;
  }
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

  const categories = await getCategories(categoryId);

  const response = {
    autor: {
      name: "martin",
      lastname: "medica",
    },
    categories: categories,
    items: items,
  };
  res.json({data: response, error: false});
});

module.exports = router;
