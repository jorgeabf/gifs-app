import "./App.css";
import { useState, useEffect } from "react";
import getGifs from "./services/getGifs";

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword: "chess" }).then((gifs) =>
      setGifs(gifs)
    );
  }, []);

  return (
    <div className="app">
      {gifs.map((gif) => (
        <img key={gif} src={gif} alt="" />
      ))}
    </div>
  );
}

//* Minuto 46:00 Extrayendo lógica
