import kae from "../assets/yukiwari_kae.jpg";

export default function CharaFavorite() {
  return (
    <section className="min-h-screen pt-28 2xl:pt-32 bg-pink-700 w-full">
      <h2 className="text-3xl md:text-5xl 2xl:text-7xl text-gray-800 text-center font-fredoka">
        Best Character Anime 2022 Versi{" "}
        <span className="text-yellow-300">Admin Denki</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-y-10 container mt-10 justify-between w-full mx-auto">
        {/* Yukiwari Kae */}
        <div className="w-full flex flex-col justify-center">
          <h3 className="text-xl md:text-3xl 2xl:text-5xl text-gray-800 font-fredoka text-center">
            Yukiwari <span className="text-yellow-300">Kae</span>
          </h3>
          <img
            src={kae}
            alt="Yukiwari Kae"
            className="brightness-110 w-3/5 2xl:w-4/5 mt-6 mb-12 mx-auto"
          />
          <p className="max-w-full w-3/5 2xl:w-4/5 text-sm md:text-md 2xl:text-lg font-nunito mx-auto">
            Seorang{" "}
            <span className="text-yellow-300">
              tuan putri dari Negeri Bambu
            </span>
            . Pada awalnya, ia berusaha menyembunyikan sifatnya yang santai,
            tapi akhirnya ia memutuskan untuk menjadi diri sendiri.{" "}
            <span className="hidden md:inline">
              Menjadi <span className="text-yellow-300">favorit admin</span>{" "}
              karena karakternya yang periang, ekspresif, serta seiyunya{" "}
              <span className="text-yellow-300">Inori Minase</span> .
            </span>
          </p>
        </div>

        {/* Ouga */}
        <div className="w-full flex flex-col justify-center">
          <h3 className="text-xl md:text-3xl 2xl:text-5xl text-gray-800 font-fredoka text-center">
            Ouga <span className="text-yellow-300">( Yatsume )</span>
          </h3>
          <img
            src={kae}
            alt="Ouga"
            className="brightness-110 w-3/5 2xl:w-4/5 mt-6 mb-12 mx-auto"
          />
          <p className="max-w-full w-3/5 2xl:w-4/5 text-sm md:text-md 2xl:text-lg font-nunito mx-auto">
            Seorang{" "}
            <span className="text-yellow-300">
              tuan putri dari Negeri Bambu
            </span>
            . Pada awalnya, ia berusaha menyembunyikan sifatnya yang santai,
            tapi akhirnya ia memutuskan untuk menjadi diri sendiri.{" "}
            <span className="hidden md:inline">
              Menjadi <span className="text-yellow-300">favorit admin</span>{" "}
              karena karakternya yang periang, ekspresif, serta seiyunya{" "}
              <span className="text-yellow-300">Inori Minase</span> .
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
