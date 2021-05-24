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

  useEffect(() => {
    const fetchItems = async () => {
      if (s) {
        const res = await getItemsAsync(s);
        setItems(res);
      }
    };
    fetchItems();
  }, [s]);
  return (
    <>
      <Breadcrum categories={items ? items.categories : []}></Breadcrum>
      <div className="items-list">
        {items &&
          items.items.map((item) => {
            return <ItemsListItem key={item.id} {...item}></ItemsListItem>;
          })}
      </div>
    </>
  );
};
