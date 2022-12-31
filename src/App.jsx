import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
// import CharaFavorite from "./components/Charafavorite";
import About from "./components/About";
import Topic from "./components/Topic";
// import borutoajaLogo from "./assets/Boruto.svg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

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

AOS.init({
  offset: 100, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true,
});

export default App;
