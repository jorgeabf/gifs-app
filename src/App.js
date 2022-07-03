import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Link to="/">
          <img
            className="logo"
            src="/logo.svg"
            alt="Logo Gifs"
          />
        </Link>
        <Route path="/" component={Home} />
        <Route
          path="/search/:keyword"
          component={SearchResults}
        />
        <Route path="/gif/:id" component={Detail} />
      </div>
    </div>
  );
}

//* Minuto 41, Video Creando Custom Hooks
