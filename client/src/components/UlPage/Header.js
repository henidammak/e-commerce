import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function Header(props) {
  const { products } = useSelector((state) => state.productDetails);
  return (
    <header>
      <div className="navbar">
        <img className="logo" src="logo.png" alt="logo" />
        <a href="#/cart">
          <Link
            className="iconpannier"
            to={`/ulpage/${products._id}/${products._id}`}
          >
            <FaIcons.FaShoppingCart />
          </Link>{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin">
          {" "}
          <Link className="article-bars" to={`/ulpage`}>
            <AiIcons.AiFillAppstore />
          </Link>
        </a>
      </div>
    </header>
  );
}
