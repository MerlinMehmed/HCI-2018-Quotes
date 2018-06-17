import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./forms/Login";
import Register from "./forms/Register";
import AddQuote from "./forms/AddQuote";
import ViewAuthors from "./views/viewAuthors";
import ViewSources from "./views/viewSources";
import ViewCategories from "./views/viewCategories";
import AddPersonalQuote from "./forms/AddPersonalQuote";
import UserQuotes from "./UserQuotes";
import Profile from "./Profile";
import { Switch, Route } from "react-router-dom";
import ViewSearch from "./views/viewSearch";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/addQuote" component={AddQuote} />
            <Route path="/addPersonalQuote" component={AddPersonalQuote} />
            <Route path="/editPersonalQuote" component={AddPersonalQuote} />
      			<Route path="/Browse/Authors" component={ViewAuthors} />
      			<Route path="/Browse/Books and magazines" component={ViewSources} />
      			<Route path="/Browse/Categories" component={ViewCategories} />
      			<Route path="/Browse/Search" component={ViewSearch} />
            <Route path="/userQuotes" component={UserQuotes} />
            <Route path="/profile" component={Profile} />
          </Switch>
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
