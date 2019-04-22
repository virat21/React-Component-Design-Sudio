import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ServiceWorker } from "./utils";
import { App } from "./components/App";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

//making server worker enabled in HTTPS
window.location.protocol === "https:"
  ? ServiceWorker.register()
  : ServiceWorker.unregister();
