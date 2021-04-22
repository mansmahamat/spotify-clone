import React from "react";
import "./Header.scss";
import { ReactComponent as Right } from './assets/right.svg'
import { ReactComponent as Left } from './assets/left.svg'

export default function Header({ user, search, setSearch }) {
  return (
    <div className="header">
      <div className="header__container">
        <label>
          <Right />
          <Left />
          <input
            className="header__container__input"
            type="search"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
