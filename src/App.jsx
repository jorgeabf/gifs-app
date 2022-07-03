import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

export default function App() {
  return (
    <StaticContext.Provider
      value={{ name: "jordi", suscricbirse: true }}
    >
      <div className="app">
        <div className="app-container">
          <Link to="/">
            <img
              className="logo"
              src="/logo.svg"
              alt="Logo Gifs"
            />
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route
              path="/search/:keyword"
              component={SearchResults}
            />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </div>
      </div>
    </StaticContext.Provider>
  );
}

//* Minuto 41, Video Creando Custom Hooks
