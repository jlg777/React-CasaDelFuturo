import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import RenderProducts from "./RenderProducts";
import useFilter from "../hooks/useFilter";
//import "../css/renderProducts.css";

const Carrito = () => {
  const products = useFetch("https://dummyjson.com/products?limit=15");
  // console.log("products", products);

  const productsFiltered = useFilter(products);
  //const { data } = productsFiltered;
  //console.log(productsFiltered);
  return (
    <>
      <div className="body-carrito">
        <h2>Productos</h2>
        <RenderProducts productsFiltered={productsFiltered || []} />
      </div>
    </>
  );
};
export default Carrito;
