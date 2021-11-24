import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getProduct,
} from "../../../redux/Actions/productAction";
import EditProduct from "../EditProduct/EditProduct";
import "./AdminCard.css";

const AdminCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="caritem">
      <Card id="card" style={{ width: "18rem" }}>
        <Card.Img
          className="cardimg"
          variant="top"
          src={`/uploads/${product.image}`}
          lt="..."
        />
        <Card.Body className="admincard">
          <Card.Title className="catégorie">
            catégorie :{product.categorie}
          </Card.Title>
          <Card.Text>nom :{product.name}</Card.Text>
          <Card.Text> poids :{product.poids}</Card.Text>
          <Card.Text>prix :{product.prix} TND</Card.Text>
          <Card.Text> quantité :{product.quantité}</Card.Text>
          <div className="d-flex justify-content-around">
            <Button
              className="buttondelete"
              variant="success"
              onClick={() => {
                dispatch(deleteProduct(product._id));
                getProduct();
              }}
            >
              Supprimer
            </Button>
            <EditProduct product={product} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminCard;
