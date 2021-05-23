import * as React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItemsAsync } from "../../lib/apis/itemsApi"

import { ItemsListItem } from "./ItemsListItem";
import { IItemList } from "../../lib/models/itemList"
import { Breadcrum } from "../breadcrum/breadcrum";

export const ItemsList: React.FC = (): React.ReactElement => {
  const { search } = useLocation();
  //   could use query-string node-package to support ie
  const searchParams = new URLSearchParams(search);
  const s = searchParams.get("search");

  const [items, setItems] = useState<IItemList>();


  useEffect(() => {
    const fetchItems = async () => {
      if(s){
        const res = await getItemsAsync(s);
        console.log(res);
        setItems(res);
      }
    };
    fetchItems();
  }, []);
  return (
    <>
      <Breadcrum categories={items? items.categories : []}></Breadcrum>
    <div className="items-list">
      {items && items.items.map((item) => {
        return (
            <ItemsListItem {...item} ></ItemsListItem>
        );
      })}
    </div>
    </>
  );
};
