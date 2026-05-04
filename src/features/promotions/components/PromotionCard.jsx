export default function PromotionCard({ image, label }) {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-md group">
      <img
        src={image}
        alt={label}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <span className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full shadow">
        {label}
      </span>
    </div>
  );
}
