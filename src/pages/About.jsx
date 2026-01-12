import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Trust & Reliability',
            description: 'We build lasting relationships with our customers through transparent pricing and honest service.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Environmental Care',
            description: 'Every item we recycle contributes to a cleaner planet and sustainable future.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Customer First',
            description: 'Your convenience is our priority. We come to you, on your schedule.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: 'Community Impact',
            description: 'Through donations to orphanages and NGOs, we help those in need.',
        },
    ];

    const stats = [
        { number: '5000+', label: 'Happy Customers' },
        { number: '10000+', label: 'Items Recycled' },
        { number: '500+', label: 'Items Donated' },
        { number: '50+', label: 'Areas Covered' },
    ];

    const whatWeDo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
            title: 'Used Vehicles',
            description: 'Cars, bikes, buses, autos, trucks & all types of vehicles including scrap vehicles',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Electrical Items',
            description: 'Generators, UPS, motors, batteries',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            title: 'IT Assets',
            description: 'Routers, switches, servers, CCTVs',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: 'Scrap & Metals',
            description: 'Ferrous, non-ferrous, e-waste',
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
                </div>
                <div className="container-custom relative">
                    <div className="text-center text-white">
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                            About Us
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Welcome to ReUse-Hub
                        </h1>
                        <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Sell your used or unnecessary products at your doorstep. We deal in
                            vehicles, IT assets, electrical items, scrap metals, and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                                Our Story
                            </span>
                            <h2 className="section-title mb-6">
                                Making Recycling <span className="gradient-text">Convenient & Rewarding</span>
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    ReUse-Hub was founded with a simple mission: to make recycling as convenient
                                    and rewarding as possible for everyone in Hyderabad. We understand that
                                    disposing of old vehicles, IT equipment, and electrical items can be a hassle.
                                </p>
                                <p>
                                    That's why we bring our service to your doorstep. With just a call or
                                    WhatsApp message, you can schedule a pickup at your convenience. Our
                                    professional team arrives promptly, evaluates your items fairly, and
                                    pays you instantly.
                                </p>
                                <p>
                                    Whether you want to sell for cash or donate for a cause, we make it
                                    effortless. We serve homes, offices, factories, hostels, and educational
                                    institutions across Hyderabad and Secunderabad.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
                                    alt="Team working"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                                <div className="flex items-center space-x-4">
                                    <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center">
                                        <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">100%</p>
                                        <p className="text-gray-600 text-sm">Customer Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Deal In */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">What We Deal In</h2>
                        <p className="section-subtitle">A wide range of used items we buy, sell, and recycle</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {whatWeDo.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Impact Section */}
            <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80"
                                    alt="Charity and donation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
                                ❤️ Making a Difference
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Donate to Support <span className="text-rose-600">Orphanages & NGOs</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                At ReUse-Hub, we believe in giving back to the community. Instead of throwing away
                                your old items, you can choose to donate them to orphanages and NGOs who need them most.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Your old furniture can become a child's study desk. Your unused electronics can help
                                an NGO run their operations. Every donation creates a ripple effect of positive change.
                            </p>
                            <a
                                href="https://wa.me/919133933133?text=Hi! I would like to donate some items to help orphanages/NGOs."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl shadow-lg hover:bg-rose-700 hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                Donate Items Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-10 text-white">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-white/90 leading-relaxed">
                                To provide Hyderabad with the most convenient, rewarding, and eco-friendly
                                way to sell, buy, recycle, and donate pre-owned vehicles, IT assets, electrical
                                items, and more. We aim to make recycling accessible to everyone while ensuring fair value.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-accent/80 to-primary-500 rounded-3xl p-10 text-white">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-white/90 leading-relaxed">
                                To create a zero-waste community where every item finds a new purpose.
                                We envision a future where reusing and recycling is the norm, reducing
                                landfill waste and preserving our planet for future generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                            What Drives Us
                        </span>
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="service-card text-center">
                                <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 mx-auto mb-5">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
                        </div>
                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Get Started?
                            </h2>
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                Join thousands of satisfied customers who trust ReUse-Hub for their
                                recycling and resale needs.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://wa.me/919133933133"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Book a Pickup
                                </a>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
