import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import chef from '../asserts/images/chef.png';

const About = () => {
    return (
        <section className="px-20 bg-gray-200">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-5 md:py-20">
                <div className="w-1/2 md:w-1/4 mb-6 md:mb-0 p-3">
                    {/* Rounded image, regardless of screen size */}
                    <img src={chef} alt="About Us" className="sm:w-64 sm:h-64 object-contain mx-auto md:mx-0" />
                </div>
                <div className="w-full md:w-3/4 ml-0 md:ml-6 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-[#A97E48] mb-4">About Us</h2>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at arcu justo. Donec sit amet est et risus blandit efficitur. Integer gravida lectus quis justo gravida, vel blandit orci feugiat. Nulla facilisi. Praesent non lacus vel leo tristique vestibulum. Vestibulum non mi sagittis, consequat odio nec, vulputate ligula. Nam id nunc sed odio congue volutpat et non elit. Donec vestibulum venenatis ex eu tristique.
                    </p>
                    <div className="flex justify-center md:justify-start mt-6 space-x-6">
                        <a href="https://www.facebook.com/" className="text-blue-600 hover:text-blue-700">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="https://www.instagram.com/" className="text-pink-600 hover:text-pink-700">
                            <FaInstagram className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
