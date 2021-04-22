import React from "react";
import "./Navbar.scss";
import Logo from "./Logo";
import { ReactComponent as Home } from "./assets/home.svg";
import { ReactComponent as Search } from "./assets/search.svg";
import { ReactComponent as Library } from "./assets/library.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <ul className="nav__item">
        <li className="active">
          <Home />
          Home
        </li>
        <li>
          <Search />
          Search
          </li>
        <li>
          <Library />
          Library
          </li>
      </ul>
      <div className="like">
        <ul>
          <li>Create a playlist</li>
          <li>Liked Title</li>
        </ul>
      </div>
      <hr className="separation" />
      <div className="playlist">
        <ul>
          <li>Classique</li>
          <li>Le R&B français</li>
          <li>Sport</li>
          <li>Africa</li>
        </ul>
        <div className="download">
        <span>Download the application</span>
      </div>
      </div>
      
    </div>
  );
}
