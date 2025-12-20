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
        headers: { Accept: "application/json" },
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
      className="space-y-5 bg-white p-6 sm:p-8 rounded-xl border border-gray-300 shadow-sm"
    >
      {/* Antispam */}
      <input type="text" name="_gotcha" className="hidden" />

      {/* Nombre */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          Nombre <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Tu nombre"
          {...register("name", { required: "Ingresá tu nombre" })}
        />
        {errors.name && (
          <p className="text-red-600 text-xs mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
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
          <p className="text-red-600 text-xs mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          Teléfono (opcional)
        </label>
        <input
          type="tel"
          className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Ej: 381 123 4567"
          {...register("phone")}
        />
      </div>

      {/* Mensaje */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={4}
          placeholder="Contanos tu consulta"
          {...register("message", { required: "Debe haber un mensaje" })}
        />
        {errors.message && (
          <p className="text-red-600 text-xs mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Botón + estado */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-lg font-medium shadow hover:brightness-95 disabled:opacity-60 transition"
        >
          {isSubmitting ? "Enviando…" : "Enviar mensaje"}
        </button>

        {status.msg && (
          <span
            className={`text-xs sm:text-sm ${
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
