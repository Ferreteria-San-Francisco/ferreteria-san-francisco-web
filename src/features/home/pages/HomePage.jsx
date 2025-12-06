export default function HomePage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">

            {/* Hero Section */}
            <section className="mb-16 text-center">
                <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
                    <img
                    src="src/assets/images/hero-ferreteria.jpg"
                    alt="Ferretería San Francisco"
                    className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Contenido */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                    <p
                        className="
                        text-3xl mb-3 text-white
                        drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]
                        "
                    >
                        Bienvenido a
                    </p>

                    <h1
                        className="
                        text-5xl font-bold text-primary-light
                        drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)]
                        "
                    >
                        Ferretería San Francisco
                    </h1>

                    <p className="mt-4 max-w-xl text-white text-lg">
                        Todo en ferretería, herramientas, gas y asesoramiento técnico en un solo lugar.
                    </p>
                    </div>
                </div>
            </section>{/* Cierre Hero Section */}

            {/* Servicio Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Nuestros Servicios
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Servicio 1 */}
                    <div className="bg-gray-100 p-6 rounded-xl border border-gray-300 shadow-sm text-center">
                        <div className="text-primary-light text-5xl mb-4"> 🛠️ </div>
                        <h3 className="text-2xl font-bold mb-3 text-primary-light"> Venta de Herramientas </h3>
                        <p className="text-gray-600">
                            Amplio catálogo de herramientas manuales, eléctricas y profesionales.
                        </p>
                    </div>

                    {/* Servicio 2 */}
                    <div className="bg-gray-100 p-6 rounded-xl border border-gray-300 shadow-sm text-center">
                        <div className="text-primary-light text-5xl mb-4"> 🚚 </div>
                        <h3 className="text-2xl font-bold mb-3 text-primary-light"> Entrega de Gas </h3>
                        <p className="text-gray-600">
                            Llevamos tus garrafas de gas hasta tu casa u obra en menos de 48 horas.
                        </p>
                    </div>

                    {/* Servicio 3 */}
                    <div className="bg-gray-100 p-6 rounded-xl border border-gray-300 shadow-sm text-center">
                        <div className="text-primary-light text-5xl mb-4"> 🛒 </div>
                        <h3 className="text-2xl font-bold mb-3 text-primary-light">Asesoría Técnica</h3>
                        <p className="text-gray-600"> 
                            Nuestros expertos te ayudan a elegir el mejor producto para vos.
                        </p>
                    </div>
                </div>
            </section> {/* Cierre Service Section */}
        </div>
    );
}
