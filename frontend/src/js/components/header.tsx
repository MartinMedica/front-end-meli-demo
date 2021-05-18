import * as React from "react";

export const Header: React.FC = (): React.ReactElement => {
  return (
    <header className="header">
      <img className="header__logo" src="images/Logo_ML.png" alt="logo" />
        <input className="header__search-input" type="text" />
      <div className="header__search-bar">
      </div>
        <button className="header__search-button">
          <img src="images/ic_Search.png" />
        </button>
    </header>
  );
};
