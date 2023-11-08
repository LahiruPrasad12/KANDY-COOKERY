import React from "react";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import contact from '../asserts/images/contact.jpg';

const Contact = () => {
    return (
        <div className="md:flex items-center md:justify-center bg-[#6F4F28] text-white">
            <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 p-20 relative">
                <h2 className="text-4xl font-extrabold mb-4 text-white">Contact Us</h2>
                <div className="flex items-center mb-2">
                    <FaPhone className="mr-2" />
                    <p>+94 769977447</p>
                </div>
                <div className="flex items-center mb-2">
                    <FaEnvelope className="mr-2" />
                    <p>kandycookingclass@gmail.com</p>
                </div>
                <div className="flex items-center">
                    <FaMapMarker className="mr-2" />
                    <p>123, Peradeniya road, Kandy</p>
                </div>
            </div>
            <div className="md:w-1/2 h-96">
                {/* Rounded image, covering the container size */}
                <img src={contact} alt="About Us" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default Contact;
