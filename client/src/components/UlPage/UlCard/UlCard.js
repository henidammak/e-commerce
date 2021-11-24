import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UlCard.css";

const UlCard = ({ product }) => {
  return (
    <div className="caritem">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img
          className="cardimg"
          variant="top"
          src={`/uploads/${product.image}`}
          lt="..."
        />
        <Card.Body className="ulcard">
          <Card.Title className="catégorie">
            catégorie :{product.categorie}
          </Card.Title>
          <Card.Text>{product.name}</Card.Text>

          <div className="d-flex justify-content-around">
            <Button className="button" variant="success">
              <Link className="linkdetail" to={`/ulpage/${product._id}`}>
                Détails
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UlCard;
