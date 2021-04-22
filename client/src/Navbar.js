import React from "react";
import "./Navbar.scss";
import Logo from "./Logo";
import { ReactComponent as Home } from "./assets/home.svg";
import { ReactComponent as Search } from "./assets/search.svg";
import { ReactComponent as Library } from "./assets/library.svg";
import { ReactComponent as Playlist } from "./assets/playlist.svg";
import { ReactComponent as Like } from "./assets/like.svg";

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
          <li>
            <Playlist />
            Create a playlist
          </li>
          <li>
            <Like />
            Liked Title
            </li>
        </ul>
      </div>
      <hr className="separation" />
      <div className="playlist">
        <ul>
          <li>Classique</li>
          <li>R&B</li>
          <li>Sport</li>
          <li>Africa</li>
          <li>Pop</li>
          <li>Hip-hop</li>
          <li>Relax</li>
          <li>Latino</li>
        </ul>
        <div className="download">
        <span>Download the application</span>
      </div>
      </div>
      
    </div>
  );
}
