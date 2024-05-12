import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  const [respuestaAPI, setRespuestaAPI] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]"
      );
      const data = await response.json();
      setRespuestaAPI(data);
      //console.log(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="container2">
    <div className="carta">
        {respuestaAPI.map((user) => (
          <div className="card" style={{ width: "18rem" }} key={user.id}>
            <img src={user.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              {/*
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
      </p>
      */}

              <Link to={`/${user.id}`} className="btn btn-primary">
                Vista Previa
              </Link>
              <Link to={`/user/${user.id}`} className="btn btn-success">
                Ampliar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
      
      <hr />
      <hr />
      <hr />
      <hr />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Users;
