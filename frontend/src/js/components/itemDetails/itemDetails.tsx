import * as React from "react";
import { useState, useEffect } from "react";

export const ItemDetails: React.FC = (): React.ReactElement => {
  const [item, setItem] = useState<{thumbnail?: string, title?: string, price?: number}>({});

  useEffect(() => {
    const fetchItem = async () => {
      setItem(
        JSON.parse(
          `{
            "id": "MLA772921213",
            "site_id": "MLA",
            "title": "Mesa Mesita De Luz Vintage Retro Nordica Pino Con Cajones",
            "subtitle": null,
            "seller_id": 193972813,
            "category_id": "MLA370415",
            "official_store_id": null,
            "price": 2327.5,
            "base_price": 2327.5,
            "original_price": 2450,
            "currency_id": "ARS",
            "initial_quantity": 2658,
            "available_quantity": 500,
            "sold_quantity": 500,
            "sale_terms": [],
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_special",
            "start_time": "2019-02-26T14:54:23.000Z",
            "stop_time": "2039-02-21T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://articulo.mercadolibre.com.ar/MLA-772921213-mesa-mesita-de-luz-vintage-retro-nordica-pino-con-cajones-_JM",
            "thumbnail_id": "606843-MLA44938086335_022021",
            "thumbnail": "http://http2.mlstatic.com/D_606843-MLA44938086335_022021-I.jpg",
            "secure_thumbnail": "https://http2.mlstatic.com/D_606843-MLA44938086335_022021-I.jpg",
            "pictures": [],
            "video_id": null,
            "descriptions": [],
            "accepts_mercadopago": true,
            "non_mercado_pago_payment_methods": [
            ],
            "shipping": {},
            "international_delivery_mode": "none",
            "seller_address": {},
            "seller_contact": null,
            "location": {
            },
            "coverage_areas": [
            ],
            "attributes": [],
            "warnings": [
            ],
            "listing_source": "",
            "variations": [],
            "status": "active",
            "sub_status": [
            ],
            "tags": [],
            "warranty": "Garantía del vendedor: 30 días",
            "catalog_product_id": null,
            "domain_id": "MLA-NIGHTSTANDS",
            "parent_item_id": null,
            "differential_pricing": null,
            "deal_ids": [
            ],
            "automatic_relist": false,
            "date_created": "2019-02-26T14:54:24.000Z",
            "last_updated": "2021-05-22T19:05:21.000Z",
            "health": 0.8,
            "catalog_listing": false,
            "channels": []
          }`
        )
      );
    };
    console.log(item);
    fetchItem();
  }, []);
  return (
    <div className="item-details">
      <div className="item-details__main">
        <img src={item.thumbnail} alt="" className="item-details__main__thumbnail" />
        <div className="item-details__main__info">
          <p className="item-details__main__info__tag">Nuevo - 234 vendidos</p>
          <p className="item-details__main__info__title">{item.title}</p>
          <p className="item-details__main__info__price">$ {item.price?.toLocaleString("de")}</p>
          <button className="item-details__main__info__btn">Comprar</button>
        </div>
      </div>
      <div className="item-details__desc">
        <p className="item-details__desc__title"> Descripción del producto</p>
        <p className="item-details__desc__desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, voluptatum quae debitis sequi architecto incidunt dolores possimus nesciunt remaaa aaveritatis? Laudantium, excepturi soluta! Dolores aliquam eligendi aperiam eos consequatur. Error iste excepturi atque magni expedita deserunt illum illo sint praesentium quod assumenda aliquid accusamus, voluptatem laboriosam dolor? Facere, fugit odit!
        </p>
      </div>
    </div>
  );
};
