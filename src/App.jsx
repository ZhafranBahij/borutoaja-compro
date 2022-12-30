import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
// import CharaFavorite from "./components/Charafavorite";
import About from "./components/About";
import Topic from "./components/Topic";
// import borutoajaLogo from "./assets/Boruto.svg";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-800 ">
      <Navbar />
      <Profile />
      <About />
      <Topic />

      {/* <section className="min-h-screen"></section> */}
    </div>
  );
}

export default App;
