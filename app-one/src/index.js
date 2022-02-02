import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.renderOne = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window.unmountOne = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("One-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
