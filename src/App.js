import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import { About } from "./About/About";
import { Destinations } from "./Destinations/Destinations";
import { SingleDestination } from "./Destinations/SingleDestination";
import { Maps } from "./Maps/Maps";
import { OtherStuff } from "./OtherStuff/OtherStuff";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/aboutlmer" component={About}></Route>
        <Route path="/destinations/:name" component={SingleDestination}></Route>
        <Route path="/destinations" component={Destinations}></Route>
        <Route path="/maps" component={Maps}></Route>
        <Route path="/othercoolstuff" component={OtherStuff}></Route>
      </Switch>
    </Router>
  );
}

export default App;
