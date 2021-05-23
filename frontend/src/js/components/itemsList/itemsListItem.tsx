import * as React from "react";
import {Link} from "react-router-dom";

interface ItemsListItemProps {
  id: string;
  thumbnail: string;
  price: number;
  title: string;
  state_name: string;
  shipping: boolean;
}
export const ItemsListItem: React.FC<ItemsListItemProps> = (
  props: ItemsListItemProps
): React.ReactElement => {
  return (
    <Link to={`/items/${props.id}`} className="items-list__item__link items-list__item">
      <img
        className="items-list__item__thumbnail"
        src={props.thumbnail}
        alt={props.title}
      />
      <div className="items-list__item__info">
        <p className="items-list__item__info__price">
          $ {props.price.toLocaleString("de", { maximumFractionDigits: 0 })}
          {props.shipping && (
            <img
              className="items-list__item__info__shipping"
              src="/images/ic_shipping.png"
              alt="shipping"
            />
          )}
        </p>
        <p className="items-list__item__info__title">{props.title}</p>
      </div>
      <p className="items-list__item__location">{props.state_name}</p>
    </Link>
  );
};
