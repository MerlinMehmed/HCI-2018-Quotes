import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import "./include/bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "popper.js/dist/popper.min.js";

ReactDOM.render(<BrowserRouter><App /></ BrowserRouter>, document.getElementById("root"));
registerServiceWorker();
