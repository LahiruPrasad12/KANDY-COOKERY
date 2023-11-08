import React from "react";
import menu1 from '../asserts/images/menu1.jpg';
import menu2 from '../asserts/images/menu2.jpg';
import menu3 from '../asserts/images/menu3.jpg';

const Menu = () => {
    return (
        <section className="bg-[#F8F3ED] px-6 md:px-20 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[#A97E48] mb-8">Menu</h2>
                <div className="flex flex-col md:flex-row items-center md:justify-center md:space-x-6 lg:space-x-28">
                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <img src={menu1} alt="First Item" className="w-full h-48 object-cover mb-2 md:w-56 md:h-56 lg:w-full lg:h-80" />
                        <h3 className="text-lg font-semibold mb-1">First Item</h3>
                        <p className="text-gray-500">Description for the first item.</p>
                    </div>
                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <img src={menu2} alt="Second Item" className="w-full h-48 object-cover mb-2 md:w-56 md:h-56 lg:w-full lg:h-80" />
                        <h3 className="text-lg font-semibold mb-1">Second Item</h3>
                        <p className="text-gray-500">Description for the second item.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={menu3} alt="Third Item" className="w-full h-48 object-cover mb-2 md:w-56 md:h-56 lg:w-full lg:h-80" />
                        <h3 className="text-lg font-semibold mb-1">Third Item</h3>
                        <p className="text-gray-500">Description for the third item.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
