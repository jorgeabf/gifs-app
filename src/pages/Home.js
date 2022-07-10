import { Link, useLocation } from "wouter";
import { useState } from "react";
import ListOfGifs from "../components/ListOfGifs";
import { useGifs } from "../hooks/useGifs";

const POPULAR_GIFS = [
  "Ajedrez",
  "Chess.com",
  "Carlsen",
  "Nakamura",
];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="mx-auto">
      <h1>JorgeAbf Gifs App</h1>
      <form className="form mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar un GIF"
          className="form-input"
          value={keyword}
          onChange={handleChange}
        ></input>
      </form>
      <hr />
      <h2>Últimas búsquedas:</h2>
      <ListOfGifs gifs={gifs} />
      <h2>Los Gifs más populares:</h2>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>
              Gifs de {popularGif}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
