import React, { useState } from 'react';
import { IconSearch, IconShoppingCart, IconUser, IconMenu2 } from '@tabler/icons-react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[#1b211d] shadow-md p-2  sticky top-0 z-50 w-full">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold flex">
                <img className='w-[40px]' src="/assets/logo.png" alt="logo" />
                    <a href="/" className="text-[#ececec]">ecom<span className='text-blue-400'>temp</span></a>
                </div>

                {/* Desktop Search Bar */}
                <div className="hidden md:flex flex-grow mx-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search for products"
                            className="bg-gray-200 w-full pl-3 pr-12 py-1 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                            <IconSearch size={22} />
                        </span>
                    </div>
                </div>

                {/* Desktop Icons: User, Cart */}
                <div className="hidden md:flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        {/* <IconUser color='#ececec' size={22} />
                        <span className="font-medium text-[#ececec]">Account</span> */}
                        <button className='bg-blue-800  py-1 rounded-sm leading-5 hover:bg-blue-900 duration-100 text-[#f3eeee] px-3'>SignUp</button>
                    </div>
                    <div className=" flex items-center space-x-2">
                        <div className='relative w-full h-full'>
                            <IconShoppingCart color='#ececec' size={22} />
                            {/* <span className="absolute top-0 bottom-3 right-0 left-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 ">2</span> */}
                        </div>
                        <span className="font-medium text-[#ececec]">Cart</span>

                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={handleMenuToggle}
                >
                    <IconMenu2 color='white' size={26} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#1b211d] p-4">
                    <div className="relative w-full mb-4">
                        <input
                            type="text"
                            placeholder="Search for products"
                            className="bg-white w-full pl-3 pr-12 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                            <IconSearch size={22} />
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <IconUser color='#ececec' size={22} />
                        <span className="font-medium text-[#ececec]">Account</span>
                    </div>
                    <div className=" flex items-center space-x-2">
                        
                            <IconShoppingCart color='#ececec' size={22} />
                            {/* <span className="absolute top-0 bottom-3 right-0 left-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 ">2</span> */}
                     
                        <span className="font-medium text-[#ececec]">Cart</span>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
