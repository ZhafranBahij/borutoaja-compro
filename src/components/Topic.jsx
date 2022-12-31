import TopicBox from "../property/TopicBox";
import animePict from "../assets/boruto_ngeweb.jpg";
import beritaPict from "../assets/Kae_ngeweb.jpg";
import mangaPict from "../assets/borushiki_rasengan.png";
import seiyuPict from "../assets/himawari_kirakira.jpg";

export default function Topic() {
  return (
    <section
      id="topic"
      className="min-h-screen px-2 md:px-8 pt-4 2xl:pt-32 bg-gray-800 w-full bg-contain bg-no-repeat md:bg-cover"
    >
      <h2 className="text-3xl md:text-5xl 2xl:text-7xl text-pink-700 text-center font-fredoka md:mt-20">
        Konten <span className="text-yellow-300">Borutoaja.id</span>
      </h2>

      <div className="flex flex-col md:flex-col gap-y-10 container mt-10 justify-between w-full mx-auto ">
        <TopicBox
          title="Anime"
          yellowTitle="Boruto & Naruto"
          image={animePict}
          description="Membahas mengenai hal-hal seputar anime Boruto & Naruto meskipun cenderung membahas Boruto. Memberikan informasi terupdate tentang anime baru meskipun filler"
        />

        <TopicBox
          title="Manga"
          yellowTitle="Boruto"
          image={mangaPict}
          reverse={true}
          description="Spoiler serta info manga terbaru juga tidak kami lewatkan. Manga Boruto dirilis setiap bulan dan beberapa hari sebelum manganya rilis, spoiler sudah siap dibahas."
        />

        <TopicBox
          title="Berita"
          yellowTitle="Boruto"
          image={beritaPict}
          description="Membahas berita terbaru dari sumber terpercaya. Umumnya, berita akan diupdate secara berkala di IG Story. Jadi, pastikan lihat story IG borutoaja.id"
        />

        <TopicBox
          title="Seiyu"
          yellowTitle="Boruto"
          image={seiyuPict}
          reverse={true}
          description="Seiyu-seiyu juga dibahas sesekali agar tidak membosankan. Membahas mengenai seiyu Boruto yang berada di anime lain."
        />
      </div>
    </section>
  );
}
