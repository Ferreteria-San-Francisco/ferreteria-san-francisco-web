import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FaqChatWidget from '../FaqChatWidget.jsx';
import ScrollToTop from '../ScrollToTop.jsx';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FaqChatWidget />
    </div>
  );
}
