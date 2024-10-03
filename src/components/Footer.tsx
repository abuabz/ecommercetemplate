import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from '@tabler/icons-react';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#1b211d] text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <h3 className="font-bold text-lg mb-4">About Us</h3>
                    <p className="text-gray-400">
                        We are committed to providing the best products at the most affordable prices.
                        Explore a wide range of high-quality items and enjoy a seamless shopping experience.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                    <ul>
                        <li className="mb-2"><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                        <li className="mb-2"><a href="/shop" className="text-gray-400 hover:text-white">Shop</a></li>
                        <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                        <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Customer Support</h3>
                    <ul>
                        <li className="mb-2"><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                        <li className="mb-2"><a href="/returns" className="text-gray-400 hover:text-white">Returns</a></li>
                        <li className="mb-2"><a href="/shipping" className="text-gray-400 hover:text-white">Shipping Info</a></li>
                        <li className="mb-2"><a href="/support" className="text-gray-400 hover:text-white">Contact Support</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
                            <IconBrandFacebook size={30} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                            <IconBrandTwitter size={30} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
                            <IconBrandInstagram size={30} />
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="text-center text-gray-400 mt-8 border-t border-gray-800 pt-4">
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}
