export default function PromotionCard({ image, label }) {
  return (
    <article className="relative overflow-hidden rounded-2xl shadow-md group bg-white">
      <img
        src={image}
        alt={label}
        loading="lazy"
        className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Badge */}
      <span className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full shadow pointer-events-none">
        {label}
      </span>
    </article>
  );
}
