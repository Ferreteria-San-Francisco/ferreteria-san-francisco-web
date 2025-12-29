import { marcas } from '../../../shared/data/marcas';
//import BrandsCard from '../../brands/pages/BrandsPage';
import SEO from '../../../shared/components/SEO';

export default function MarcasPage() {
  return (
    <>
      <SEO
        title="Marcas"
        description="Trabajamos con las mejores marcas del mercado. Stanley, Black & Decker, Tramontina y más."
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Nuestras Marcas
          </h1>
          <p className="text-gray-600 mt-2">
            Trabajamos con las principales marcas del mercado
          </p>
        </div>

        
        {marcas.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No hay marcas disponibles</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {marcas.map((marca) => (
              <BrandsCard
                key={marca.id}
                marca={marca}
              />
            ))}
          </div>
        )}

       
        {import.meta.env?.MODE === 'development' && (
          <div className="mt-8 p-3 bg-gray-50 text-xs rounded">
            <p>
              <strong>Debug:</strong> {marcas.length} marcas cargadas
            </p>
          </div>
        )}
      </div>
    </>
  );
}