import { useEffect, useState } from "react";

const FetchinDatos = () => {
  // Estado para almacenar la respuesta de la API
  const [respuestaAPI, setRespuestaAPI] = useState(null);
  const [urlApi, setUrlApi] = useState("");

  // Función para realizar la solicitud fetch a la API
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRespuestaAPI(data);
      //console.log(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    console.log("render");
    if (urlApi) {
      fetchData(urlApi);
    }
  }, [urlApi]);

  const handleUrl = (url) => {
    setUrlApi(url);
  };

  const handleClear = () => {
    setRespuestaAPI(null);
    setUrlApi(null);
  };

  return (
    <>
      <h2>Elije una api de las siguiente y veras a los personajes</h2>
      <button
        className="btn btn-success"
        onClick={() =>
          handleUrl("https://pokeapi.co/api/v2/pokemon/charmander")
        }
      >
        Pokeapi
      </button>
      <div>
        {respuestaAPI && (
          /*<pre>
            {JSON.stringify(respuestaAPI.sprites.back_default, null, 2)}
          </pre>*/
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={respuestaAPI.sprites.back_default}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{respuestaAPI.species.name}</h5>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClear}
              >
                Limpiar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FetchinDatos;
