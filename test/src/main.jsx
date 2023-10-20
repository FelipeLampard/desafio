import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PizzaGive from "./context/PizzaContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaGive>
        <App />
      </PizzaGive>
    </BrowserRouter>
  </React.StrictMode>
);
