import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login"
import Home from "./Home"
import Checkout from './Checkout'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Header />
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
