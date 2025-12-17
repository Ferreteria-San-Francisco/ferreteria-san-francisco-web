import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './shared/components/layout/Layout';

const HomePage = lazy(() => import('./features/home/pages/HomePage'));
const AboutPage = lazy(() => import('./features/about/pages/AboutPage'));
const ProductsPage = lazy(() => import('./features/products/pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./features/products/pages/ProductDetailPage'));
const ContactPage = lazy(() => import('./features/contact/pages/ContactPage'));
const MarcasPage = lazy(() => import('./features/brands/pages/MarcasPage'));
const BrandDetailPage = lazy(() => import('./features/brands/pages/BrandDetailPage'));
const PromotionsPage = lazy(() => import('./features/promotions/pages/PromotionsPage'));
const NotFoundPage = lazy(() => import("./features/not-found/pages/NotFoundPage"));


function App() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-xl">Cargando...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/productos/:id" element={<ProductDetailPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/marcas" element={<MarcasPage />} />
          <Route path="/marcas/:id" element={<BrandDetailPage />} />
          <Route path="/promociones" element={<PromotionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;