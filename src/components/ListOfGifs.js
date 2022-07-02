import Gif from "./Gif";
import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import "./ListOffGifs.css";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);

  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );
  if (loading) return <p>Cargando...</p>;
  return (
    <div className="listOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
}
