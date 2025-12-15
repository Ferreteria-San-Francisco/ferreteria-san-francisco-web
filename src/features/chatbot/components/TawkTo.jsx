import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    if (window.Tawk_API) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6932087cf66a4c198b426c1a/1jbln29r8";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
