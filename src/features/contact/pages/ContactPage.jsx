import TawkTo from "../../chatbot/components/TawkTo.jsx";
import GoogleMap from "../components/GoogleMap.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Contacto</h1>

      {/* Formulario + Información de Contacto */}
      <div className="space-y-12">
        <ContactForm />
        <ContactInfo />
      </div>

      {/* Mapa */}
      <GoogleMap />

      {/* Chatbot */}
      <div className="mt-12">
        <TawkTo />
      </div>
    </div>
  );
}
