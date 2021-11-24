import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct, getProduct } from "../../../redux/Actions/productAction";
import "./AddProduct.css";
const AddProduct = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categorie, setCategorie] = useState("");
  const [name, setName] = useState("");
  const [poids, setPoids] = useState("");
  const [prix, setPrix] = useState("");
  const [quantité, setQuantité] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("image", fileData);

    fetch("http://localhost:5000/single", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("File Sent Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const add = () => {
    dispatch(addProduct(categorie, name, poids, prix, quantité, image));
    dispatch(getProduct());
    handleClose();
  };
  return (
    <div>
      <Button
        className="mx-auto d-block"
        id="btnajouter"
        variant="success"
        onClick={handleShow}
      >
        Ajouter un article
      </Button>

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header className="cadremodal">
          <Modal.Title className="modaltitle">Ajouter un article: </Modal.Title>
        </Modal.Header>
        <Modal.Body className="cadremodal">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              id="modalinput"
              placeholder="catégorie.."
              type="text"
              className="form-control"
              onChange={(e) => setCategorie(e.target.value)}
              value={categorie}
            />
            <input
              id="modalinput"
              placeholder="nom de l'article.."
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              placeholder="poids.."
              id="modalinput"
              type="text"
              className="form-control"
              onChange={(e) => setPoids(e.target.value)}
              value={poids}
            />
            <input
              id="modalinput"
              placeholder="prix.."
              type="text"
              className="form-control"
              onChange={(e) => setPrix(e.target.value)}
              value={prix}
            />
            <input
              id="modalinput"
              placeholder="quantité.."
              type="text"
              className="form-control"
              onChange={(e) => setQuantité(e.target.value)}
              value={quantité}
            />
            <input
              id="modalinput"
              type="text"
              placeholder="nom de l'image.."
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </form>
        </Modal.Body>
        <Modal.Footer id="cadremodal" className="modalfooter">
          <form onSubmit={onSubmitHandler}>
            <input type="file" onChange={fileChangeHandler} />
            <br />
            <Button
              className="btnmodal"
              variant="success"
              type="submit"
              onClick={add}
            >
              Ajouter
            </Button>
          </form>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
