import { Link } from "wouter";

export default function Detail({ params }) {
  return (
    <div>
      <h1>Detail. Gif con id {params.id}</h1>
      <Link to={`/`}>Home</Link>
    </div>
  );
}
