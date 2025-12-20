import { Link } from "react-router-dom";

const actions = [
  {
    to: "/",
    label: "Ir al inicio",
    primary: true,
  },
  {
    to: "/productos",
    label: "Ver productos",
  },
];

export default function NotFoundMessage() {
  return (
    <div className="max-w-xl mx-auto text-center px-4">
      <h1 className="text-6xl sm:text-7xl font-extrabold text-primary mb-4">
        404
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 mb-4">
        Esta página no existe… o se perdió entre pasillos, clavos y tornillos.
      </p>

      <p className="text-gray-500 mb-8">
        Probá volver al inicio o explorar nuestros productos.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {actions.map(({ to, label, primary }) => (
          <Link
            key={to}
            to={to}
            className={`px-6 py-3 rounded-xl transition font-medium
              ${
                primary
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
