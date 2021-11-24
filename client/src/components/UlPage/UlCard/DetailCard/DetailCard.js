import React, { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../../../redux/Actions/productAction";
import { Link } from "react-router-dom";
import "./Detail.css";

import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

import { SidebarData } from "../../../slidebardata";

const DetailCard = ({ match, onAdd }) => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productDetails);
  useEffect(() => {
    if (products && match.params.id !== products._id) {
      dispatch(getOneProduct(match.params.id));
    }
  }, [dispatch, match, products]);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      {loading ? (
        <Spinner className="spinner" animation="border" variant="success" />
      ) : (
        <div id="detailcard" className="mx-auto d-block">
          <div className="d-flex justify-content-around">
            <div>
              <Card.Img
                className="imgcard"
                variant="top"
                src={`/uploads/${products.image}`}
                lt="..."
              />
            </div>

            <div className="caracard">
              <Card.Body>
                <Card.Title className="catégorie">
                  catégorie :{products.categorie}
                </Card.Title>
                <Card.Text>nom :{products.name}</Card.Text>
                <Card.Text> poids :{products.poids}</Card.Text>
                <Card.Text>prix :{products.prix} TND</Card.Text>
                <Card.Text> quantité :{products.quantité}</Card.Text>

                <Button
                  variant="success"
                  className="btncarddetail"
                  onClick={() => onAdd(products)}
                >
                  {" "}
                  ajouter au pannier
                </Button>
              </Card.Body>
            </div>
          </div>

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
      )}
    </div>
  );
};

export default DetailCard;
