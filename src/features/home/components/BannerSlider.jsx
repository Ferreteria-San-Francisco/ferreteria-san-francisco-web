import { useEffect, useState } from "react";

import Slide1 from "../../../banner/banner-slide1.jpg";
import Slide2 from "../../../banner/banner-slide2.jpg";
import Slide3 from "../../../banner/banner-slide3.jpg";
import Slide4 from "../../../banner/banner-slide4.jpg";

const slides = [
  {
    title: "Calidad que construye confianza",
    subtitle: "Materiales y atención pensados para durar",
    image: {Slide1},
    titleColor: "text-primary-light",
  },
  {
    title: "Todo para tu obra",
    subtitle: "Desde el cimiento hasta el último detalle",
    image: {Slide2},
    titleColor: "text-primary-light",
  },
  {
    title: "Asesoramiento profesional",
    subtitle: "Te ayudamos a elegir lo que realmente necesitás",
    image: {Slide3},
    titleColor: "text-primary-light",
  },
  {
  title: "Todo en un solo lugar",
  subtitle:
    "Ferretería, electricidad, sanitarios, herramientas, construcción, aberturas, forrajería, bicicletería, gas y más",
  image: {Slide4},
  titleColor: "text-primary-light", 
  }
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
    <section className="relative w-full h-[420px] mb-24 overflow-hidden rounded-3xl shadow-lg">
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
            <div className="p-8 text-left text-white max-w-xl">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-2 ${slide.titleColor}`}
              >
                {slide.title}
              </h2>

              <p className="text-lg text-white/90">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
