import { useEffect, useState } from "react";

function useFilter(products) {
  const [filteredProducts, setFilteredProducts] = useState(null);

  const [filter, setFilter] = useState({
    minPrice: 0,
    category: "smartphones",
  });

  const filterOfProducts = ({ products }) => {
    const newFilteredProducts = products.filter(
      (product) => product.category !== filter.category
    );
    console.log(newFilteredProducts);
    setFilteredProducts(newFilteredProducts);
  };

  useEffect(() => {
    if (products) {
      filterOfProducts(products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return filteredProducts;
}
export default useFilter;
