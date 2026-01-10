import React, { useState } from 'react';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just show success message
        // In production, this would connect to an email service
        setIsSubmitted(true);
        setTimeout(() => {
            window.open(`https://wa.me/919133933133?text=Hi! I would like to subscribe to Reuse News. My email is: ${email}`, '_blank');
        }, 500);
    };

    return (
        <section className="bg-gray-700 py-16">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="bg-primary-600 rounded-t-2xl px-6 py-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                            Subscribe to Reuse News
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-b-2xl px-6 md:px-12 py-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                    Join the Re-conomy!
                                </h3>
                                <p className="text-gray-600">
                                    See our 2025 Reuse Awareness Campaign and learn how you can save more than money through reuse.
                                </p>
                            </div>

                            <div className="flex-shrink-0">
                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors"
                                        >
                                            Spread the Word
                                        </button>
                                    </form>
                                ) : (
                                    <div className="flex items-center text-green-600 font-semibold">
                                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Thanks for subscribing!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
