import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import 'normalize.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter >
      <Suspense fallback='Loading~~~'>
        <App />
      </Suspense>
    </BrowserRouter >
  </Provider>
);
