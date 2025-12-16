import { useState } from "react";
import { X, CheckCircle, Leaf } from "lucide-react";

interface FormspreeError {
    code?: string;
    field?: string;
    message: string;
}

interface FormspreeResponse {
    ok: boolean;
    errors?: FormspreeError[];
}

export const WaitlistModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [succeeded, setSucceeded] = useState<boolean>(false);
    const [errors, setErrors] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setErrors(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mdkqrnrz", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSucceeded(true);
                form.reset();
            } else {
                const data: FormspreeResponse = await response.json();
                if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
                    setErrors(data.errors.map((error) => error.message).join(", "));
                } else {
                    setErrors("Oops! There was a problem submitting your form");
                }
            }
        } catch (error) {
            setErrors("Oops! There was a problem submitting your form");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-slide-up">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    type="button"
                >
                    <X size={24} />
                </button>

                <div className="p-8">
                    <div className="text-center mb-6">
                        <div className="inline-flex bg-emerald-100 p-3 rounded-full mb-4">
                            <Leaf className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Join the Waitlist</h3>
                        <p className="text-gray-500 mt-2">Be the first to know when we launch new features.</p>
                    </div>

                    {succeeded ? (
                        <div className="text-center py-8">
                            <div className="inline-flex bg-green-100 p-3 rounded-full mb-4">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <p className="text-xl font-semibold text-gray-900">Thanks for joining!</p>
                            <p className="text-gray-500 mt-2">We'll be in touch soon.</p>
                            <button
                                onClick={onClose}
                                className="mt-6 w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                                type="button"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Tell us what you're looking for..."
                                />
                            </div>

                            {errors && (
                                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                                    {errors}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {submitting ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : 'Submit'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};