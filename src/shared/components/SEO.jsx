import { Helmet } from 'react-helmet-async';

const DEFAULT_TITLE = 'Ferretería San Francisco';
const DEFAULT_DESCRIPTION = 'Tu ferretería de confianza en San Francisco. Herramientas, materiales de construcción, pinturas y más.';
const SITE_URL = 'https://ferreteriasanfrancisco.com'; // Cambiar por URL real

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = '/og-image.jpg',
  url = '',
  type = 'website'
}) {
  const fullTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const fullUrl = `${SITE_URL}${url}`;

  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:site_name" content={DEFAULT_TITLE} />
      <meta property="og:locale" content="es_AR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Helmet>
  );
}