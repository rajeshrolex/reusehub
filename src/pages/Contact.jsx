import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        scrapType: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create WhatsApp message
        const message = `Hi! I'm ${formData.name}.%0A%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AScrap Type: ${formData.scrapType}%0A%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/918790921442?text=${message}`, '_blank');
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone',
            value: '+91 91339 33133',
            link: 'tel:+918790921442',
            color: 'bg-blue-100 text-blue-600',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            title: 'WhatsApp',
            value: '+91 91339 33133',
            link: 'https://wa.me/918790921442',
            color: 'bg-green-100 text-green-600',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            value: 'contact@reusehub.in',
            link: 'mailto:contact@reusehub.in',
            color: 'bg-purple-100 text-purple-600',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Location',
            value: 'Hyderabad, Telangana',
            link: '#',
            color: 'bg-orange-100 text-orange-600',
        },
    ];

    const scrapTypes = [
        'Used Vehicles',
        'Used Furniture',
        'Electronics & Appliances',
        'Office Equipment',
        'Factory Outlet',
        'Multiple Items',
        'Other',
    ];

    const businessHours = [
        { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
        { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Sunday', hours: '10:00 AM - 2:00 PM' },
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
                            Get In Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Contact Us
                        </h1>
                        <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Ready to sell, buy, or donate? Reach out to us and we'll get back to you right away!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-12 -mt-16 relative z-10">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.link}
                                target={info.link.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {info.title}
                                </h3>
                                <p className="text-gray-600">{info.value}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                                Send Message
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Request a Pickup
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll contact you within 24 hours to schedule
                                a convenient pickup time.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="scrapType" className="block text-sm font-medium text-gray-700 mb-2">
                                        What would you like to sell? *
                                    </label>
                                    <select
                                        id="scrapType"
                                        name="scrapType"
                                        value={formData.scrapType}
                                        onChange={handleChange}
                                        required
                                        className="input-field"
                                    >
                                        <option value="">Select type of items</option>
                                        {scrapTypes.map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Describe Your Items
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="input-field resize-none"
                                        placeholder="Tell us about the items you want to sell (e.g., 1 sofa set, 2 dining chairs, 1 old refrigerator...)"
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Send via WhatsApp
                                </button>
                            </form>
                        </div>

                        {/* Info Section */}
                        <div>
                            {/* Business Hours */}
                            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Business Hours
                                </h3>
                                <div className="space-y-4">
                                    {businessHours.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                                            <span className="text-gray-700 font-medium">{item.day}</span>
                                            <span className="text-gray-600">{item.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Contact */}
                            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                                <h3 className="text-xl font-semibold mb-4">
                                    Need Immediate Assistance?
                                </h3>
                                <p className="text-white/80 mb-6">
                                    For urgent pickups or immediate queries, reach us directly via WhatsApp or call.
                                </p>
                                <div className="space-y-4">
                                    <a
                                        href="https://wa.me/918790921442"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center w-full px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:shadow-lg transition-all"
                                    >
                                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Chat on WhatsApp
                                    </a>
                                    <a
                                        href="tel:+918790921442"
                                        className="flex items-center w-full px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                                    >
                                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Call: +91 91339 33133
                                    </a>
                                </div>
                            </div>

                            {/* Service Process */}
                            <div className="mt-8 bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                    What Happens Next?
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                                            1
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">We Contact You</p>
                                            <p className="text-sm text-gray-600">Within 2-4 hours of your request</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                                            2
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Schedule Pickup</p>
                                            <p className="text-sm text-gray-600">At your convenient date & time</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                                            3
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Get Paid</p>
                                            <p className="text-sm text-gray-600">Instant cash on pickup</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
