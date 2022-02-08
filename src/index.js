import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./AppStore";

ReactDOM.render(<App store={store} />,document.querySelector("#root"));
