import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import 'normalize.css'
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter >
    <Suspense fallback='Loading~~~'>
      <App />
    </Suspense>
  </BrowserRouter >
);