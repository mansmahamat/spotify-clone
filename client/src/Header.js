import React from "react";
import "./Header.scss";

export default function Header({ user, search, setSearch }) {
  return (
    <div className="header">
      <div className="header__container">
        <label>
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
