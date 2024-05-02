import { useState } from "react";

const Filter = () => {
  const [minPrice, SetMinPrice] = useState(0);

  const handleMinPrice = (e) => {
    SetMinPrice(e.target.value);
  };

  return (
    <>
      <label htmlFor="volume">Precio: {minPrice}</label>
      <input
        type="range"
        id="volume"
        name="volume"
        min={0}
        max={2000}
        onChange={handleMinPrice}
      />
    </>
  );
};
export default Filter;
