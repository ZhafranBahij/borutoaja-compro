import konohamaru from "../assets/konohamaru_smile.jpg";
import sasuke from "../assets/Sasuke_resize.jpg";

export default function Topic() {
  return (
    <section
      id="topic"
      className="min-h-screen pt-28 2xl:pt-32 bg-gray-800 w-full bg-contain bg-no-repeat md:bg-cover bg-black-wave"
    >
      <h2 className="text-3xl md:text-5xl 2xl:text-7xl text-pink-700 text-center font-fredoka md:mt-20">
        Topic <span className="text-yellow-300">Borutoaja.id</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-y-10 container mt-10 justify-between w-full mx-auto ">
        <div className="w-full flex flex-col">
          <h3 className="text-xl md:text-3xl 2xl:text-5xl text-pink-700 font-fredoka text-center">
            Anime <span className="text-yellow-300">Boruto & Naruto</span>{" "}
          </h3>
          <img
            src={konohamaru}
            alt="Konohamaru"
            className="brightness-110 w-3/5 2xl:w-4/5 mt-6 mb-6 mx-auto"
          />
          <p className="max-w-full w-3/5 2xl:w-4/5 text-sm md:text-lg 2xl:text-xl font-nunito mx-auto">
            Sudah sewajarnya FP Boruto membahas mengenai Boruto & Naruto
            meskipun di sini lebih dominan bahas Boruto. Berusaha update
            mengenai informasi anime terkini termasuk filler.
          </p>
        </div>

        <div className="w-full flex flex-col">
          <h3 className="text-xl md:text-3xl 2xl:text-5xl text-pink-700 font-fredoka text-center">
            Manga <span className="text-yellow-300">Boruto</span>{" "}
          </h3>
          <img
            src={konohamaru}
            alt="Konohamaru"
            className="brightness-110 w-3/5 2xl:w-4/5 mt-6 mb-6 mx-auto"
          />
          <p className="max-w-full w-3/5 2xl:w-4/5 text-sm md:text-lg 2xl:text-xl font-nunito mx-auto">
            Membahas manga Boruto sampai chapter terbaru. Menyebarkan spoiler
            dari pihak yang terpercaya. Setiap ada spoiler manga, admin usahakan
            ada peringatan.
          </p>
        </div>

        <div className="w-full flex flex-col">
          <h3 className="text-xl md:text-3xl 2xl:text-5xl text-pink-700 font-fredoka text-center">
            Berita <span className="text-yellow-300">Boruto</span>{" "}
          </h3>
          <img
            src={konohamaru}
            alt="Konohamaru"
            className="brightness-110 w-3/5 2xl:w-4/5 mt-6 mb-6 mx-auto"
          />
          <p className="max-w-full w-3/5 2xl:w-4/5 text-sm md:text-lg 2xl:text-xl font-nunito mx-auto">
            Biasanya menyampaikan berita dari informasi yang terpercaya melalui
            IG Story. Kalau butuh informasi lengkap, seringkali admin sediakan
            di postingan.
          </p>
        </div>

        <div className="w-full flex flex-col">
          <h3 className="text-xl md:text-3xl 2xl:text-5xl text-pink-700 font-fredoka text-center">
            Seiyu <span className="text-yellow-300">Anime Boruto</span>{" "}
          </h3>
          <img
            src={konohamaru}
            alt="Konohamaru"
            className="brightness-110 w-3/5 2xl:w-4/5 mt-6 mb-6 mx-auto"
          />
          <p className="max-w-full w-3/5 2xl:w-4/5 text-sm md:text-lg 2xl:text-xl font-nunito mx-auto">
            Beberapa minggu sekali membahas mengenai Seiyu-seiyu yang ada di
            anime Boruto. Tidak begitu sering dibahas karena bukan ini tujuan
            orang mengikuti anime Boruto.
          </p>
        </div>
      </div>
    </section>
  );
}
