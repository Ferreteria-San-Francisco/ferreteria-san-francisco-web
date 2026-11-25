import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FaqChatWidget from '../FaqChatWidget.jsx';
import ScrollToTop from '../ScrollToTop.jsx';
import Snowfall from '../seasonal/Snowfall.jsx';
import NavidadBanner from '../seasonal/NavidadBanner.jsx';
import NavidadLights from '../seasonal/NavidadLights.jsx';
import { useNavidad } from '../../hooks/useNavidad.js';

export default function Layout() {
  const navidad = useNavidad();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <header className="relative z-30">
        {navidad && <NavidadBanner />}
        <Navbar />
        {navidad && <NavidadLights />}
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer navidad={navidad} />
      <FaqChatWidget />
      {navidad && <Snowfall />}
    </div>
  );
}
