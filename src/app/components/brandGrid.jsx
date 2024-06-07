import React from 'react';

const IconGrid = () => {

    const brandData = [
        { src: "/assets/brand-1.png", title: "AIMPARTS" },
        { src: "/assets/brand-2.png", title: "WINDENGINE" },
        { src: "/assets/brand-3.png", title: "TURBOELECTRIC" },
        { src: "/assets/brand-4.png", title: "STARTONE" },
        { src: "/assets/brand-5.png", title: "BRANDIX" },
        { src: "/assets/brand-6.png", title: "ABS-BRAND" },
        { src: "/assets/brand-7.png", title: "GREATCIRCLE" },
        { src: "/assets/brand-8.png", title: "JUSTROMB" },
        { src: "/assets/brand-9.png", title: "FASTWHEELS" },
        { src: "/assets/brand-10.png", title: "STROYKA-X" },
        { src: "/assets/brand-11.png", title: "MISSION-51" },
        { src: "/assets/brand-12.png", title: "FUELCORP" },
        { src: "/assets/brand-13.png", title: "REDGATE" },
        { src: "/assets/brand-14.png", title: "BLOCKS" },
        { src: "/assets/brand-15.png", title: "BLACKBOX" },
        { src: "/assets/brand-16.png", title: "SQUAREGARAGE" },

    ]

    return (
        <div className="container mx-auto py-8">
            <div className="border border-gray-300 ">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-0">
                    {/* Icon Item */}
                    {brandData.map((part, index) => (
                        <div key={index} className="flex flex-col items-center border border-gray-300 p-4">
                            <img src={part.src} alt={part.title} className="h-16 mb-2 grayscale-[100%]" />
                            <span className="text-xs font-bold text-gray-400">{part.title}</span>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default IconGrid;
