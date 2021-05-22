import * as React from "react";
interface IBreadcrumProps {
  categories: string[];
}
export const Breadcrum: React.FC<IBreadcrumProps> = (
  props: IBreadcrumProps
): React.ReactElement => {
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__ul">
        {props.categories.map((category, index) => (
          <li className="breadcrumb__li" key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
