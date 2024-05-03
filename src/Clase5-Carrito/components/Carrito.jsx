import { useFetch } from "../hooks/useFetch";
import RenderProducts from "./RenderProducts";
import useFilter from "../hooks/useFilter";
import Filter from "./Filter";

const Carrito = () => {
  const products = useFetch("https://dummyjson.com/products?limit=15");

  const { filteredProducts, setFilter } = useFilter(products);

  return (
    <>
      <div className="body-carrito">
        <h2>Productos</h2>
        <Filter setFilter={setFilter} />
        <RenderProducts productsFiltered={filteredProducts || []} />
      </div>
    </>
  );
};
export default Carrito;
