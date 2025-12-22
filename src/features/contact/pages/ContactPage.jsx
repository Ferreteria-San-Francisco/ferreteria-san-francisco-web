import TawkTo from "../../chatbot/components/TawkTo.jsx";
import GoogleMap from "../components/GoogleMap.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contacto"
        description="Contactanos. Encontrá nuestra ubicación, teléfono, email y horarios de atención."
        url="/contacto"
      />

      <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-4 ">Contacto</h1>

        <div className="w-12 h-1 bg-primary mb-4 rounded-full mx-auto" />

        {/* Formulario + Información de Contacto */}
        <div className="space-y-12">
          <ContactForm />
          
        </div>

        {/* Mapa */}
        <GoogleMap />

        <div className="mt-12">
        {/* Información de contacto */}
        <ContactInfo />
        </div>

        {/* Chatbot */}
        <div className="mt-12">
          <TawkTo />
        </div>
      </div>
    </>
  );
}
