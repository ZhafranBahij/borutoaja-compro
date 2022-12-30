import konohamaru from "../assets/konohamaru_smile.jpg";
import sasuke from "../assets/Sasuke_resize.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-28 2xl:pt-32 bg-pink-700 w-full "
    >
      <h2 className="text-3xl md:text-5xl 2xl:text-7xl text-gray-800 text-center font-fredoka">
        Tentang <span className="text-yellow-300">Borutoaja.id</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-y-10 container mt-10 justify-between w-full mx-auto ">
        {/* Yukiwari Kae */}
        <div className="w-full flex flex-col">
          <h3 className="text-xl md:text-3xl 2xl:text-5xl text-gray-800 font-fredoka text-center">
            Asal-Usul <span className="text-yellow-300">( Sejarah )</span>{" "}
          </h3>
          <img
            src={konohamaru}
            alt="Konohamaru"
            className="brightness-110 w-3/5 2xl:w-4/5 mt-6 mb-6 mx-auto"
          />
          <p className="max-w-full w-3/5 2xl:w-4/5 text-sm md:text-lg 2xl:text-xl font-nunito mx-auto">
            Didirikan pada{" "}
            <span className="text-yellow-300">
              awal Februari 2021 oleh 5 pemuda
            </span>
            dengan alasan ingin berkonten sambil mencari sampingan.{" "}
            <span className="text-yellow-300">Membahas tentang Boruto</span>{" "}
            karena kala itu lagi ramai.
          </p>
        </div>

        {/* Ouga */}
        <div className="w-full flex flex-col">
          <h3 className="text-xl md:text-3xl 2xl:text-5xl text-gray-800 font-fredoka text-center">
            Admin <span className="text-yellow-300">( Staff )</span>
          </h3>
          <img
            src={sasuke}
            alt="Sasuke"
            className="brightness-110 w-3/5 2xl:w-4/5 mt-6 mb-6 mx-auto"
          />
          <p className="max-w-full w-3/5 2xl:w-4/5 text-sm md:text-lg 2xl:text-xl font-nunito mx-auto">
            Sejauh ini ada 2 admin yaitu{" "}
            <span className="text-yellow-300">Admin Denki</span> sang{" "}
            <span className="text-yellow-300">content writer</span> (intinya
            yang buat konten) dan{" "}
            <span className="text-yellow-300">Admin Sasuke</span> sang{" "}
            <span className="text-yellow-300">pengelola bisnis</span> .
          </p>
        </div>
      </div>
    </section>
  );
}
