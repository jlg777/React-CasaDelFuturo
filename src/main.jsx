import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import Market from "./Clase3/Market.jsx";
import { supermarketItems } from "../src/Clase3/articulos.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Market superM={supermarketItems} />
  </React.StrictMode>
);
