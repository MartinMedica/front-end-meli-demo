import * as React from "react";
import { useLocation } from "react-router-dom";
import { ItemsListItem } from "./itemsListItem";

export const ItemsList: React.FC = (): React.ReactElement => {
  const { search } = useLocation();
  //   could use query-string node-package to support ie
  const searchParams = new URLSearchParams(search);
  const s = searchParams.get("search");

  return (
    <div className="items-list">
      {s}
      <ItemsListItem></ItemsListItem>
      <ItemsListItem></ItemsListItem>
      <ItemsListItem></ItemsListItem>
      <ItemsListItem></ItemsListItem>
    </div>
  );
};
