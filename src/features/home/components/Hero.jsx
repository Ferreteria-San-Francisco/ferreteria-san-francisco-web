import HeroImg from '../../../assets/images/hero-ferreteria.jpg';
import { isNavidad } from '../../../shared/config/seasonal.js';

export default function Hero() {
    const navidad = isNavidad();

    return (
        <section className="mb-16 text-center">
            <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">

                <img
                    src= {HeroImg}
                    alt="Ferretería San Francisco"
                    className="w-full h-full object-cover"
                />

        
                <div className="absolute inset-0 bg-black/30" />

     
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                    <p className="text-3xl mb-3 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                        {navidad ? '🎄 ¡Felices Fiestas! Bienvenido a' : 'Bienvenido a'}
                    </p>

                    <h1 className="text-5xl font-bold text-primary-light drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)]">
                        Ferretería San Francisco
                    </h1>

                    <p className="mt-4 max-w-xl text-white text-lg">
                        Todo en ferretería, herramientas, gas y asesoramiento técnico en un solo lugar.
                    </p>

                    {navidad && (
                        <p className="mt-4 inline-block rounded-full bg-red-700/90 px-5 py-2 text-white font-semibold shadow-lg">
                            🎁 Encontrá el regalo ideal para estas fiestas
                        </p>
                    )}
                </div>

            </div>
        </section>
    );
}
