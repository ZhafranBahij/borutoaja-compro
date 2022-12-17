import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
// import borutoajaLogo from "./assets/Boruto.svg";
import kae from "./assets/yukiwari_kae.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-800">
      <Navbar />
      <Profile />
      <section className="h-screen pt-28 2xl:pt-32 bg-pink-700 w-full">
        <h2 className="text-5xl text-gray-800 text-center font-fredoka">
          Best Character Versi{" "}
          <span className="text-yellow-300">Admin Denki</span>
        </h2>
        <div className="flex container mt-10 justify-between w-full mx-auto">
          <div className="w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl text-gray-800 font-fredoka text-center">
              Yukiwari <span className="text-yellow-300">Kae</span>
            </h3>
            <img
              src={kae}
              alt="Borutoaja.id"
              className="brightness-110 w-4/5 mt-6 mb-12"
            />
            <p className="max-w-full text-md 2xl:text-lg font-nunito">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illo
              delectus omnis ipsa ullam! Doloremque sequi saepe ad minus
              inventore repellendus praesentium tempore recusandae sapiente, non
              alias ea cumque quod, nemo in maxime aperiam nulla culpa eveniet
              earum consequuntur optio! Iure qui tempora dolore assumenda quae
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
