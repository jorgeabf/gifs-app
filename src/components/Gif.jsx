import "./Gif.css";
import { Link } from "wouter";

export default function Gif({
  id,
  title = "Gif sin título",
  url,
}) {
  return (
    <div className="gif">
      <Link to={`/gif/${id}`} className="gif-link">
        <img
          src={url}
          alt={title}
          className="gif-img"
          loading="lazy"
        />
        <h3 className="gif-title">{title}</h3>
      </Link>
    </div>
  );
}
