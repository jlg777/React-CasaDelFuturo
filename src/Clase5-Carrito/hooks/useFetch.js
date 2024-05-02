import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState(null);
  /*const [filteredProducts, setFilteredProducts] = useState(null);
  const [filter, setFilter] = useState({
    minPrice: 0,
    category: "all",
  });*/

  const getFetch = async () => {
    try {
      if (!url) return;

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error al obtener los datos");
      }

      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
      setProducts(null); // Limpiar los datos en caso de error
    }
  };

  /* const filterOfProducts = ({ products }) => {
    const newFilteredProducts = products.filter(
      (product) => product.price >= 0
    );
    setFilteredProducts(newFilteredProducts);
  };*/

  useEffect(() => {
    getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  /* useEffect(() => {
    if (products) {
      filterOfProducts(products);
    }
  }, [products]);*/

  //console.log("aca", filteredProducts);
  return products; // cuando quiero cambian por filteredProducts no llega nada
};
