import React from "react";
import "./App.css";
import StoreFront from "./components/StoreFront";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app container ">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/store-front" component={StoreFront} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
