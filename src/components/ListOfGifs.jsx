import Gif from "./Gif";
import "./ListOffGifs.css";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="listOfGifs mb-3">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
