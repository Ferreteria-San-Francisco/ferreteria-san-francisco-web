import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './shared/components/layout/Layout';

const HomePage = lazy(() => import('./features/home/pages/HomePage'));
const AboutPage = lazy(() => import('./features/about/pages/AboutPage'));
const ProductsPage = lazy(() => import('./features/products/pages/ProductsPage'));
const ContactPage = lazy(() => import('./features/contact/pages/ContactPage'));

function App() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-xl">Cargando...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
