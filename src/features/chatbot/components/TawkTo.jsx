import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = "https://embed.tawk.to/6932087cf66a4c198b426c1a/1jc84k8vc";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    s0.parentNode.insertBefore(s1, s0);
  }, []);

  return null;
}
