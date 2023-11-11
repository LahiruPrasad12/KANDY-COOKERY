import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#311109] text-white pt-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4 sm:px-6 lg:px-8">
                {/* First Row: Title, Lorem Text, Follow Us */}
                <div className="mb-6 sm:mb-0 ">
                    <span className="md:text-[70px] text-6xl font-bold">Kandy</span>
                    <br/>
                    <span className="md:text-[40px] text-2xl">Cooking Class</span>
                </div>
                <div className="sm:w-1/2 text-[#FFFFFFBF]">
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar nibh ac risus lacinia, nec vulputate sem dictum. Nam id purus ornare, mattis sem non, feugiat elit. Maecenas justo dolor, laoreet sed posuere suscipit, vulputate in lorem. Nulla accumsan est in placerat consectetur. Sed dignissim imperdiet feugiat. Donec id urna ut dolor tincidunt venenatis. Fusce lorem lorem, malesuada et tellus in, tincidunt pretium nisi. Quisque sit amet libero viverra, vehicula dolor nec, commodo urna. Praesent hendrerit dui et erat consequat, sed fringilla nisl mattis.</p>
                </div>

                {/* Second Row: Follow Us On */}
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <span className="text-sm">Follow Us On:</span>
                    <a href="https://www.facebook.com/" className="text-white hover:text-gray-400">
                        <FaFacebook className="text-2xl" />
                    </a>
                    <a href="https://www.instagram.com/" className="text-white hover:text-gray-400">
                        <FaInstagram className="text-2xl" />
                    </a>
                </div>
            </div>

            {/* Third Row: Top Border, Copyright, Company Name */}
            <div className="border-t text-[#FFFFFFBF] border-white pt-4 pb-3 text-center text-xs md:flex md:justify-between md:px-8">
                <div className="mb-2">&copy; 2023 Your Company. All rights reserved.</div>
                <div className="text-sm">Your Company Name</div>
            </div>
        </footer>
    );
};

export default Footer;
