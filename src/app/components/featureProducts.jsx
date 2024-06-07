import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline'


const products = [
    {
        id: 1,
        label: 'HOT',
        labelColor: 'bg-purple-500',
        image: '/assets/product-1.jpeg',
        sku: 'A43-44328-B',
        name: 'Glossy Gray 19\' Aluminium Wheel AR-19',
        rating: 4,
        reviews: 26,
        price: 589.00,
    },
    {
        id: 2,
        label: '',
        labelColor: '',
        image: '/assets/product-2.jpeg',
        sku: '729-51203-B',
        name: 'Twin Exhaust Pipe From Brandix Z54',
        rating: 3,
        reviews: 9,
        price: 749.00,
    },
    {
        id: 3,
        label: '',
        labelColor: '',
        image: '/assets/product-3.jpeg',
        sku: '573-49386-C',
        name: 'Motor Oil Level 5',
        rating: 5,
        reviews: 2,
        price: 23.00,
    },
    {
        id: 4,
        label: '',
        labelColor: '',
        image: '/assets/product-4.jpeg',
        sku: '753-38573-B',
        name: 'Brandix Engine Block Z4',
        rating: 0,
        reviews: 0,
        price: 452.00,
        oldPrice: 573.00,
    },
    {
        id: 5,
        label: '',
        labelColor: '',
        image: '/assets/product-5.jpeg',
        sku: '472-67382-Z',
        name: 'Brandix Clutch Discs Z175',
        rating: 2,
        reviews: 7,
        price: 345.00,
    },
];

const ProductCard = ({ product }) => (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white p-4">
        <div className="relative">
            {product.label && (
                <span className={`absolute top-2 left-2 text-xs text-white px-2 py-1 rounded ${product.labelColor}`}>{product.label}</span>
            )}
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                <ViewfinderCircleIcon className="size-5  text-gray-400"></ViewfinderCircleIcon>
            </button>
        </div>
        <div className="p-4 flex flex-col justify-between h-1/2">
            <div >
                <p className="text-xs text-gray-500">SKU: {product.sku}</p>
                <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
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
                <div className="flex items-center mt-2 mb-2 justify-between">
                    <div>
                        <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        {product.oldPrice && (
                            <span className="ml-2 text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                        )}
                    </div>
                    <ShoppingCartIcon className="size-5  text-gray-400"></ShoppingCartIcon>
                </div>
            </div>
        </div>
    </div>
);

const FeaturedProducts = () => (
    <div className="container mx-auto py-8">
        <div className="flex flex-row justify-between border-b border-gray-300 mb-6">
            <h2 className="text-xl font-bold mb-4">Featured Products</h2>
            <div className="flex space-x-4 mb-4 items-center">
                <button className="px-3 py-1 border rounded-full text-sm bg-black text-white hover:bg-gray-200 focus:outline-none">All</button>
                <button className="px-3 py-1 border rounded-full text-sm text-gray-600 hover:bg-gray-200 focus:outline-none">Power Tools</button>
                <button className="px-3 py-1 border rounded-full text-sm text-gray-600 hover:bg-gray-200 focus:outline-none">Hand Tools</button>
                <button className="px-3 py-1 border rounded-full text-sm text-gray-600 hover:bg-gray-200 focus:outline-none">Plumbing</button>
                <div className="flex flex-row space-x-1 ">
                    <ChevronLeftIcon className="size-5 bg-green-500 text-white"></ChevronLeftIcon>
                    <ChevronRightIcon className="size-5 bg-green-500 text-white"></ChevronRightIcon>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
);


export default FeaturedProducts;
