import { Routes, Route } from 'react-router-dom';
import Layout from './shared/components/layout/Layout';

import HomePage from './features/home/pages/HomePage';
//import ProductsPage from './features/products/pages/ProductsPage';
//import AboutPage from './features/about/pages/AboutPage';
//import ContactPage from './features/contact/pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/productos" element={<ProductsPage />} /> */}
        {/* <Route path="/nosotros" element={<AboutPage />} /> */}
        {/* <Route path="/contacto" element={<ContactPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;