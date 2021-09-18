import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

import Landing from "./components/landingPage"
import Home from "./components/homePage"

function App() {
  return (
      <Router>
        <Route path="/" exact component={Landing}/>
        <Route path="/home" exact component={Home}/>
      </Router>
  );
}

export default App;
