import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logUser } from "../redux/Actions/actionTypes";
import "./Login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const loggin = (e) => {
    e.preventDefault();
    dispatch(logUser({ email, password }));
  };
  return (
    <div className ="bgimg">
      {loading ? (
        <Spinner id="spinner" animation="border" variant="success" />
      ) : token ? (
        <Redirect to="/ulpage" />
      ) : (
        <div id="login" className="col-md-4 m-auto">
          <h1 className="title">Connexion</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="tirer">Email</Form.Label>
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

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check className="tirer" type="checkbox" label="Vérifiez-moi" />
            </Form.Group>
            <Button className="button" variant="warning" type="submit" onClick={loggin}>
              connexion
            </Button>
            <p className="tirer" >Vous n’avez pas un compte ?</p>
            <Link className="linkinscrire" to="/register">Inscrivez-vous</Link>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Login;
