import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./include/bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "popper.js/dist/popper.min.js";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
