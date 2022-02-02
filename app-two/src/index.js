import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.renderTwo = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window.unmountTwo = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("Two-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
