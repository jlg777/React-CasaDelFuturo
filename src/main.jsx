import React from "react";
import ReactDOM from "react-dom/client";
import Carrito from "./Clase5-Carrito/components/Carrito";
import "./index.css";
import { FilterProviders } from "./Clase5-Carrito/providers/filterProviders";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rutas from "./Clase6/complements/Rutas";
//import Users from "./Clase6/Tarea/components/Users";
import NavBar from "./Clase6/Tarea/components/NavBar";
import User from "./Clase6/Tarea/components/User";
import Cards from "./Clase10-TrabajoFinal/components/Cards";
import Nav from "./Clase10-TrabajoFinal/components/Nav";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/*    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              
            </>
          }
        >
          <Route index />
          <Route path=":idUser" element={<User />} />
        </Route>
        <Route path="user/:idUser" element={<User />} />
      </Routes>
    </BrowserRouter>
        */}
    <Nav />
  </>
);
