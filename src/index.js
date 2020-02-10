import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Heroes from "./Heroes";
import Home from "./containers/home";
import * as serviceWorker from "./serviceWorker";

//prettier-ignore
const routing = (
  <Router>
    <div className="topnav"> 
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/heroes">Heroes</Link> </li>
        <li> <Link to="/superherobattle">Superhero battle</Link> </li>
      </ul>
      
      <Route exact path="/" component={App} />
      <Route path="/heroes" component={Heroes} />
      <Route path="/superherobattle" component={Home} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
