import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContextProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
