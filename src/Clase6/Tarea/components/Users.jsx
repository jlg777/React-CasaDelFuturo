import { useEffect, useState } from "react";

const Users = () => {
  const [respuestaAPI, setRespuestaAPI] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setRespuestaAPI(data.results);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {respuestaAPI.map((user) => (
        <div className="card" style={{ width: "18rem" }} key={user.login.uuid}>
          <img src={user.picture.large} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {user.name.title} {user.name.first} {user.name.last}
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Users;
