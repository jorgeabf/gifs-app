import Gif from "./Gif";
import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import "./ListOffGifs.css";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );

  return (
    <div className="listOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
}
