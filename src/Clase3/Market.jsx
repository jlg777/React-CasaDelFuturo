import { useState } from "react";
import "./market.css";

const Market = ({ superM }) => {
  const [selectedProduct, setSelectedProduct] = useState(""); // Estado para almacenar el producto seleccionado
  const [marketProduct, setMarketProduct] = useState(superM);

  const handleProductoChange = (event) => {
    const selectedValue = event.target.value;
    if (event.target.value === "Todos") {
      const filteredProducts = superM.filter(
        (producto) => producto.name !== selectedValue
      );
      setMarketProduct(filteredProducts);
    } else {
      const filteredProducts = superM.filter(
        (producto) => producto.name === selectedValue
      );

      setMarketProduct(filteredProducts);
    }
  };

  switch (selectedProduct) {
    case "Leche":
      //console.log("Leche.");
      break;
    case "Pan":
      console.log("Pan.");
      break;
    case "Huevos":
      console.log("Huevos.");
      break;
    case "Arroz":
      console.log("Arroz.");
      break;
    case "Pollo":
      console.log("Pollo.");
      break;
    case "Tomate":
      console.log("Tomate.");
      break;
    case "Cebolla":
      console.log("Cebolla.");
      break;
    case "Papas":
      console.log("Papas.");
      break;
    case "Manzanas":
      console.log("Manzanas.");
      break;
    case "Plátanos":
      console.log("Plátanos.");
      break;
    case "agua":
      console.log("Plátanos.");
      break;
  }

  return (
    <>
      <select
        name="filtro"
        onChange={handleProductoChange}
        value={selectedProduct}
      >
        <option value="">Selecciona un producto</option>
        {superM.map((producto) => (
          <option key={producto.id} value={producto.name}>
            {producto.name}
          </option>
        ))}
        <option>Todos</option>
      </select>
      <div className="carta">
        {marketProduct.map((item) => (
          <div className="card" key={item.id}>
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {item.description}
            </h6>
            <p className="card-text">Stock:{item.stock}</p>
            <p className={item.availability ? "text-success" : "text-danger"}>
              {item.availability ? "Disponible" : "No Disponible"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Market;
