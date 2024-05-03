import { useState } from "react";
import { useFilterProviders } from "../hooks/useFilterProviders";

const Filter = ({ setFilter }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [category, setCategory] = useState("all");

  const handleMinPrice = (e) => {
    const newMinPrice = e.target.value;
    setMinPrice(newMinPrice);
    setFilter((prevFilter) => ({
      ...prevFilter,
      minPrice: newMinPrice,
    }));
  };

  const handleCategory = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setFilter((prevFilter) => ({
      ...prevFilter,
      category: newCategory,
    }));
  };

  const { nombre } = useFilterProviders();

  return (
    <>
      <h2>{nombre}</h2>
      <div>
        <label htmlFor="volume">Precio: {minPrice}</label>
        <input
          type="range"
          id="volume"
          name="volume"
          min={0}
          max={2000}
          value={minPrice}
          onChange={handleMinPrice}
        />
      </div>
      <div>
        <label htmlFor="selectOption">Selecciona una opción:</label>
        <select id="selectOption" value={category} onChange={handleCategory}>
          <option value="all">todos</option>
          <option value="smartphones">smartphones</option>
          <option value="laptops">laptops</option>
          <option value="fragrances">fragrances</option>
        </select>
      </div>
    </>
  );
};
export default Filter;
