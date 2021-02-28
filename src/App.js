import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './React manu/Home';
import Cart from './React manu/Cart';
import Nav from './React manu/Nav';


const App=() => {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/cart" component={Cart}/>
        <Redirect to="/" />
        <Home />
        <Cart />
      </Switch>
    </div>
  );
}

export default App;
