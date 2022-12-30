export default function Profile() {
  return (
    <section
      id="home"
      className="flex h-screen justify-center items-center bg-pink-wave bg-cover"
    >
      <div className="container mx-auto ">
        <h1 className="text-3xl md:text-5xl 2xl:text-7xl text-pink-500 text-center font-fredoka">
          Borutoaja<span className="text-yellow-200">.id</span>
        </h1>
        <h2 className="text-md md:text-xl 2xl:text-3xl mt-4 text-center font-nunito text-pink-700">
          Akun yang Membahas Boruto baik dari{" "}
          <span className="text-yellow-300 font-bold">anime</span>,{" "}
          <span className="text-yellow-300 font-bold">berita terbaru</span>,{" "}
          <span className="text-yellow-300 font-bold">manga</span>, maupun{" "}
          <span className="text-yellow-300 font-bold">seiyu</span> juga dibahas.
        </h2>
      </div>
    </section>
  );
}
