import {
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword
} from "../services/firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React, { useState } from "react";

import "../App.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  return (
    <div className="container-fluid" style={{ marginTop: "10%" }}>
      <div className="row">
        <div className="col col-2"></div>
        <div className="col col-8">
          <div className="row">
            <div className="col col-6">
              <div>
                <div>
               
                  <h1 className= "text-muted"> User Login</h1>
                  <div>
                    <Form.Group className="text-muted" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                      
                    </Form.Group>

                    <Form.Group className="text-muted" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                    </Form.Group>
                    <hr style={{ margin: "5%" }} />

                    <div className="d-grid gap-2">
                      <Button
                        
                        onClick={() => {
                          signInWithEmailAndPassword(loginEmail, loginPassword);
                        }}
                      >
                        Login
                      </Button>
                      <Button
                        variant="outline-primary"
                        onClick={signInWithGoogle}
                      >
                        <i className="fab fa-google"></i> Google Sign-in
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-7">
              <div>
                <div>                
                  <h1 className= "text-muted"> User Registration</h1>
                  
                  <div>
                    <Form.Group className="text-muted" controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="text-muted" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="text-muted" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <hr style={{ margin: "5%" }} />

                    <div className="d-grid gap-3">
                      <Button
                        
                        type="submit"
                        onClick={() => {
                          registerWithEmailAndPassword(name, email, password);
                        }}
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-col-2"></div>
      </div>
    </div>
  );
};

export default Login;
