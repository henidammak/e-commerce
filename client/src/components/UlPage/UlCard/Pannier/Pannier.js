import React from "react";
import { Button } from "react-bootstrap";
import './Pannier.css'

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.prix, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-11.5">
      <h2>Articles</h2>
      <div>
        {cartItems.length === 0 && <div>Pannier vide</div>}
        {cartItems.map((item) => (
          <div key={item._id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.prix.toFixed(2)}TND
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Article Prix</div>
              <div className="col-1 text-right">
                {" "}
                {itemsPrice.toFixed(2)}TND
              </div>
            </div>
            <div className="row">
              <div className="col-2">Tax </div>
              <div className="col-1 text-right"> {taxPrice.toFixed(2)}TND</div>
            </div>
            <div className="row">
              <div className="col-2">Frais de transport</div>
              <div className="col-1 text-right">
                {shippingPrice.toFixed(2)}TND
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Totale </strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)}TND</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <Button className="btncommande" variant="warning" onClick={() => alert("Implement Checkout!")}>
                passer la commande
              </Button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
