import React from 'react';
import { Link } from 'react-router-dom';

const CommunitySection = () => {
    return (
        <section className="py-20 bg-primary-500">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-10 md:p-16 text-center shadow-2xl">
                        {/* Community Illustration */}
                        <div className="mb-8">
                            <div className="relative w-48 h-48 mx-auto">
                                {/* Circle Background */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-200 to-primary-200"></div>

                                {/* Sun */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-b from-amber-300 to-amber-400"></div>

                                {/* REUSE Badge */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
                                    REUSE
                                </div>

                                {/* People Silhouette */}
                                <div className="absolute bottom-0 left-0 right-0">
                                    <svg viewBox="0 0 200 80" className="w-full h-20 text-primary-700">
                                        <path
                                            fill="currentColor"
                                            d="M0,80 L0,50 C20,45 40,55 60,50 C80,45 100,40 120,45 C140,50 160,45 180,50 C190,52 200,48 200,50 L200,80 Z"
                                        />
                                        {/* People shapes */}
                                        <circle cx="20" cy="35" r="6" fill="currentColor" />
                                        <rect x="16" y="42" width="8" height="15" rx="2" fill="currentColor" />

                                        <circle cx="45" cy="30" r="7" fill="currentColor" />
                                        <rect x="40" y="38" width="10" height="18" rx="2" fill="currentColor" />

                                        <circle cx="75" cy="32" r="6" fill="currentColor" />
                                        <rect x="71" y="39" width="8" height="16" rx="2" fill="currentColor" />

                                        <circle cx="100" cy="28" r="8" fill="currentColor" />
                                        <rect x="94" y="37" width="12" height="20" rx="2" fill="currentColor" />

                                        <circle cx="125" cy="32" r="6" fill="currentColor" />
                                        <rect x="121" y="39" width="8" height="16" rx="2" fill="currentColor" />

                                        <circle cx="155" cy="30" r="7" fill="currentColor" />
                                        <rect x="150" y="38" width="10" height="18" rx="2" fill="currentColor" />

                                        <circle cx="180" cy="35" r="6" fill="currentColor" />
                                        <rect x="176" y="42" width="8" height="15" rx="2" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
                            A Reuse Community
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                            Be a part of the reuse revolution! Come to an event (or just to hang out)
                            at the Reuse Hub or book it for your own community gathering!
                        </p>

                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:bg-primary-700 hover:-translate-y-1 transition-all duration-300"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
