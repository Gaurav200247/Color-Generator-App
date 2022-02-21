import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { AppProvider } from "./Context";

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById("root")
);
