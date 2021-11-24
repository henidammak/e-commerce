import React, { useEffect, useState } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/Actions/productAction";
import HomeCard from "../HomeCard/HomeCard";
import "./HomeList.css";
import * as MdIcons from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const HomeList = () => {
  const { loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  });

  const products = useSelector((state) => state.product.products);
  const [text, setText] = useState("");

  //  const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <img className="logo" src="logo.png" alt="logo" />
            <Link className="mx-auto d-block" id="iconlogin" to="login">
              <MdIcons.MdOutlinePerson />
            </Link>
          </div>
        </IconContext.Provider>
      </>

      <div>
        {loading ? (
          <Spinner id="spinner" animation="border" variant="success" />
        ) : (
          <div className="BgHome">
            {/* {product.products.map((product) => (
            <HomeCard product={product} key={product._id} />
          ))} */}

            <input
              class="mx-auto d-block"
              id="search"
              placeholder="Rechercher.."
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />

            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    class="mx-auto d-block"
                    id="affiche"
                    src="affiche1.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="HomeList">
              {products
                .filter((product) =>
                  product.name.toUpperCase().includes(text.toUpperCase().trim())
                )
                .map((product) => (
                  <HomeCard product={product} key={product._id} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeList;
