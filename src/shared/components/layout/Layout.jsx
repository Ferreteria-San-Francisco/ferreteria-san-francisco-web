import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import TawkTo from '../../../features/chatbot/components/TawkTo.jsx';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <TawkTo />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
