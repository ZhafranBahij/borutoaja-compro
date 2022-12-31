import konohamaru from "../assets/konohamaru_smile.jpg";

export default function TopicBox({
  title,
  yellowTitle,
  image,
  description,
  reverse = false,
}) {
  let boxClassName = "w-full flex flex-col md:flex-row";

  if (reverse) {
    boxClassName = "w-full flex flex-col md:flex-row-reverse";
  }

  return (
    <div className={boxClassName}>
      <div className="w-1/2 justify-center mx-auto" data-aos="zoom-in-right">
        <h3 className="text-xl md:text-3xl 2xl:text-5xl text-pink-700 font-fredoka text-center">
          {title} <span className="text-yellow-300">{yellowTitle}</span>{" "}
        </h3>
        <img
          src={image}
          alt={title}
          className="brightness-110 w-full md:w-3/5 2xl:w-4/5 mt-6 mb-6 mx-auto"
        />
      </div>
      <p
        className="max-w-full w-1/2 text-md md:text-lg 2xl:text-xl font-nunito mx-auto items-center my-auto hover:shadow-lg hover:shadow-pink-300/80 text-pink-300 ring-2 ring-pink-300/70 rounded-lg px-4 py-2"
        data-aos="zoom-in-left"
        data-aos-delay="500"
      >
        {description}
      </p>
    </div>
  );
}
