'use client'
import { useState, useEffect } from "react";
import Navbar from "@/components/home/navbar/Navbar"
import Footer from "@/components/home/footer/Footer"
import AboutPage from "./about/page"
import ContactPage from "./contact/page"
import PrivacyPage from "./privacy/page"
import TermsPage from "./terms/page"
import { LandingPage } from "@/components/home/landing/Landing"
import { ViewState } from "@/lib/types";
export default function App() {
    const getInitialView = (): ViewState => {
        if (typeof window !== 'undefined') {
            const hash = window.location.hash.slice(1);
            const validViews: ViewState[] = ['home', 'about', 'contact', 'terms', 'privacy', 'signin', 'signup'];
            return (validViews.includes(hash as ViewState)) ? hash as ViewState : 'home';
        }
        return 'home';
    };

    const [view, setViewState] = useState<ViewState>(getInitialView);

    // Wrapper for setView that pushes state to history
    const setView = (newView: ViewState) => {
        if (newView === view) return;
        setViewState(newView);
        const path = newView === 'home' ? window.location.pathname : `#${newView}`;
        window.history.pushState(null, '', path);
    };

    // Listen for back/forward navigation
    useEffect(() => {
        const handlePopState = () => {
            setViewState(getInitialView());
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    useEffect(() => {
        // Inject Fonts
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Caveat:wght@600&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Inject Custom Styles for animations
        const style = document.createElement('style');
        style.innerHTML = `
      body { font-family: 'Plus Jakarta Sans', sans-serif; }
      .font-handwriting { font-family: 'Caveat', cursive; }
      @keyframes slide-up { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      @keyframes progress-grow { from { width: 0; } to { width: 75%; } }
      @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
      .animate-progress-grow { animation: progress-grow 1.5s ease-out forwards; }
      .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      .animate-fade-in-delayed { animation: fade-in 0.5s ease-out 1s forwards; }
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
      .delay-500 { animation-delay: 500ms; }
    `;
        document.head.appendChild(style);

        // Initial scroll
        window.scrollTo(0, 0);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(style);
        };
    }, []); // Run once on mount for styles

    // Scroll to top when view changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
            <Navbar setView={setView} view={view} />

            <main>
                {view === 'home' && <LandingPage setView={setView} />}
                {view === 'about' && <AboutPage />}
                {view === 'contact' && <ContactPage />}
                {view === 'terms' && <TermsPage />}
                {view === 'privacy' && <PrivacyPage />}
            </main>

            <Footer setView={setView} />
        </div>);
}