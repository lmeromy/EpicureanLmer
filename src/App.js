import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import { About } from "./About/About";
import { Destinations } from "./Destinations/Destinations";
import { Maps } from "./Maps/Maps";
import { OtherStuff } from "./OtherStuff/OtherStuff";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutlmer">
          <About />
        </Route>
        <Route path="/destinations">
          <Destinations />
        </Route>
        <Route path="/maps">
          <Maps />
        </Route>
        <Route path="/othercoolstuff">
          <OtherStuff />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
