import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactFormRHF() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [status, setStatus] = useState({ ok: null, msg: "" });

  const onSubmit = async (data) => {
    setStatus({ ok: null, msg: "Enviando..." });

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch("https://formspree.io/f/xdkqrpro", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error();

      reset();
      setStatus({ ok: true, msg: "Mensaje enviado. ¡Gracias!" });
    } catch {
      setStatus({ ok: false, msg: "Hubo un error. Intentá más tarde." });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-8 rounded-xl border border-gray-300 shadow-sm"
    >
      {/* Antispam */}
      <input type="text" name="_gotcha" className="hidden" />

      {/* Nombre */}
      <div>
        <label className="block mb-1 font-medium">Nombre *</label>
        <input
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Tu nombre"
          {...register("name", { required: "Ingresá tu nombre" })}
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-medium">Email *</label>
        <input
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="ejemplo@correo.com"
          {...register("email", {
            required: "Ingresá un email",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Teléfono opcional */}
      <div>
        <label className="block mb-1 font-medium">Teléfono (opcional)</label>
        <input
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Opcional"
          {...register("phone")}
        />
      </div>

      {/* Mensaje */}
      <div>
        <label className="block mb-1 font-medium">Mensaje *</label>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2"
          rows={5}
          placeholder="Contanos tu consulta"
          {...register("message", { required: "Debe haber un mensaje" })}
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Botón + estado */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-md shadow hover:brightness-95 disabled:opacity-60"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando…" : "Enviar"}
        </button>

        {status.msg && (
          <span
            className={`text-sm ${
              status.ok ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.msg}
          </span>
        )}
      </div>
    </form>
  );
}
