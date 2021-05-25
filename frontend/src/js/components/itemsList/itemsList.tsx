import * as React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItemsAsync } from "../../lib/apis/itemsApi";

import { ItemsListItem } from "./ItemsListItem";
import { IItemList } from "../../lib/models/itemList";
import { Breadcrum } from "../breadcrum/breadcrum";

export const ItemsList: React.FC = (): React.ReactElement => {
  const { search } = useLocation();
  const [items, setItems] = useState<IItemList>();
  const searchParams = new URLSearchParams(search);
  const s = searchParams.get("search");

  const [err, setErr] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoadaing] = useState<boolean>(true);

  useEffect(() => {
    const fetchItems = async () => {
      if (s) {
        let res = await getItemsAsync(s);
        if (!res.error) {
          setItems(res.data);
        }else{
          setErr(res.error);
          setErrorMessage(res.errorMessage);
        }
        setLoadaing(false);
      }
    };
    fetchItems();
  }, [s]);

  if (loading) {
    return (
      <div className="items-list">
        <h1>Loading...</h1>
      </div>
    );
  } else if (!err) {
    return (
      <>
        <Breadcrum categories={items ? items.categories : []}></Breadcrum>
        <div className="items-list">
          {items &&
            items.items &&
            items.items.map((item) => {
              return <ItemsListItem key={item.id} {...item}></ItemsListItem>;
            })}
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
