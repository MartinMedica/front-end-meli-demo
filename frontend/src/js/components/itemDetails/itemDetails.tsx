import * as React from "react";
import { useState, useEffect } from "react";
import { getItemAsync } from "../../lib/apis/itemsApi";
import { Breadcrum } from "../breadcrum/breadcrum";

import { IItem } from "../../lib/models/item";

export const ItemDetails: React.FC = (props: any): React.ReactElement => {
  const [item, setItem] = useState<IItem>();

  
  const [err, setErr] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoadaing] = useState<boolean>(true);

  useEffect(() => {
    const fetchItem = async () => {
      
      const res = await getItemAsync(props.match.params.id);
      if (!res.error) {
        setItem(res.data);
      }else{
        setErr(res.error);
        setErrorMessage(res.errorMessage);
      }
      setLoadaing(false);
    };
    fetchItem();
  }, []);

  if (loading) {
    return (
      <div className="items-list">
        <h1>Loading...</h1>
      </div>
    );
  } else if (!err) {
      return (
        <>
          <Breadcrum
            categories={item?.categories ? item.categories : []}
          ></Breadcrum>
          <div className="item-details">
            <div className="item-details__main">
              <img
                src={item?.item.picture}
                alt=""
                className="item-details__main__thumbnail"
              />
              <div className="item-details__main__info">
                <p className="item-details__main__info__tag">
                  {item?.item.condition} - {item?.item.sold_quantity} vendidos
                </p>
                <p className="item-details__main__info__title">
                  {item?.item.title}
                </p>
                <p className="item-details__main__info__price">
                  $ {item?.item.price?.amount?.toLocaleString("de")}
                </p>
                <button className="item-details__main__info__btn">Comprar</button>
              </div>
            </div>
            <div className="item-details__desc">
              <p className="item-details__desc__title"> Descripci??n del producto</p>
              <p className="item-details__desc__desc">{item?.item.description}</p>
            </div>
          </div>
        </>
      );
  } else {
    return (
      <div className="items-list">
        <h1>{errorMessage}</h1>
      </div>
    );
  }
};
