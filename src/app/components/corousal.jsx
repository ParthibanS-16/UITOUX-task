"use client";
import { useState, useEffect } from 'react';

const Carousel = () => {
    const images = [
        {
            src: "/assets/slide.jpeg",
            title: "30% OFF",
            subtitle: "When Buying Parts With Installation",
            description: "Installation of parts in the services of our partners.",
            buttonText: "Shop Now",
        },
        {
            src: "/assets/slide.jpeg",
            title: "Special Offer",
            subtitle: "Quality Parts at Great Prices",
            description: "Get the best deals on top-quality parts.",
            buttonText: "Shop Now",
        },
        {
            src: "/assets/slide.jpeg",
            title: "Special Offer",
            subtitle: "Quality Parts at Great Prices",
            description: "Get the best deals on top-quality parts.",
            buttonText: "Shop Now",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="relative w-full h-96 overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transition: 'opacity 1s ease-in-out' }}
                >
                    <img src={image.src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-start justify-center p-8 bg-black bg-opacity-5">
                        <h2 className="text-black bg-yellow-400 text-2xl font-bold mb-4">{image.title}</h2>
                        <h3 className="text-black text-4xl font-bold mb-4 break-words">{image.subtitle}</h3>
                        <p className="text-gray-700 mb-4">{image.description}</p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded">{image.buttonText}</button>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
            {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                    onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
                >
                    &lt;
                </button>
            </div> */}
            {/* <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                    onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                >
                    &gt;
                </button>
            </div> */}
        </div>
    );
};

export default Carousel;
