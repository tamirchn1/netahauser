import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';


import Home from "./components/Home"
import About from "./components/About"
import PrivateWorkshop from "./components/Privateworkshop"
import PrivateLesson from "./components/Privatelesson"
import Workshop from "./components/Workshop"
import Tetra from "./components/Tetra"

 
function App(){
  return (
    <Router> 
       <div className='App'>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/PrivateWorkshop" component={PrivateWorkshop}/>
         <Route exact path="/PrivateLesson" component={PrivateLesson}/>
         <Route exact path="/Workshop" component={Workshop}/>
         <Route exact path="/Tetra" component={Tetra}/>

    </div></Router>
  
  )
}
 
export default App;