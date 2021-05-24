import * as React from "react";
import {Link} from "react-router-dom";
import { IItemListItem } from "../../lib/models/itemList"

export const ItemsListItem: React.FC<IItemListItem> = (
  props: IItemListItem
): React.ReactElement => {
  return (
    <Link to={`/items/${props.id}`} className="items-list__item__link items-list__item">
      <img
        className="items-list__item__thumbnail"
        src={props.picture}
        alt={props.title}
      />
      <div className="items-list__item__info">
        <p className="items-list__item__info__price">
          $ {props.price.amount.toLocaleString("de", { maximumFractionDigits: 0 })}
          {props.free_shipping && (
            <img
              className="items-list__item__info__shipping"
              src="images/ic_shipping.png"
              alt="shipping"
            />
          )}
        </p>
        <p className="items-list__item__info__title">{props.title}</p>
      </div>
      <p className="items-list__item__location">{props.address.state_name}</p>
    </Link>
  );
};
