const FLAKES = 28;

// Valores fijos (no aleatorios en cada render) para que la nieve no "salte".
const flakes = Array.from({ length: FLAKES }, (_, i) => ({
  left: (i * 37) % 100,
  size: 0.6 + ((i * 7) % 10) / 10, // 0.6rem – 1.5rem
  duration: 9 + ((i * 13) % 12), // 9s – 20s
  delay: -((i * 11) % 20), // negativo: arranca ya repartida por la pantalla
  drift: ((i % 5) - 2) * 12, // px de vaivén lateral
  opacity: 0.45 + ((i * 3) % 6) / 10,
}));

export default function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {flakes.map((f, i) => (
        <span
          key={i}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}rem`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            opacity: f.opacity,
            '--drift': `${f.drift}px`,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}
