import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

ReactDOM.render(
  <React.StrictMode>
    <Badges />
  </React.StrictMode>,
  document.getElementById("root")
);
