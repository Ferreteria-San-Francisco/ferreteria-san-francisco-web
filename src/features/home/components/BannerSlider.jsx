import { useEffect, useState } from "react";

const slides = [
  {
    title: "Calidad que construye confianza",
    subtitle: "Materiales y atención pensados para durar",
    image: "src/assets/images/home/banner/banner-slide1.jpg",
    titleColor: "text-primary-light",
  },
  {
    title: "Todo para tu obra",
    subtitle: "Desde el cimiento hasta el último detalle",
    image: "src/assets/images/home/banner/banner-slide2.jpg",
    titleColor: "text-primary-light",
  },
  {
    title: "Asesoramiento profesional",
    subtitle: "Te ayudamos a elegir lo que realmente necesitás",
    image: "src/assets/images/home/banner/banner-slide3.jpg",
    titleColor: "text-primary-light",
  },
  {
    title: "Todo en un solo lugar",
    subtitle:
      "Ferretería, electricidad, sanitarios, herramientas, construcción, aberturas, forrajería, bicicletería, gas y más",
    image: "src/assets/images/home/banner/banner-slide4.jpg",
    titleColor: "text-primary-light",
  },
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[260px] sm:h-[420px] mb-16 sm:mb-24 overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <div className="p-4 sm:p-8 text-left text-white max-w-xl">
              <h2
                className={`text-xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 ${slide.titleColor}`}
              >
                {slide.title}
              </h2>

              <p className="text-sm sm:text-base text-white/90 line-clamp-3">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
