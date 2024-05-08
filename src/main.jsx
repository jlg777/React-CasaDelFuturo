import React from "react";
import ReactDOM from "react-dom/client";
import Carrito from "./Clase5-Carrito/components/Carrito";
import "./index.css";
import { FilterProviders } from "./Clase5-Carrito/providers/filterProviders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rutas from "./Clase6/complements/Rutas";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
<Routes>
  <Route path="index">
    <Route index element={<h1>index MAIN</h1>}/>
    <Route path="main" element={<h1>index TWO</h1>}/>
  </Route>
  <Route path="about" >
  <Route index element={<h1>about</h1>}/>
    <Route path="main" element={<h1>about TWO</h1>}/>
  </Route> 
  <Route path="home" element={<Rutas />}>
    <Route index element={<h1>home</h1>}/>
    <Route path="index" element={<h1>index</h1>}/>
    <Route path="about" element={<h1>about</h1>}/>
    <Route path="main" element={<h1>main</h1>}/>
  </Route>
  <Route path="*" element={<h1>404 - not found</h1>}/>
</Routes>
</BrowserRouter>
);
