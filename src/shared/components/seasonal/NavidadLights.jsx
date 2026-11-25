const BULBS = 20;
const COLORS = ['#EF4444', '#FACC15', '#22C55E', '#3B82F6', '#F97316'];

// Cable en guirnalda: sube en los extremos de cada tramo y cae en el centro,
// donde cuelga cada lamparita. Coordenadas en un viewBox de 100 x 10.
const step = 100 / BULBS;
const wirePath =
  'M0,1 ' +
  Array.from({ length: BULBS }, (_, i) => {
    const center = (i + 0.5) * step;
    const end = (i + 1) * step;
    return `Q${center},13 ${end},1`;
  }).join(' ');

const bulbs = Array.from({ length: BULBS }, (_, i) => ({
  left: (i + 0.5) * step,
  color: COLORS[i % COLORS.length],
  duration: 1.2 + ((i * 7) % 10) / 10, // 1.2s – 2.1s
  delay: -((i * 3) % 8) / 4, // desfasadas para que no titilen todas juntas
}));

// Destellos sobre el header (posiciones en %).
const sparkles = [
  { left: 4, top: 30, size: 0.8, delay: 0 },
  { left: 18, top: 70, size: 0.6, delay: 1.1 },
  { left: 31, top: 25, size: 0.9, delay: 2.3 },
  { left: 44, top: 65, size: 0.7, delay: 0.6 },
  { left: 57, top: 35, size: 0.6, delay: 1.8 },
  { left: 69, top: 75, size: 0.8, delay: 2.9 },
  { left: 81, top: 28, size: 0.7, delay: 0.3 },
  { left: 93, top: 62, size: 0.9, delay: 1.5 },
];

export default function NavidadLights() {
  return (
    <>
      <div className="navidad-sparkles" aria-hidden="true">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="navidad-sparkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              fontSize: `${s.size}rem`,
              animationDelay: `${s.delay}s`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div className="navidad-lights" aria-hidden="true">
        <svg
          className="navidad-wire"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path d={wirePath} />
        </svg>
        {bulbs.map((b, i) => (
          <span
            key={i}
            className="navidad-bulb"
            style={{
              left: `${b.left}%`,
              '--bulb': b.color,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
