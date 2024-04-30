const RenderProducts = ({ data }) => {
  console.log("data", data);

  // Verificar si data.products está definido y es un array
  if (!data || !data.products || !Array.isArray(data.products)) {
    return <div>No hay productos disponibles</div>;
  }
  return (
    <>
      {data.products.map((product) => (
        <div className="card" style={{ width: "18rem" }} key={product.id}>
          <img
            src={product.images[0]}
            className="card-img-top"
            alt="..."
            style={{ width: "10rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
          </div>
        </div>
      ))}
    </>
  );
};
export default RenderProducts;
