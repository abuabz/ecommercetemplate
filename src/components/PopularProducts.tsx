import { IconChevronLeft, IconChevronRight, IconCircleCheckFilled, IconCirclePlusFilled, IconHeart, IconHeartFilled, IconStarFilled } from '@tabler/icons-react';
import React, { useRef, useState } from 'react';

export default function PopularProducts() {
    const [favoriteProducts, setFavoriteProducts] = useState<number[]>([]);
    const [cartProducts, setCartProducts] = useState<number[]>([]);
    const productContainerRef = useRef<HTMLDivElement>(null);

    const products = [
        { id: 1, title: 'Product 1', brand: 'Brand 1', price: 29.99, originalPrice: 39.99, imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg' },
        { id: 2, title: 'Product 2', brand: 'Brand 2', price: 49.99, originalPrice: 59.99, imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 3, title: 'Product 3', brand: 'Brand 3', price: 19.99, originalPrice: 24.99, imageUrl: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww' },
        { id: 4, title: 'Product 4', brand: 'Brand 4', price: 39.99, originalPrice: 49.99, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 5, title: 'Product 5', brand: 'Brand 5', price: 59.99, originalPrice: 69.99, imageUrl: 'https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D' }
    ];


    const handleScrollLeft = () => {
        if (productContainerRef.current) {
            productContainerRef.current.scrollBy({ left: -250, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (productContainerRef.current) {
            productContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });
        }
    };

    const handleHeartClick = (productId: number) => {
        setFavoriteProducts((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId) // Remove from favorites
                : [...prev, productId] // Add to favorites
        );
    };
    const handleAddToCartClick = (productId: number) => {
        setCartProducts((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId) // Remove from cart
                : [...prev, productId] // Add to cart
        );
    };

    return (
        <>
            <div className='justify-between flex flex-row items-center w-[100%] mt-10 '>
                <h2 className='m-2 text-[20px] font-bold text-gray-700 ml-6'>Popular Products on 2024</h2>
                <div className='flex gap-2 mr-2'>
                    <div
                        onClick={handleScrollLeft}
                        className='hover:bg-[#e6e6e6] mb-2 h-10 w-10 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'
                    >
                        <IconChevronLeft stroke={2} />
                    </div>
                    <div
                        onClick={handleScrollRight}
                        className='hover:bg-[#e6e6e6] mb-2 h-10 w-10 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'
                    >
                        <IconChevronRight stroke={2} />
                    </div>
                </div>
            </div>
            {/* Attach productContainerRef to the scrollable div */}
            <div ref={productContainerRef} className='popularmain flex gap-6 items-center justify-start ml-3 overflow-x-scroll mr-3'>
                {products.map((product) => (
                    <div key={product.id} className="relative max-w-[250px] min-w-[250px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div
                            className='absolute top-2 left-2 hover:bg-[#e6e6e6] mb-2 h-10 w-10 bg-[#eeeeee] rounded-full cursor-pointer flex justify-center items-center'
                            onClick={() => handleHeartClick(product.id)}
                        >
                            {favoriteProducts.includes(product.id) ? (
                                <IconHeartFilled size={24} stroke={2} color="red" />
                            ) : (
                                <IconHeart size={24} stroke={2} />
                            )}
                        </div>
                        <img
                            className="w-full object-cover h-64"
                            src={product.imageUrl}
                            alt={product.title}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-1">{product.title}</div>
                            <p className="text-gray-700 text-base">{product.brand}</p>
                        </div>
                        <div className="px-6 pt-1 pb-2 flex items-center justify-between">
                            <div className='flex flex-col-reverse gap-2'>
                                <div >
                                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                                    <span className="font-bold text-lg text-gray-900 ml-3">${product.price}</span>
                                </div>

                                <div className='flex items-center gap-2'><IconStarFilled color='#fc9922' size={15} stroke={2} /> <p className='font-semibold'>4.7</p> | <p className='bg-[#eeeeee] rounded-sm text-[15px] opacity-70 font-semibold px-1'>4753 Sold</p> </div>
                            </div>
                            <div className='self-end' onClick={() => handleAddToCartClick(product.id)}>
                                {cartProducts.includes(product.id) ? (
                                    <IconCircleCheckFilled className='cursor-pointer' size={44} stroke={1} color="green" />
                                ) : (
                                    <IconCirclePlusFilled className='cursor-pointer' size={44} stroke={1} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full text-center mt-9'>
                <button className='bg-black hover:bg-[#232323]  text-white   w-52 text-[16px] py-2 rounded-sm whitespace-nowrap '>See more Products</button>
            </div>
        </>
    );
}
