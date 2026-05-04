import { Link } from "react-router-dom";

export default function NotFoundMessage() {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-7xl font-extrabold text-primary mb-4">
        404
      </h1>

      <p className="text-xl text-gray-600 mb-6">
        Esta página no existe… o se perdió entre pasillos, clavos y tornillos.
      </p>

      <p className="text-gray-500 mb-8">
        Probá volver al inicio o explorar nuestros productos.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition"
        >
          Ir al inicio
        </Link>

        <Link
          to="/productos"
          className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Ver productos
        </Link>
      </div>
    </div>
  );
}
