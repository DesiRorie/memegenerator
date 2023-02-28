import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Meme from "./Meme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;
