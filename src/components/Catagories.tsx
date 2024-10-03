import React, { useRef } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const CategoriesNavbar: React.FC = () => {
    const categories = [
        'Electronics',
        'Fashion',
        'Home & Kitchen',
        'Beauty & Health',
        'Sports',
        'Toys',
        'Books',
        'Automobile',
        'Groceries',
        'Appliances',
        'Beauty & Health',
        'Sports',
        'Toys',
        'Books',
        'Automobile',
        'Groceries',
        'Appliances',
        'Beauty & Health',
        'Sports',
        'Toys',
        'Books',
        'Automobile',
        'Groceries',
        'Appliances',
        'Furniture'
    ];

    const categoriesRef = useRef<HTMLUListElement>(null);

    // Scroll to the left by a fixed amount
    const scrollLeft = () => {
        if (categoriesRef.current) {
            categoriesRef.current.scrollBy({
                left: -200, // Adjust the scroll amount here
                behavior: 'smooth',
            });
        }
    };

    // Scroll to the right by a fixed amount
    const scrollRight = () => {
        if (categoriesRef.current) {
            categoriesRef.current.scrollBy({
                left: 200, // Adjust the scroll amount here
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="bg-[#333] text-[#ececec] p-1 relative ">
            <div className="container flex items-center relative">
                {/* Left Scroll Arrow */}
                <button
                    className=" text-white bg-[#333]  absolute left-0 z-10"
                    onClick={scrollLeft}
                >
                    <IconChevronLeft size={24} />
                </button>

                {/* Categories List */}
                <ul
                    className="flex justify-between items-center flex-row flex-nowrap whitespace-nowrap overflow-x-scroll UlLists scrollbar-hide"
                    ref={categoriesRef}
                >
                    {categories.map((category) => (
                        <li key={category} className="relative group">
                            <a href={`/category/${category.toLowerCase()}`} className="px-4 py-1 hover:bg-[#444] rounded transition-colors duration-200">
                                {category}
                            </a>
                       
                        </li>
                    ))}
                </ul>

                {/* Right Scroll Arrow */}
                <button
                    className=" text-white bg-[#333]  absolute right-0 z-10"
                    onClick={scrollRight}
                >
                    <IconChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default CategoriesNavbar;
