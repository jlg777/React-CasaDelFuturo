import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [userAPI, setUserAPI] = useState([]);
  const { idUser } = useParams();
  const userID = idUser;

  const fetchData = async (idUser) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${userID}`
      );
      const data = await response.json();
      setUserAPI(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card" style={{ width: "18rem" }} key={userAPI.id}>
      <img src={userAPI.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{userAPI.name}</h5>

        <p className="card-text">{userAPI.status}</p>
        <p className="card-text">{userAPI.species}</p>
        <Link to={`/`} className="btn btn-warning">
          volver
        </Link>
      </div>
    </div>
  );
};
export default User;
