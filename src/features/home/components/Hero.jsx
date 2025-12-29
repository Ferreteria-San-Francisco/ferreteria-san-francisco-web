export default function Hero() {
    return (
        <section className="mb-16 text-center">
            <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">

                <img
                    src="src/assets/images/hero-ferreteria.jpg"
                    alt="Ferretería San Francisco"
                    className="w-full h-full object-cover"
                />

        
                <div className="absolute inset-0 bg-black/30" />

     
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                    <p className="text-3xl mb-3 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                        Bienvenido a
                    </p>

                    <h1 className="text-5xl font-bold text-primary-light drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)]">
                        Ferretería San Francisco
                    </h1>

                    <p className="mt-4 max-w-xl text-white text-lg">
                        Todo en ferretería, herramientas, gas y asesoramiento técnico en un solo lugar.
                    </p>
                </div>

            </div>
        </section>
    );
}
