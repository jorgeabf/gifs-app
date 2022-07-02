import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

export default function App() {
  return (
    <div className="app">
      <ListOfGifs keyword="star wars" />
    </div>
  );
}
