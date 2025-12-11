import { Routes, Route } from 'react-router-dom';
import Layout from './shared/components/layout/Layout';

import HomePage from './features/home/pages/HomePage';
import AboutPage from './features/about/pages/AboutPage';
import ProductsPage from './features/products/pages/ProductsPage';
import ContactPage from './features/contact/pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
