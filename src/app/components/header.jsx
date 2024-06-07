import React from 'react';
import Link from 'next/link';
import { ChevronDownIcon, Bars3BottomLeftIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (

    <header className="bg-white shadow-md ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Top Navigation */}
        <div className="flex space-x-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contacts</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Store Location</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Track Order</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
        </div>
        <div className="flex space-x-4 items-center text-sm">
          <span className="text-gray-600">Compare: <span className="font-bold text-gray-900">2</span></span>
          <span className="flex items-center text-gray-600">Currency: <span className=" font-bold text-gray-900">RS</span> <ChevronDownIcon className="size-3 ml-1 text-gray-500" /></span>
          <span className="flex items-center text-gray-600">Language: <span className=" font-bold text-gray-900">EN </span><ChevronDownIcon className="size-3 ml-1 text-gray-500" /></span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/assets/logo.png" alt="UITOUX Auto Parts" className="h-14" />
          <div className="flex items-center space-x-2">
            <button className="bg-yellow-400 text-black flex items-center p-2 py-2 px-4 whitespace-nowrap ">
              <img
                src="/assets/car.svg"
                alt="Vercel Logo"
                className="h-6"
              />
              <span className="ml-2 font-semibold">Select Vehicle</span>
              <ChevronUpDownIcon className="size-3 ml-3 text-gray-900"></ChevronUpDownIcon>
            </button>
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                name="account-number"
                id="account-number"
                className=" py-2 px-4 border border-gray-300 bg-gray-300 placeholder:text-gray-600 placeholder:font-semibold focus:outline-none sm:text-sm sm:leading-6 w-96"
                placeholder="Enter Keyword or Part Number"
              />
              <div className=" absolute inset-y-0 right-0 flex items-center pr-3">
                <img
                  src="/assets/search.svg"
                  alt="Vercel Logo"
                  className=" h-5 w-5 text-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 relative">
            <img
              src="/assets/heart.svg"
              alt="Vercel Logo"
              className="h-8"
            />
            <div className="absolute top-0 left-6 bg-green-500 text-white h-3 w-3 flex items-center justify-center text-xs"> <span className="text-white text-xxs">0</span></div>
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
            <img
              src="/assets/person.svg"
              alt="Vercel Logo"
              className="h-8"
            />
            <div className="flex flex-col">
              <span className="ml-2 text-xs">Hello, Log In</span>
              <span className="ml-2 font-bold text-gray-900">My Account</span>
            </div>
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 relative">
            <img
              src="/assets/cart.svg"
              alt="Vercel Logo"
              className="h-8 "
            />
            <div className="absolute top-0 left-6 bg-green-500 text-white h-3 w-3 flex items-center justify-center text-xs "> <span className="text-white text-xxs">7</span></div>
            <div className="flex flex-col">
              <span className="ml-2 text-xs">Shopping Cart</span>
              <span className="ml-2 font-bold text-gray-900">₹1468.60</span>
            </div>
          </a>
        </div>
      </div>

      {/* <div className=" inset-0 flex items-center" aria-hidden="true"> */}
      {/* <div className="w-full border-t mt-2 border-gray-300" /> */}
      {/* </div> */}

      <div className="container mx-auto px-4 py-4 flex justify-between items-center border-t border-b  border-gray-300">
        <nav className="flex space-x-4">
          <a href="#" className="flex items-center justify-between text-gray-600 hover:text-gray-900 border-r border-gray-300 pr-4">
            <Bars3BottomLeftIcon className="size-5 text-gray-900" />
            <span className="text-gray-900 text-sm font-bold">Shop By Category</span>
            <ChevronDownIcon className="size-3 ml-5 text-gray-500" />
            <></>
          </a>
          <a href="#" className="flex items-center  hover:text-gray-600">
            <span className="text-gray-900 text-sm font-bold">Home</span>
            <ChevronDownIcon className="size-3 ml-1 text-gray-500" />
          </a>
          <a href="#" className="flex items-center  hover:text-gray-600">
            <span className="text-gray-900 text-sm font-bold">Megamenu</span>
            <ChevronDownIcon className="size-3 ml-1 text-gray-500" />
          </a>
          <a href="#" className="flex items-center  hover:text-gray-600">
            <span className="text-gray-900 text-sm font-bold">Shop</span>
            <ChevronDownIcon className="size-3 ml-1 text-gray-500" />
          </a>
          <a href="#" className="flex items-center  hover:text-gray-600">
            <span className="text-gray-900 text-sm font-bold">Blog</span>
            <ChevronDownIcon className="size-3 ml-1 text-gray-500" />
          </a>
          <a href="#" className="flex items-center  hover:text-gray-600">
            <span className="text-gray-900 text-sm font-bold">Account</span>
            <ChevronDownIcon className="size-3 ml-1 text-gray-500" />
          </a>
          <a href="#" className="flex items-center  hover:text-gray-600">
            <span className="text-gray-900 text-sm font-bold">Pages</span>
            <ChevronDownIcon className="size-3 ml-1 text-gray-500" />
          </a>
          <a href="#" className="flex items-center  hover:text-gray-600">
            <span className="text-gray-900 text-sm font-bold">Buy Theme</span>
          </a>
        </nav>
        <div className="text-gray-600 text-sm ">Call Us: <span className='font-bold text-gray-900'>089252 97807</span></div>
      </div>
    </header>
  );
};

export default Header;
