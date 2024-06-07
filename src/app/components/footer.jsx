import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaRss } from 'react-icons/fa';
const Footer = () => {
  return (

    <footer className="bg-customGray text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Contact Us Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg text-white font-semibold">Contact Us</h3>
            <p className="mt-4 text-sm">Hi, we are always open for cooperation and suggestions, contact us in one of the ways below:</p>
            <div className="flex flex-row justify-between">
              <p className="mt-4 text-xs">PHONE NUMBER<br /><strong>089252 97807</strong></p>
              <p className="mt-4 text-xs">EMAIL ADDRESS<br /><a href="mailto:careers@uitouxsolutions.com"><strong>careers@uitouxsolutions.com</strong></a></p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="mt-4 text-xs">OUR LOCATION<br /><strong>102, Athipalayam Rd,<br />Ramakrishnapuram,<br />Chinnavedampatti,<br />Coimbatore, Tamil Nadu<br /> 641049</strong></p>
              <p className="mt-4 text-xs">WORKING HOURS<br /><strong>Mon-Fri 10:00pm - 6:00pm</strong></p>
            </div>
          </div>
          {/* Information Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg text-white font-semibold">Information</h3>
            <ul className="mt-4 space-y-1">
              <li><a href="#" className="text-sm hover:underline">About Us</a></li>
              <li><a href="#" className="text-sm hover:underline">Delivery Information</a></li>
              <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:underline">Brands</a></li>
              <li><a href="#" className="text-sm hover:underline">Contact Us</a></li>
              <li><a href="#" className="text-sm hover:underline">Returns</a></li>
              <li><a href="#" className="text-sm hover:underline">Site Map</a></li>
            </ul>
          </div>
          {/* My Account Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg text-white font-semibold">My Account</h3>
            <ul className="mt-4 space-y-1">
              <li><a href="#" className="text-sm hover:underline">Store Location</a></li>
              <li><a href="#" className="text-sm hover:underline">Order History</a></li>
              <li><a href="#" className="text-sm hover:underline">Wish List</a></li>
              <li><a href="#" className="text-sm hover:underline">Newsletter</a></li>
              <li><a href="#" className="text-sm hover:underline">Special Offers</a></li>
              <li><a href="#" className="text-sm hover:underline">Gift Certificates</a></li>
              <li><a href="#" className="text-sm hover:underline">Affiliate</a></li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg text-white font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm">Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</p>
            <form className="mt-4 flex flex-row space-x-2">
              <input type="email" placeholder="user@example.com" className="p-2 w-full bg-gray-500 text-gray-900 rounded-l-md" />
              <button type="submit" className="p-2 bg-green-600 text-white rounded-r-md">Subscribe</button>
            </form>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaTwitter size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaYoutube size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaInstagram size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaRss size={24} /></a>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">Powered by <span className="text-white font-semibold">React / Next.js</span> — Designed by <span className="text-white font-semibold">UITOUX Solutions</span></p>
          <div className="flex space-x-4">
            <img src="/assets/payments.png" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
