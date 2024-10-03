import { url } from 'inspector';
import React from 'react';

export default function MoreOfferPage() {
    return (
        <div className="flex flex-col lg:flex-row  m-3 h-auto mb-10">
            <div className="  p-2 ">
                <div className='bg-[#eeee] w-full h-full rounded-sm'>
                    <div className="flex items-center border rounded-lg shadow-md p-4 h-full max-w-lg">
                        {/* Left side - Product Image */}
                        <div className="w-1/3">
                            <img
                                src="/assets/offerimg01.png"
                                alt="Product"
                                className="object-cover rounded-lg  h-60"
                            />
                        </div>

                        {/* Right side - Product Details */}
                        <div className="w-2/3 ml-4">
                            <h2 className="text-xl font-bold mb-2">Product Name</h2>
                            <p className="text-gray-600 text-sm mb-2">This is a short product description. It gives a quick overview of the product features.</p>
                            <p className="text-lg font-semibold text-gray-800 mb-4">$29.99</p>
                            <button className="bg-[#1c1c1c] text-white px-4 py-2 rounded hover:bg-black">
                                Start Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grow h-full'>
                <div className="relative w-full  p-4">
                    <div className="bg-[#eee] h-full rounded-sm cursor-pointer group shadow-md">
                        <p className="text-gray-600 text-sm mb-1 max-w-80 p-2">
                            This is a short product description. It gives a quick overview of the product features.
                        </p>
                        <p className="text-lg font-semibold text-gray-800 pb-5 p-2">$29.99</p>

                        {/* Image with hover effect */}
                        <img
                            className="absolute top-0 right-5 w-[160px] transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                            src="assets/offerimg02.png"
                            alt=""
                        />
                    </div>
                </div>

                <div className="relative w-full  p-4">
                    <div className="bg-[#eee] h-full rounded-sm cursor-pointer group shadow-md">
                        <p className="text-gray-600 text-sm mb-1 max-w-80 p-2">
                            This is a short product description. It gives a quick overview of the product features.
                        </p>
                        <p className="text-lg font-semibold text-gray-800 p-2">$29.99</p>

                        {/* Image with hover effect */}
                        <img
                            className="absolute top-0 right-8 w-[120px] rotate-6     transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                            src="assets/offerimg04.png"
                            alt=""
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
