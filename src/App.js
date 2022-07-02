import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="app">
      <Link to="/gif/chess">Gifs de Ajedrez</Link>
      <Link to="/gif/homer">Gifs de Homer</Link>
      <Link to="/gif/rick">Gifs de Rick</Link>
      <Route path="/gif/:keyword" component={ListOfGifs} />
    </div>
  );
}
