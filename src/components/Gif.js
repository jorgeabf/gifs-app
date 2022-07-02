import "./Gif.css";

export default function Gif({ id, title, url }) {
  return (
    <a href={`#${id}`} className="gif">
      <p className="gif-title">{title}</p>
      <img src={url} alt={title} className="gif-img" />
    </a>
  );
}
