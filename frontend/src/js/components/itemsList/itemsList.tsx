import * as React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemsListItem } from "./ItemsListItem";

export const ItemsList: React.FC = (): React.ReactElement => {
  const { search } = useLocation();
  //   could use query-string node-package to support ie
  const searchParams = new URLSearchParams(search);
  const s = searchParams.get("search");

  const [items, setItems] = useState<any[]>([]);
  const item = JSON.parse(
    `{
        "id": "MLA772921213",
        "site_id": "MLA",
        "title": "Mesa Mesita De Luz Vintage Retro Nordica Pino Con Cajones",
        "seller": {},
        "price": 2327.5,
        "prices": {},
        "sale_price": null,
        "currency_id": "ARS",
        "available_quantity": 500,
        "sold_quantity": 500,
        "buying_mode": "buy_it_now",
        "listing_type_id": "gold_special",
        "stop_time": "2039-02-21T04:00:00.000Z",
        "condition": "new",
        "permalink": "https://articulo.mercadolibre.com.ar/MLA-772921213-mesa-mesita-de-luz-vintage-retro-nordica-pino-con-cajones-_JM",
        "thumbnail": "http://http2.mlstatic.com/D_606843-MLA44938086335_022021-O.jpg",
        "thumbnail_id": "606843-MLA44938086335_022021",
        "accepts_mercadopago": true,
        "installments": {},
        "address": {
          "state_id": "AR-C",
          "state_name": "Capital Federal",
          "city_id": "TUxBQlZJTDc4MDda",
          "city_name": "Villa del Parque"
        },
        "shipping": {},
        "seller_address": {},
        "attributes": [],
        "original_price": 2450,
        "category_id": "MLA370415",
        "official_store_id": null,
        "domain_id": "MLA-NIGHTSTANDS",
        "catalog_product_id": null,
        "tags": [],
        "order_backend": 1,
        "use_thumbnail_id": false
      }`
  );

  useEffect(() => {
    const fetchItems = async () => {
      console.log(s);
      setItems([item, item, item, item]);
    };
    fetchItems();
  }, []);
  return (
    <div className="items-list">
      {items.map((item) => {
        return (
            <ItemsListItem key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              price={item.price}
              title={item.title}
              state_name={item.address.state_name}
              shipping={true}
            ></ItemsListItem>
        );
      })}
    </div>
  );
};
