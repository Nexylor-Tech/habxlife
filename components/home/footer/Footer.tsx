import { ViewState } from "@/lib/types";
interface FooterProps {
    setView: (view: ViewState) => void;
}
import { Leaf } from "lucide-react";

export default function Footer({ setView }: FooterProps) {
    return (
        <footer className="bg-gray-50 pt-16 pb-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"> */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-4">
                            <div className="bg-emerald-100 p-1.5 rounded-lg mr-2">
                                <Leaf className="h-5 w-5 text-emerald-600" />
                            </div>
                            <span className="font-bold text-lg text-gray-900">Hab<span className="text-emerald-600">X</span></span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Building better habits, one day at a time. Join thousands of users achieving their potential with HabX.
                        </p>
                    </div>

                    {/* <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Other Product</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-emerald-600 cursor-pointer">SoceityX</li>
                        </ul>
                    </div> */}

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><button onClick={() => setView('about')} className="hover:text-emerald-600">About Us</button></li>
                            <li><button onClick={() => setView('contact')} className="hover:text-emerald-600">Contact</button></li>
                            <li><button onClick={() => setView('terms')} className="hover:text-emerald-600">Terms of Service</button></li>
                            <li><button onClick={() => setView('privacy')} className="hover:text-emerald-600">Privacy Policy</button></li>
                        </ul>
                    </div>

                    {/* <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Stay Connected</h4>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer">
                                <Mail size={14} />
                            </div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors cursor-pointer">
                                <Users size={14} />
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">© 2026 HabX Inc. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="text-gray-400 text-sm">Made with 💚 for productivity</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
