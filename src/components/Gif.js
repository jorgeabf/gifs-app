import "./Gif.css";
import { Link } from "wouter";

export default function Gif({ id, title, url }) {
  return (
    <div className="gif">
      <Link to={`/gif/${id}`} className="gif-link">
        <img src={url} alt={title} className="gif-img" />
        <p className="gif-title">{title}</p>
      </Link>
    </div>
  );
}
