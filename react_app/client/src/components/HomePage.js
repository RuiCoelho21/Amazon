import { auth } from "../services/firebase";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "../App.css";

const Home = ({ user }) => {
  return (
    <div className="container-fluid" style={{ marginTop: "-80%" }}>
      <div className="text-muted">
          <a>
            <h1>Welcome</h1>
          
            
            <Button
            
            onClick={() => auth.signOut()}
          >
            Sign Out
          </Button>
<div></div>
          <Button
            
            onClick={()=> window.location="/start"}
            >
            Start Game
          </Button>
          </a>
      </div>
    </div>
  );
};

export default Home;
