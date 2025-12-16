'use client'
import { ViewState } from "@/lib/types";
import { useState } from 'react';
import { Menu, Leaf, X } from 'lucide-react';


interface NavbarProps {
    view: ViewState;
    setView: (view: ViewState) => void;
}


export default function Navbar({ setView }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
                        <div className="bg-emerald-100 p-1.5 rounded-lg mr-2">
                            <Leaf className="h-6 w-6 text-emerald-600" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-gray-900">Hab<span className="text-emerald-600">X</span></span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => setView('about')} className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">About</button>
                        <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
                            <button onClick={() => window.location.href = '/'} className="text-sm font-medium text-gray-600 hover:text-gray-900">Sign In</button>
                            <button onClick={() => window.location.href = '/'} className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-900">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['Home', 'Features', 'Pricing', 'About'].map((item) => (
                            <button
                                key={item}
                                onClick={() => { setView(item.toLowerCase() === 'home' ? 'home' : 'about'); setIsMenuOpen(false); }}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 w-full text-left"
                            >
                                {item}
                            </button>
                        ))}
                        <div className="pt-4 pb-2 border-t border-gray-100 mt-4">
                            <button onClick={() => window.location.href = '/login'} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Sign In</button>
                            <button onClick={() => window.location.href = '/signup'} className="block w-full text-left px-3 py-2 text-base font-medium text-emerald-600 hover:bg-emerald-50">Sign Up</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};