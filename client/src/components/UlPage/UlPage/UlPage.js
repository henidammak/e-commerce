import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/Actions/productAction";
import UlCard from "../UlCard/UlCard";
import { SidebarData } from "../../slidebardata";
import "./UlPage.css";

import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import { Spinner } from "react-bootstrap";



const UlPage = ({ onAdd }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  const [text, setText] = useState("");

  return (
    <div>
      {loading ? (
       <Spinner id="spinner" animation="border" variant="success" />
      ) : (
        <div className="Bgulpage">
          <input
            className="mx-auto d-block"
            id="search"
            placeholder="Rechercher.."
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />

          <div>
            <img
              className="mx-auto d-block"
              id="affiche2"
              src="affiche1.jpg"
              alt="First slide"
            />
          </div>

          <div className="ulList">
            {products
              .filter((product) =>
                product.name.toUpperCase().includes(text.toUpperCase().trim())
              )
              .map((product) => (
                <UlCard product={product} key={product._id} onAdd={onAdd} />
              ))}
          </div>
        </div>
      )}

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <BiIcons.BiLeftArrow />
              <span>
                <span>
                  <FaIcons.FaBars />
                </span>{" "}
              </span>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                  <span>
                    {" "}
                    <span>
                      {" "}
                      <span>
                        {" "}
                        <span> {item.icon}</span>
                      </span>
                    </span>{" "}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default UlPage;
