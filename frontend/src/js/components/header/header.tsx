import * as React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const Header: React.FC = (): React.ReactElement => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSearch("");
    history.push(`/items?search=${search}`);
  }

  return (
    <header className="header">
      <div className="header__content container">
        <Link to="/">
          <img className="header__logo" src="images/Logo_ML.png" alt="logo" />
        </Link>
        <form className="header__search-bar" onSubmit={handleSubmit}>
          <input
            className="header__search-bar__input"
            type="text"
            placeholder="Nunca dejes de buscar"
            value={search}
            onChange={(e) => {
              e.preventDefault;
              setSearch(e.target.value);
            }}
          />
          <button
            type="submit"
            value="Submit"
            className="header__search-bar__button"
          >
            <img src="images/ic_Search.png" />
          </button>
        </form>
      </div>
    </header>
  );
};
