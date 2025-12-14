import { Routes, Route } from "react-router-dom";
import Layout from "../../shared/components/layout/Layout.jsx";
import HomePage from "../../features/home/pages/HomePage.jsx";
import AboutPage from "../../features/about/pages/AboutPage.jsx";
import BrandsPage from "../../features/brands/pages/BrandsPage.jsx";
import ContactPage from "../../features/contact/pages/ContactPage.jsx";
import ProductsPage from "../../features/products/pages/ProductsPage.jsx";

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Layout>
  );
}
