import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// redux: pass store on the top level
import { Provider } from "react-redux";
import store from "./store_redux";

//APP -> index.js -> index.html
//redux root store entrance
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
