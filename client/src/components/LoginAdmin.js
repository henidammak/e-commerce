import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { logAdmin } from "../redux/Actions/adminAction";
import './LoginAdmin.css'
const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, token1 } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const logginAdmin = (e) => {
    e.preventDefault();
    dispatch(logAdmin({ email, password }));
  };
  return (
    <div  className ="bgimg">
      {loading ? (
        <Spinner id="spinner" animation="border" variant="success" />
      ) : token1 ? (
        <Redirect to="/adminpage" />
      ) : (
        <div id="loginadmin" className="col-md-5 m-auto">
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
            <Button  className="button" variant="warning" type="submit" onClick={logginAdmin}>
              connexion
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default LoginAdmin;
