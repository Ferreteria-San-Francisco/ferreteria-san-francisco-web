/**
 * Temporadas festivas del sitio.
 *
 * Las fechas están en hora de Argentina (UTC-3).
 * - inicio: inclusive
 * - fin: exclusivo (el tema se apaga a las 00:00 de ese día)
 *
 * Para previsualizar sin esperar a la fecha: agregar ?navidad=1 a la URL
 * (y ?navidad=0 para forzar el modo normal).
 */
export const NAVIDAD = {
  inicio: new Date('2026-12-08T00:00:00-03:00'), // 8 de diciembre de 2026
  fin: new Date('2027-01-07T00:00:00-03:00'), // incluye todo el 6 de enero de 2027
};

function getOverride() {
  try {
    const value = new URLSearchParams(window.location.search).get('navidad');
    if (value === '1') return true;
    if (value === '0') return false;
  } catch {
    // sin window (build/SSR) o URL inválida
  }
  return null;
}

export function isNavidad(now = new Date()) {
  const override = getOverride();
  if (override !== null) return override;
  return now >= NAVIDAD.inicio && now < NAVIDAD.fin;
}
