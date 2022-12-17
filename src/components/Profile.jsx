export default function Profile() {
  return (
    <section className="flex h-screen justify-center container mx-auto items-center">
      <div>
        <h1 className="text-5xl text-pink-500 text-center font-fredoka">
          Borutoaja<span className="text-yellow-200">.id</span>
        </h1>
        <h2 className="text-xl mt-4 text-center font-nunito text-pink-700">
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
