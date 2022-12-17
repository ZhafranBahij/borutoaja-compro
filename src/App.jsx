import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import borutoajaLogo from "./assets/Boruto.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen overflow-x-hidden bg-gray-700">
      <Navbar />
      <div className="flex flex-row-reverse h-screen container mx-auto items-center">
        <div className="w-1/2 flex flex-col">
          <h1 className="text-5xl text-pink-700">
            Borutoaja<span className="text-yellow-300">.id</span>
          </h1>
          <h2 className="text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architecto, obcaecati?
          </h2>
        </div>
        <div className="w-1/2">
          <img
            src={borutoajaLogo}
            alt="Borutoaja.id"
            className="brightness-110 rounded-full h-64"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
