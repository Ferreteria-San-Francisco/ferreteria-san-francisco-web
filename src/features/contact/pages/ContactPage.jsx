import TawkTo from "../../chatbot/components/TawkTo.jsx";
import GoogleMap from "../components/GoogleMap.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [status, setStatus] = useState({ loading:false, ok:null, msg:"" });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(s => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return { valid:false, msg:"Ingresá tu nombre" };
    if (!form.email.trim() || !/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(form.email)) return { valid:false, msg:"Ingresá un email válido" };
    if (!form.message.trim()) return { valid:false, msg:"Debe haber un mensaje" };
    return { valid:true };
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const v = validate();
    if (!v.valid) return setStatus({ loading:false, ok:false, msg:v.msg });
    setStatus({ loading:true, ok:null, msg:"Enviando…" });
    try {
      await fetch("/api/contact", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify(form)
      });
      setForm({ name:"", email:"", phone:"", message:"" });
      setStatus({ loading:false, ok:true, msg:"Mensaje enviado. Gracias!" });
    } catch {
      setStatus({ loading:false, ok:false, msg:"Error. Intentá más tarde." });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Contacto</h1>

      {/* Formulario + Datos */}
      <div className="space-y-12">
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
          <div>
            <label className="block mb-1 font-medium">Nombre *</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email *</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              name="email" value={form.email} onChange={handleChange}
              placeholder="ejemplo@correo.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Teléfono (opcional)</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2"
              name="phone" value={form.phone} onChange={handleChange}
              placeholder="Opcional"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Mensaje *</label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
              name="message" value={form.message} onChange={handleChange}
              rows={5} placeholder="Contanos tu consulta"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md shadow hover:brightness-95 disabled:opacity-60"
              disabled={status.loading}
            >
              {status.loading ? "Enviando…" : "Enviar"}
            </button>
            {status.msg && (
              <span className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>
                {status.msg}
              </span>
            )}
          </div>
        </form>

        {/* Información de Contacto */}
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
