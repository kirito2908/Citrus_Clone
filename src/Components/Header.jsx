import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="mainHeader">
        <div className="brand">
          <img src="/assets/logo.webp" alt="logo" />
        </div>
        <div className="options">
          <ul>
            <li className="home">Home</li>
            <li>Collection</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Faq's</li>
          </ul>
        </div>
        <div className="icons">
          <IoSearch />
          <FaShoppingCart />
          <IoPersonSharp />
        </div>
      </div>
    </>
  );
};

export default Header;
