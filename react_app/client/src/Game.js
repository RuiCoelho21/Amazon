import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Start from './components/pages/Start';
import Board from './components/pages/Board'

import { useState, useEffect } from 'react';

import Login from './components/LoginPage';
import Home from './components/HomePage';
import firebase  from './services/firebase';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      })
    }, [])
  
    return (
      <Router>
      <div className="game">
        {user ? <Home user={user} /> : <Login/>}
      </div>
        <Route path='/start' exact component={Start} />
        <Route path='/game' component={Board} />
      </Router>
    );
  }

/*const Game = () => (
    <Router>
        <Route path='/start' exact component={Start} />
        <Route path='/game' component={Board} />
    </Router>
)
 */
export default Game