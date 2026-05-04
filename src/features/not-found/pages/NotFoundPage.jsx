import NotFoundMessage from "../components/NotFoundMessage";
import SEO from '../../../shared/components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Página no encontrada"
        description="La página que buscás no existe."
      />

      <section className="min-h-[70vh] flex items-center justify-center px-4">
        <NotFoundMessage />
      </section>
    </>
  );
}
