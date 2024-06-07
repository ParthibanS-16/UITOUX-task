import React from "react";
import { ViewfinderCircleIcon } from '@heroicons/react/24/outline'

const products1 = [
    { image: '/assets/product-6.jpeg', name: 'Fantastic 12-Stroke Engine With A Power of 1991 hp', rating: 3, reviews: 17, price: 2579.00 },
    { image: '/assets/product-7.jpeg', name: 'Set of Four 19 Inch Spiked Tires', rating: 4, reviews: 9, price: 327.00 },
    { image: '/assets/product-8.jpeg', name: '40 Megawatt Low Beam Lamp', rating: 4, reviews: 31, price: 4.00, oldPrice: 8.00 },
];

const products2 = [
    { image: '/assets/product-9.jpeg', name: 'Brandix Manual Five Speed Gearbox', rating: 4, reviews: 6, price: 879.00 },
    { image: '/assets/product-10.jpeg', name: 'Set of Car Floor Mats Brandix Z4', rating: 4, reviews: 16, price: 78.00, oldPrice: 94.00 },
    { image: '/assets/product-11.jpeg', name: 'Taillights Brandix Z54', rating: 2, reviews: 8, price: 60.00 },
];

const products3 = [
    { image: '/assets/product-12.jpeg', name: 'Brandix Engine Block Z4', rating: 0, reviews: 0, price: 452.00, oldPrice: 573.00 },
    { image: '/assets/product-13.jpeg', name: 'Brandix Clutch Discs Z175', rating: 3, reviews: 7, price: 345.00 },
    { image: '/assets/product-9.jpeg', name: 'Brandix Manual Five Speed Gearbox', rating: 4, reviews: 6, price: 879.00 },];



const ProductCard = ({ product }) => (
    <div className=" relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex bg-white px-4">
        <div className="w-1/3">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col justify-between w-2/3">
            <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, index) => (
                        <svg key={index} className={`w-4 h-4 ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.4 4.302h4.516c.969 0 1.371 1.24.588 1.81l-3.657 2.652 1.4 4.302c.3.921-.755 1.688-1.539 1.11l-3.657-2.652-3.657 2.652c-.784.578-1.839-.189-1.539-1.11l1.4-4.302-3.657-2.652c-.783-.57-.381-1.81.588-1.81h4.516l1.4-4.302z"></path>
                        </svg>
                    ))}
                    <span className="ml-2 text-xs text-gray-600">{product.reviews} reviews</span>
                </div>
            </div>
            <div className="mt-auto">
                <div className="flex items-center mt-2">
                    <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                    )}
                </div>
            </div>
        </div>
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
            <ViewfinderCircleIcon className="size-5  text-gray-400"></ViewfinderCircleIcon>
        </button>
    </div>
);

const ProductSection = ({ title, products }) => (
    <div className="w-1/3 ">
        <h2 className="text-xl font-bold pb-2 border-b border-gray-300 mb-4">{title}</h2>
        <div className="space-y-4">
            {products.map(product => (
                <ProductCard key={product.sku} product={product} />
            ))}
        </div>
    </div>
);



const OfferProducts = () => (
    <div className="flex space-x-6 mt-10">
        <ProductSection title="Top Rated Products" products={products1} />
        <ProductSection title="Special Offers" products={products2} />
        <ProductSection title="Bestsellers" products={products3} />
    </div>
);

export default OfferProducts;
