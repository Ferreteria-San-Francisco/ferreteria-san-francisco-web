import { useEffect, useState } from 'react';
import { isNavidad } from '../config/seasonal.js';

const CHECK_INTERVAL_MS = 60 * 60 * 1000; // revisa cada hora por si la pestaña queda abierta

/**
 * Indica si el sitio está en temporada navideña y agrega la clase
 * `navidad` al <html> para que los estilos festivos se apliquen en todo el sitio.
 */
export function useNavidad() {
  const [active, setActive] = useState(() => isNavidad());

  useEffect(() => {
    const id = setInterval(() => setActive(isNavidad()), CHECK_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('navidad', active);
  }, [active]);

  return active;
}
