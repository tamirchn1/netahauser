import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


import Home from "./components/Home"
import About from "./components/About"
import PrivateWorkshop from "./components/Privateworkshop"
import PrivateLesson from "./components/Privatelesson"
import Workshop from "./components/Workshop"
import Tetra from "./components/Tetra"


class App extends Component {
  render() {
    return (
      <div> 
      <Home/>
      <About/>
      <PrivateWorkshop/>
      <PrivateLesson/>
      <Workshop/>
      <Tetra/>
      </div>
     
    );
  }
}

export default App;
