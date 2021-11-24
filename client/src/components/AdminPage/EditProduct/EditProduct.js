import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editProduct, getProduct } from "../../../redux/Actions/productAction";
import "./EditProduct.css";

const EditProduct = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categorie, setCategorie] = useState(product.categorie);
  const [name, setName] = useState(product.name);
  const [poids, setPoids] = useState(product.poids);
  const [prix, setPrix] = useState(product.prix);
  const [quantité, setQuantité] = useState(product.quantité);
  const dispatch = useDispatch();

  const edit = () => {
    dispatch(editProduct(product._id, categorie, name, poids, prix, quantité));
    dispatch(getProduct());
    handleClose();
  };
  return (
    <div>
      <Button className="buttonedit" variant="success" onClick={handleShow}>
        Modifier
      </Button>

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header className="cadremodal">
          <Modal.Title className="modaltitle">Modifier :</Modal.Title>
        </Modal.Header>
        <Modal.Body className="cadremodal">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              id="modalinput"
              type="text"
              className="form-control"
              onChange={(e) => setCategorie(e.target.value)}
              value={categorie}
            />
            <input
              id="modalinput"
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              id="modalinput"
              type="text"
              className="form-control"
              onChange={(e) => setPoids(e.target.value)}
              value={poids}
            />
            <input
              id="modalinput"
              type="text"
              className="form-control"
              onChange={(e) => setPrix(e.target.value)}
              value={prix}
            />
            <input
              id="modalinput"
              type="text"
              className="form-control"
              onChange={(e) => setQuantité(e.target.value)}
              value={quantité}
            />
          </form>
        </Modal.Body>
        <Modal.Footer id="cadremodal" className="modalfooter">
          <Button className="btnmodal" variant="success" onClick={handleClose}>
            Fermer
          </Button>
          <Button
            className="btnmodal"
            variant="success"
            type="submit"
            onClick={edit}
          >
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProduct;
