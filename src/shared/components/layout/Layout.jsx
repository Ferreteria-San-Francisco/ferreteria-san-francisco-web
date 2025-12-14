import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import TawkTo from "../../../features/chatbot/components/TawkTo";

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
