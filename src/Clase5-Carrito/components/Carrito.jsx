import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import RenderProducts from "./RenderProducts";
//import "../css/renderProducts.css";

const Carrito = () => {
  const products = useFetch("https://dummyjson.com/products?limit=15");
  console.log("products", products);
  return (
    <>
      <div className="body-carrito">
        <h2>Productos</h2>
        <RenderProducts data={products} />
      </div>
    </>
  );
};
export default Carrito;
