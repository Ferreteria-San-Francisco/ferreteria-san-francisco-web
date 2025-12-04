export default function HomePage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">

            {/*Hero Section*/}
            <section className="mb-16 text-center">
                <div className="relative h-96 overflow-hidden rounded-x1 shadow-lg">
                    <img
                        src="src/assets/images/hero-ferreteria.jpg"
                        alt="Ferretería San Francisco"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
                        <h1 className="text-5xl font-bold text-white-800 mb-4 shadow-2xl">
                            Bienvenido a Ferretería San Francisco
                        </h1>

                        <p className="text-xl text-gray-600">
                            🛠️ Sitio en construcción. Próximamente mas contenido.
                        </p>
                    </div>
                </div>
            </section> {/*Cierre Hero Section*/}

            {/* Servicio Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Nuestros Servicios
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Servicio 1 */}
                    <div className="bg-white p-6 rounded-x1 shadow-md text-center">
                        <div className="text-yellow-400 text-5xl mb-4"> 🛠️ </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800"> Venta de Herramientas </h3>
                        <p className="text-gray-600">
                            Amplio catálogo de herramientas manuales, eléctricas y profesionales.
                        </p>
                    </div>

                    {/* Servicio 2 */}
                    <div className="bg-white p-6 rounded-x1 shadow-md text-center">
                        <div className="text-yellow-400 text-5xl mb-4"> 🚚 </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800"> Entrega de Gas </h3>
                        <p className="text-gray-600">
                            Llevamos tus garrafas de gas hasta tu casa u obra en menos de 48 horas.
                        </p>
                    </div>

                    {/* Servicio 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-yellow-400 text-5xl mb-4"> 🛒 </div>
                        <h3 className="text-2xl font-bold mb-3">Asesoría Técnica</h3>
                        <p className="text-gray-600"> 
                            Nuestros expertos te ayudan a elegir el mejor producto para vos.
                        </p>
                    </div>
                </div>
            </section> {/* Cierre Service Section */}
        </div>
    );
}
