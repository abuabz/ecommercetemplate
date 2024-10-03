import React, { useState, useEffect } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface Slide {
    id: number;
    imageUrl: string;
    altText: string;
}

const Carousel: React.FC = () => {
    const slides: Slide[] = [
        { id: 1, imageUrl: 'https://d16py1fyt83ijv.cloudfront.net/vedobi/assets/images/1rs-large-m.webp', altText: 'Slide 1' },
        { id: 2, imageUrl: 'https://img.freepik.com/premium-vector/black-friday-special-discount-template-banner-with-blank-space-podium-product-with-abstract-red-gradient-background-design_727967-312.jpg', altText: 'Slide 2' },
        { id: 3, imageUrl: 'https://fulcrumresources.net/wp-content/uploads/2022/09/sp.png', altText: 'Slide 3' },
        { id: 4, imageUrl: 'https://cdn.wedevs.com/uploads/2022/10/fomo-1024x489.png', altText: 'Slide 4' },
        { id: 5, imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/728/482/original/best-offer-sale-discount-template-banner-with-podium-3d-empty-space-for-product-sale-with-abstract-gradient-background-design-vector.jpg', altText: 'Slide 5' },
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const [isAutoSlide, setIsAutoSlide] = useState(true);

    useEffect(() => {
        if (isAutoSlide && currentIndex < slides.length - 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 4000); // 4 seconds

            return () => clearInterval(interval);
        }
    }, [currentIndex, slides.length, isAutoSlide]);

    useEffect(() => {
        if (currentIndex === slides.length - 1) {
            setIsAutoSlide(false);
        }
    }, [currentIndex, slides.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
            handleNext();
        }

        if (touchEndX - touchStartX > 50) {
            handlePrev();
        }
    };

    return (
        <div className="relative w-full max-w-[90%] mx-auto md:mt-7  overflow-hidden">
            <div
                className="relative overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform ease-in-out duration-700"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full">
                            <img
                                src={slide.imageUrl}
                                alt={slide.altText}
                                className="w-full h-auto object-fill md:rounded-3xl max-h-72 min-h-72"
                            />
                        </div>
                    ))}
                </div>

                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full  rounded-none rounded-r-sm
                ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <IconChevronLeft size={24} />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    disabled={currentIndex === slides.length - 1}
                    className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full rounded-none rounded-l-sm 
                ${currentIndex === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <IconChevronRight size={24} />
                </button>

                {/* Dots for navigation on the left */}
                {/* <div className="absolute left-0 bottom-2 left-2 transform -translate-y-1/2 flex flex-row space-y-2 p-2">
                    {slides.slice(0, 4).map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${
                                currentIndex === index ? 'bg-gray-500' : 'bg-gray-400'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Carousel;
