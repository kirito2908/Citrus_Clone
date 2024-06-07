import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="mainHeader">
        <div className="brand">
          <Link to="/">
            <img src="/assets/logo.webp" alt="logo" />
          </Link>
        </div>
        <div className="options">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Collection">Collection</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/FAQs">FAQs</Link>
            </li>
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
