import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">slack</div>
        <ul className="header__menu">
          <li><a href="#">Product</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Enterprise</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <div className="header__search">
          <input type="text" placeholder="Search" />
          <FaSearch className="search-icon" />
        </div>
        <div className="header__actions">
          <a href="#" className="header__signin">Sign In</a>
          <a href="#" className="header__talk-to-sales">Talk to Sales</a>
          <a href="#" className="header__try-for-free">Try for Free</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
