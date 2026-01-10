import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const mainServices = [
        {
            title: 'Used Vehicles',
            description: 'Buy or sell pre-owned vehicles including cars, bikes, two-wheelers, and more. We offer fair prices and hassle-free transactions with doorstep service.',
            image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
            items: ['Cars', 'Bikes', 'Two-Wheelers', 'Scooters', 'Auto Parts', 'Vehicle Accessories'],
            color: 'from-teal-500 to-emerald-600',
        },
        {
            title: 'Used Electrical Items',
            description: 'Sell your old electrical equipment for the best prices. We buy generators, UPS systems, motors, industrial machinery, batteries, and all types of electrical items.',
            image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
            items: ['Generators', 'UPS Systems', 'Motors', 'Industrial Machinery', 'Batteries', 'Pharma Machinery'],
            color: 'from-amber-500 to-orange-600',
        },
        {
            title: 'Used IT Assets',
            description: 'Complete IT asset disposal and recycling solutions. We buy routers, switches, CCTVs, servers, IP phones, and all networking equipment at competitive prices.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
            items: ['Routers', 'Switches', 'CCTVs', 'Servers', 'IP Phones', 'Network Equipment'],
            color: 'from-cyan-500 to-blue-600',
        },
        {
            title: 'Electronics & Appliances',
            description: 'Sell your old electronics for the best prices. We buy laptops, desktops, printers, ACs, refrigerators, washing machines, and all types of electronic appliances.',
            image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
            items: ['Laptops & Computers', 'Air Conditioners', 'Refrigerators', 'Washing Machines', 'TVs & Monitors', 'Printers'],
            color: 'from-blue-500 to-indigo-600',
        },
        {
            title: 'Scrap & Metals',
            description: 'We buy all types of ferrous and non-ferrous metals, industrial scrap, and recyclable materials at the best market rates with accurate weighing.',
            image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
            items: ['Ferrous Metals', 'Non-Ferrous Metals', 'Industrial Scrap', 'Copper & Aluminum', 'Steel & Iron', 'E-Waste'],
            color: 'from-gray-600 to-gray-800',
        },
        {
            title: 'Office & Commercial',
            description: 'Complete clearing solutions for offices, factories, hostels, and commercial establishments. We buy workstations, conference tables, chairs, and all office equipment.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
            items: ['Workstations', 'Office Chairs', 'Conference Tables', 'Filing Cabinets', 'Reception Desks', 'Cubicles'],
            color: 'from-purple-500 to-indigo-600',
        },
        {
            title: 'Household Items',
            description: 'From kitchen appliances to home decor, we buy all kinds of household items. Get paid for items you no longer need instead of throwing them away.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
            items: ['Kitchen Appliances', 'Home Decor', 'Kitchenware', 'Storage Items', 'Garden Furniture', 'Exercise Equipment'],
            color: 'from-rose-500 to-pink-600',
        },
    ];

    const specialServices = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: 'Charity Donations',
            description: 'Donate your items to help orphanages and NGOs. We connect your donations with charitable organizations that need them most.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: 'Recycling Services',
            description: 'Responsible recycling of all materials. We ensure eco-friendly disposal and maximize material recovery for a greener planet.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: 'Bulk Clearance',
            description: 'Complete clearing for office relocations, factory closures, or estate clearances. Quick and efficient service with best prices.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
            title: 'Exchange Services',
            description: 'Exchange your old items for new ones or trade-in for better value. Upgrade without the hassle of selling separately.',
        },
    ];

    const serviceAreas = [
        'Hyderabad', 'Secunderabad', 'Madhapur', 'Hitech City', 'Kondapur',
        'Kukatpally', 'Gachibowli', 'Jubilee Hills', 'Banjara Hills', 'Ameerpet',
        'SR Nagar', 'Begumpet', 'Somajiguda', 'Punjagutta', 'Mehdipatnam',
        'LB Nagar', 'Dilsukhnagar', 'Uppal', 'ECIL', 'Miyapur',
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
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            What We Buy & Sell
                        </h1>
                        <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Sell your used or unnecessary products at your doorstep.
                            Get fair prices with convenient pickup across Hyderabad.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                            Categories
                        </span>
                        <h2 className="section-title">Our Service Categories</h2>
                        <p className="section-subtitle">
                            We deal in a wide range of used items — from vehicles to electronics and everything in between
                        </p>
                    </div>
                    <div className="space-y-16">
                        {mainServices.map((service, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="relative">
                                        <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br ${service.color} opacity-80 blur-xl`} />
                                    </div>
                                </div>
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <span className={`inline-block px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-full text-sm font-medium mb-4`}>
                                        {service.title}
                                    </span>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {service.items.map((item, i) => (
                                            <div key={i} className="flex items-center">
                                                <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        href="https://wa.me/919133933133"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Get Quote on WhatsApp
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Services */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                            Additional Services
                        </span>
                        <h2 className="section-title">Special Services</h2>
                        <p className="section-subtitle">
                            Beyond buying and selling, we offer these specialized services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specialServices.map((service, index) => (
                            <div key={index} className="service-card text-center">
                                <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 mx-auto mb-5">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                            Coverage
                        </span>
                        <h2 className="section-title">Service Areas</h2>
                        <p className="section-subtitle">
                            We provide doorstep pickup across Hyderabad and Secunderabad
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {serviceAreas.map((area, index) => (
                            <span
                                key={index}
                                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 font-medium shadow-sm hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-default"
                            >
                                {area}
                            </span>
                        ))}
                    </div>

                    <p className="text-center text-gray-500 mt-8">
                        Don't see your area? Contact us - we likely cover it too!
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Have Items to Sell?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Get an instant quote and schedule a free doorstep pickup.
                        We offer the best prices in Hyderabad!
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
                            WhatsApp Us Now
                        </a>
                        <a
                            href="tel:+919133933133"
                            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call: +91 91339 33133
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
