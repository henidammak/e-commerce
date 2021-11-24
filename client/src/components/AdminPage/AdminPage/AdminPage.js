import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../../../redux/Actions/productAction";
import AddProduct from "../AddProduct/AddProduct";
import AdminCard from "../AdminCard/AdminCard";
import "./AdminPage.css";

import * as AiIcons from "react-icons/ai";
import { Spinner } from "react-bootstrap";

const AdminPage = () => {
  const { loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  });

  const products = useSelector((state) => state.product.products);
  const [text, setText] = useState("");

  return (
    <div>
      <>
        <div id="navbar">
          <img id="logo" src="logo.png" alt="logo" />
          <div>
            {" "}
            <Link className="mx-auto d-block" id="iconcommande" to>
              <AiIcons.AiOutlineOrderedList />
            </Link>
          </div>
          <div>
            <Link className="mx-auto d-block" id="iconaccueil" to="/">
              <AiIcons.AiFillHome />
            </Link>
          </div>
        </div>
      </>

      <div>
        {loading ? (
          <Spinner id="spinner" animation="border" variant="success" />
        ) : (
          <div className="BgPageAdmin">
            <input
              class="mx-auto d-block"
              id="recherche"
              placeholder="Rechercher.."
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <AddProduct />
            <div className="adminpage">
              {products
                .filter((product) =>
                  product.name.toUpperCase().includes(text.toUpperCase().trim())
                )
                .map((product) => (
                  <AdminCard product={product} key={product._id} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
