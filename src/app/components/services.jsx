import React from 'react';

const Services = () => {

    const data = [
        { src: "/assets/free-delivery.svg", title: "Free Shipping", subtitle: "For orders from $50" },
        { src: "/assets/24-hours.svg", title: "Support 24/7", subtitle: "Call us anytime" },
        { src: "/assets/payment-security.svg", title: "100% Safety", subtitle: "Only secure payments" },
        { src: "/assets/tag.svg", title: "Hot Offers", subtitle: "Discounts up to 90%" },
    ]

    return (
        <div className="container pt-8 border-t border-gray-300">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-row items-center justify-center" >
                        <img
                            src={item.src}
                            alt="Vercel Logo"
                            className="h-12 text-green-600 "
                        />
                        <div className="flex flex-col">
                            <span className="ml-4 font-bold text-gray-900">{item.title}</span>
                            <span className="ml-4  text-sm">{item.subtitle}</span>
                        </div></div>
                ))}
            </div>
        </div>
    );
}

export default Services;
