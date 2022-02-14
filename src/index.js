import React from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";
import store from "./TodoStore";

ReactDOM.render(<Todos store={store} />,document.querySelector("#root"));
