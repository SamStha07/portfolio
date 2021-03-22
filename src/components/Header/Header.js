import React from "react";

import "./Header.css";

import PocketAcademyLogo from "../../assets/images/Logo.svg";
import CartIcon from "../../assets/icons/Cart.svg";
import SearchIcon from "../../assets/icons/Search.svg";

// redux
import { useDispatch } from "react-redux";
import { toggleLogin } from "../../features/app/appSlice";

function Header() {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleLogin());
  };

  return (
    <div className="header">
      <img src={PocketAcademyLogo} alt="Pocket Academy Logo" />
      <span className="header__text">CATEGORIES</span>
      <div className="header__searchBox">
        <input type="text" placeholder="What do you want to learn today?" />
        <div className="header__searchIconBox">
          <img
            src={SearchIcon}
            alt="search icon"
            className="header__searchIcon"
          />
        </div>
      </div>
      <span className="header__text">TEACH ON POCKET ACADEMY</span>
      <div className="header__actions">
        <img src={CartIcon} alt="cart icon" />
        <div className="header__avatar">
          <span>0</span>
        </div>
      </div>
      <button className="header__button" onClick={toggle}>
        LOGIN/ SIGN UP
      </button>
    </div>
  );
}

export default Header;
