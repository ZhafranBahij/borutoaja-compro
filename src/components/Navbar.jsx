import borutoajaLogo from "../assets/Boruto.svg";

export default function Navbar() {
  return (
    <header className="fixed text-pink-700 shadow-lg bg-gray-800">
      <nav className="flex px-8 py-4 justify-around w-screen items-center ">
        <div className="w-full md:w-1/2 flex items-center">
          <img
            src={borutoajaLogo}
            alt="Borutoaja.id"
            className="brightness-110 rounded-full h-12"
          />
          <span className="text-2xl font-bold ml-4 ">
            {" "}
            Borutoaja<span className="text-yellow-300">.id</span>
          </span>
        </div>
        <div className="md:w-1/2 pr-16 hidden md:block">
          <ul className="flex gap-x-3 items-center justify-end">
            <li className="hover:text-yellow-300">Home</li>
            <li className="hover:text-yellow-300">About</li>
            <li className="hover:text-yellow-300">Topic</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
