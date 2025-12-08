import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    // Evitar duplicar el script en caso de recargas
    if (window.Tawk_API) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6932087cf66a4c198b426c1a/1jbln29r8";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      // Limpia si el componente se desmonta (no siempre necesario)
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
