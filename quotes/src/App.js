import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./forms/Login";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  // TODO: add head somewhere
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.twttr = (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-wjs"));
  }
}

export default App;
