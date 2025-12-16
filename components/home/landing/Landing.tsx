import { useState, useEffect, ReactNode } from "react";
import { Sparkles, ArrowRight, ChevronRight, CheckCircle, Brain, BarChart3, ListTodo, StickyNote } from "lucide-react";
import { WaitlistModal } from "@/components/home/modals/WaitlistModal";
import { ViewState } from "@/lib/types";

interface LandingProps {
    setView: (view: ViewState) => void;
}

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
    demoType: 'ai-gen' | 'chart' | 'todo' | 'notes';
}

const QUOTES: string[] = [
    "Motivation is what gets you started. Habit is what keeps you going.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Small habits, big changes.",
    "Focus on the process, not just the outcome."
];

const FEATURES: Feature[] = [
    {
        id: 1,
        title: "AI Habit Generation",
        description: "Struggling to define your goals? Let our advanced AI analyze your lifestyle and suggest atomic habits that stick. Just type 'I want to get fit' and watch the magic happen.",
        icon: <Brain className="w-6 h-6 text-emerald-600" />,
        demoType: "ai-gen"
    },
    {
        id: 2,
        title: "Smart Progress & Summaries",
        description: "Visualize your journey with AI-driven insights. We don't just show you a bar; we tell you the story of your consistency and predict future milestones.",
        icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
        demoType: "chart"
    },
    {
        id: 3,
        title: "Integrated To-Do Lists",
        description: "Stop switching apps. Manage your daily tasks right alongside your long-term habits. A cluttered mind leads to a cluttered life—organize both in HabX.",
        icon: <ListTodo className="w-6 h-6 text-emerald-600" />,
        demoType: "todo"
    },
    {
        id: 4,
        title: "Contextual Side Notes",
        description: "Journal your thoughts as you complete tasks. Track not just *what* you did, but *how* you felt. Reflection is the key to lasting behavioral change.",
        icon: <StickyNote className="w-6 h-6 text-emerald-600" />,
        demoType: "notes"
    }
];

// --- Animation Components (Simulating GIFs) ---

const DemoAiGen: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100 w-full max-w-sm h-64 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-4 left-4 right-4 h-10 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-3 text-xs text-gray-400">
            <span className="animate-pulse">I want to be more productive...|</span>
        </div>
        <div className="mt-12 space-y-2 w-full">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-3 bg-emerald-50 p-3 rounded-lg transform translate-y-4 opacity-0 animate-slide-up" style={{ animationDelay: `${i * 0.5}s`, animationFillMode: 'forwards' }}>
                    <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center">
                        <Sparkles size={14} className="text-emerald-700" />
                    </div>
                    <div className="h-2 w-24 bg-emerald-200 rounded"></div>
                </div>
            ))}
        </div>
    </div>
);

const DemoChart: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100 w-full max-w-sm h-64 flex flex-col items-center justify-center">
        <div className="flex items-end space-x-4 h-32 w-full px-4">
            {[40, 70, 50, 90, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-emerald-100 rounded-t-lg relative group transition-all duration-500 hover:bg-emerald-200">
                    <div
                        className="absolute bottom-0 left-0 right-0 bg-emerald-500 rounded-t-lg transition-all duration-1000 ease-out"
                        style={{ height: `${h}%` }}
                    ></div>
                    {i === 3 && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 animate-fade-in-delayed">
                            Top Performance!
                        </div>
                    )}
                </div>
            ))}
        </div>
        <div className="mt-4 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-3/4 animate-progress-grow"></div>
        </div>
        <p className="text-xs text-emerald-600 mt-2 font-medium">Monthly Goal: 75% Complete</p>
    </div>
);

const DemoTodo: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100 w-full max-w-sm h-64 flex flex-col justify-center">
        {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center space-x-3 mb-3 p-2 hover:bg-gray-50 rounded transition-colors cursor-pointer group">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${i < 3 ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'}`}>
                    {i < 3 && <CheckCircle size={12} className="text-white" />}
                </div>
                <div className={`h-2 rounded flex-1 transition-all ${i < 3 ? 'bg-gray-300 w-1/2 line-through opacity-50' : 'bg-gray-800 w-3/4'}`}></div>
            </div>
        ))}
    </div>
);

const DemoNotes: React.FC = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100 w-full max-w-sm h-64 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-grid-slate-50 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow-sm w-48 h-48 rotate-3 transform transition-transform hover:rotate-0">
            <div className="text-xs text-yellow-800 font-handwriting mb-2">Today's Reflection</div>
            <div className="h-1 w-full bg-yellow-200 mb-2"></div>
            <div className="h-1 w-3/4 bg-yellow-200 mb-2"></div>
            <div className="h-1 w-5/6 bg-yellow-200 mb-2"></div>
            <div className="absolute bottom-4 right-4 text-yellow-400">
                <StickyNote size={16} />
            </div>
        </div>
    </div>
);
export function LandingPage({ setView }: LandingProps) {
    const [quoteIndex, setQuoteIndex] = useState<number>(0);
    const [isWaitlistOpen, setIsWaitlistOpen] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animate-fade-in">
            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-emerald-50/50 to-white -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-6 animate-fade-in-up">
                        <Sparkles size={12} className="mr-2" />
                        AI-Powered Growth
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-tight animate-fade-in-up delay-100">
                        Master your routine.<br />
                        <span className="text-emerald-600 relative inline-block">
                            Unleash your potential.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed animate-fade-in-up delay-200">
                        HabX uses artificial intelligence to build, track, and adapt your habits.
                        Stop guessing and start growing with the world's most intelligent habit tracker.
                    </p>

                    {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-300">
                        <button onClick={() => window.location.href = '/signup'} className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center">
                            Start for free <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div> */}
                    {/* Join the waitlist button */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-300">
                        <button
                            onClick={() => setIsWaitlistOpen(true)}
                            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center"
                        >
                            Join The Waitlist<ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>

                    <div className="mt-16 text-gray-400 text-sm font-medium animate-fade-in delay-500">
                        <p className="italic transition-opacity duration-500">"{QUOTES[quoteIndex]}"</p>
                    </div>
                </div>
            </section>

            {/* Feature Showcase */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to succeed</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">HabX combines psychology with technology to provide a comprehensive toolkit for personal development.</p>
                    </div>

                    <div className="space-y-32">
                        {FEATURES.map((feature, index) => (
                            <div key={feature.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                                <div className="flex-1 space-y-6 text-center lg:text-left">
                                    <div className="inline-flex p-3 rounded-xl bg-emerald-100 mb-2">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                                    <p className="text-lg text-gray-500 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                                <div className="flex-1 flex justify-center w-full">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-emerald-200 rounded-full filter blur-3xl opacity-20 transform translate-y-4"></div>
                                        {feature.demoType === 'ai-gen' && <DemoAiGen />}
                                        {feature.demoType === 'chart' && <DemoChart />}
                                        {feature.demoType === 'todo' && <DemoTodo />}
                                        {feature.demoType === 'notes' && <DemoNotes />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            {/* <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
                        <p className="text-gray-500">Invest in yourself for less than the price of a coffee.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold text-gray-900">₹500</span>
                                <span className="text-gray-500 ml-2">/month</span>
                            </div>
                            <p className="text-gray-500 mb-8 text-sm">Perfect for beginners building their first solid routine.</p>
                            <ul className="space-y-4 mb-8">
                                {['Unlimited Habits', 'Basic AI Suggestions', 'Community Access', 'Standard Statistics'].map((item) => (
                                    <li key={item} className="flex items-center text-gray-600 text-sm">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => window.location.href = '/signup'} className="w-full py-3 px-6 rounded-xl border-2 border-emerald-600 text-emerald-600 font-semibold hover:bg-emerald-50 transition-colors">
                                Choose Starter
                            </button>
                        </div>

                        <div className="bg-gray-900 p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Pro Achiever</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold text-white">₹1000</span>
                                <span className="text-gray-400 ml-2">/month</span>
                            </div>
                            <p className="text-gray-400 mb-8 text-sm">For serious individuals demanding full AI capabilities.</p>
                            <ul className="space-y-4 mb-8">
                                {['Everything in Starter', 'Advanced AI Insights', 'Unlimited History', 'Export Data', 'Priority Support'].map((item) => (
                                    <li key={item} className="flex items-center text-gray-300 text-sm">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => window.location.href = '/signup'} className="w-full py-3 px-6 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/50">
                                Go Pro
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to change your life?</h2>
                    {/* <p className="text-xl text-gray-500 mb-10">Join 100+ users who have already transformed their daily routines with HabX.</p> */}
                    <p className="text-xl text-gray-500 mb-10">Join other 100+ waitlisted users and get 1 week of free HabX Pro on release!</p>
                    {/* <button onClick={() => window.location.href = '/signup'} className="px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl">
                        Get Started Now
                    </button> */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-300">
                        <button
                            onClick={() => setIsWaitlistOpen(true)}
                            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center"
                        >
                            Join The Waitlist<ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
