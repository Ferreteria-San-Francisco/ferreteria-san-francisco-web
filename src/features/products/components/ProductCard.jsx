export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mt-2">
        {product.category}
      </p>
    </div>
  );
}