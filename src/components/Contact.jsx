import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import contact from '../asserts/images/contact.jpg';
import { useSpring, animated, config } from 'react-spring';
import useVisibility from '../utils/useVisibility';

const Contact = () => {
    const { isVisible, ref } = useVisibility();

    // Animations
    const fadeIn = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: config.molasses,
    });

    const slideIn = useSpring({
        transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
        from: { transform: 'translateY(-50px)' },
        config: config.wobbly,
    });

    const imageScale = useSpring({
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        config: config.wobbly,
    });

    return (
        <animated.div ref={ref} style={fadeIn} className="md:flex items-center md:justify-center bg-[#6F4F28] text-white">
            <div style={slideIn} className="md:w-1/2 mb-6 md:mb-0 md:mr-6 p-20 relative">
                <h2 className="md:text-[48px] text-4xl font-extrabold mb-6 text-white">Contact Us</h2>
                <animated.div style={fadeIn} className="flex items-center mb-2">
                    <FaPhone className="mr-2" />
                    <p className="md:text-[20px]">+94 769977447</p>
                </animated.div>
                <animated.div style={fadeIn} className="flex items-center mb-2">
                    <FaEnvelope className="mr-2" />
                    <p className="md:text-[20px]">kandycookingclass@gmail.com</p>
                </animated.div>
                <animated.div style={fadeIn} className="flex items-center">
                    <FaMapMarker className="mr-2" />
                    <p className="md:text-[20px]">123, Peradeniya road, Kandy</p>
                </animated.div>
            </div>
            <animated.div style={{ ...slideIn, ...imageScale }} className="md:w-1/2 h-96">
                {/* Rounded image, covering the container size */}
                <img src={contact} alt="About Us" className="w-full h-full object-cover rounded-md" />
            </animated.div>
        </animated.div>
    );
};

export default Contact;
