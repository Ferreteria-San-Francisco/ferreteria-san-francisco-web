import TawkTo from "../../chatbot/components/TawkTo.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/ServicesSection.jsx";
import FAQSection from "../components/FAQSection.jsx";
import BannerSlider from "../components/BannerSlider.jsx";

export default function HomePage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center pointer-events-none">
            {/* Hero */}
            <Hero />

            {/* Servicio Section */}
            <Services />

            {/* BannerSlider */}
            <BannerSlider />

            {/* FAQ Section */}
            <FAQSection />

            {/* Chatbot */}
            <TawkTo />

        </div>
    );
}
