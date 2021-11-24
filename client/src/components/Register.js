import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/Actions/actionTypes";
import { Link, Redirect } from "react-router-dom";
import './Register.css'

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const { loading, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addUser = (e) => {
    e.preventDefault();
    dispatch(registerUser({ fullName, email, password, phone }));
  };

  return (
    <div className ="bgimg">
      {loading ? (
        <Spinner id="spinner" animation="border" variant="success" />
      ) : users ? (
        <Redirect to="/login" />
      ) : (
        <div id="register" className="col-md-4 m-auto">
          <h1 className="title" >s'inscrire</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Label className="tirer">nom et prénom</Form.Label>
              <Form.Control
              className='input'
                type="fullName"
                placeholder=" Entrer nom et prénom "
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="tirer">email</Form.Label>
              <Form.Control
              className='input'
                type="email"
                placeholder="Entrer email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="tirer">mot de passe</Form.Label>
              <Form.Control
              className='input'
                type="password"
                placeholder="Entrer mot de passe"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label className="tirer">numéro de tél</Form.Label>
              <Form.Control
              className='input'
                type="phone"
                placeholder="Entrer numéro "
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check className="tirer" type="checkbox" label="Vérifiez-moi" />
            </Form.Group>
            <Button className="button" variant="warning" type="submit" onClick={addUser}>
              Inscrivez-vous
            </Button>
            <Link className="linkconnexion" to="/login">connexion</Link>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Register;
