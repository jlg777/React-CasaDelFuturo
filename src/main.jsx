import React from "react";
import ReactDOM from "react-dom/client";
import Carrito from "./Clase5-Carrito/components/Carrito";
import "./index.css";
import { FilterProviders } from "./Clase5-Carrito/providers/filterProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterProviders>
      <Carrito />
    </FilterProviders>
  </React.StrictMode>
);
