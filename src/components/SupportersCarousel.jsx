import React, { useState, useEffect } from 'react';

const SupportersCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const supporters = [
        {
            name: 'Zero Waste Initiative',
            logo: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80',
            isImage: true,
        },
        {
            name: 'Green Earth Foundation',
            logo: null,
            initials: 'GEF',
            color: 'from-green-500 to-emerald-600',
        },
        {
            name: 'Eco Recycle India',
            logo: null,
            initials: 'ERI',
            color: 'from-teal-500 to-cyan-600',
        },
        {
            name: 'Sustainable Future',
            logo: null,
            initials: 'SF',
            color: 'from-blue-500 to-indigo-600',
        },
        {
            name: 'Clean City Movement',
            logo: null,
            initials: 'CCM',
            color: 'from-purple-500 to-pink-600',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % supporters.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [supporters.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % supporters.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + supporters.length) % supporters.length);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Thank you to our Supporters
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We're grateful for our partners who share our vision of a sustainable future
                    </p>
                </div>

                <div className="relative max-w-lg mx-auto">
                    {/* Carousel Container */}
                    <div className="overflow-hidden rounded-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {supporters.map((supporter, index) => (
                                <div
                                    key={index}
                                    className="min-w-full flex items-center justify-center p-8"
                                >
                                    {supporter.isImage ? (
                                        <div className="bg-primary-500 rounded-2xl p-8 flex items-center justify-center">
                                            <div className="text-white text-center">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                                                        <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                                        </svg>
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="text-2xl font-bold tracking-wide">ZERO</div>
                                                        <div className="text-2xl font-bold tracking-wide">WASTE</div>
                                                        <div className="text-sm tracking-widest opacity-80">INITIATIVE</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={`bg-gradient-to-br ${supporter.color} rounded-2xl p-8 flex flex-col items-center justify-center min-h-[160px] min-w-[280px]`}>
                                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3">
                                                {supporter.initials}
                                            </div>
                                            <div className="text-white text-xl font-semibold text-center">
                                                {supporter.name}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center justify-center space-x-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors shadow-lg"
                            aria-label="Previous supporter"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors shadow-lg"
                            aria-label="Next supporter"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2 mt-4">
                        {supporters.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary-600 w-6' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportersCarousel;
