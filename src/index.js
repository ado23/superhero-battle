import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

import Home from "./containers/home";
import Heroes from "./containers/heroes";
import SuperheroBattle from "./containers/superheroBattle";
import TeamBattle from "./containers/teamBattle";
import About from "./containers/about";

//prettier-ignore
const routing = (
  <Router>
      <ul className="list">
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/heroes">Heroes</Link> </li>
        <li> <Link to="/superherobattle">Superhero battle</Link> </li>
        <li> <Link to="/teamBattle">Team battle</Link> </li>
        <li> <Link to="/about">About</Link> </li>
      </ul>
      
      <Route exact path="/" component={Home} />
      <Route path="/heroes" component={Heroes} />
      <Route path="/superherobattle" component={SuperheroBattle} />
      <Route path="/teamBattle" component={TeamBattle} />
      <Route path="/about" component={About} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
