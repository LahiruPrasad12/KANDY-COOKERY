import React from 'react';
import { useSpring, animated } from 'react-spring';
import chef from '../asserts/images/chef.png';
import useVisibility from '../utils/useVisibility'

const About = () => {

    const { isVisible, ref } = useVisibility();

    // Animations
    const fadeIn = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    const slideUp = useSpring({
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        from: { transform: 'translateY(60px)' },
        config: { duration: 1500 },
    });

    return (
        <>
            <div ref={ref} className="px-20 md:py-5 py-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center px-5 md:pt-20">
                    <div className="w-1/2 md:w-1/4 mb-6 md:mb-0 p-3">
                        {/* Animated image with slide-up effect */}
                        <animated.img
                            src={chef}
                            alt="About Us"
                            className="md:w-[376px] md:h-[386px] w-[376px] object-contain md:object-contain mx-auto md:mx-0"
                            style={fadeIn}
                        />
                    </div>
                    <div ref={ref} className="w-full md:w-3/4 ml-0 md:ml-6 text-center md:text-left">
                        <animated.h2
                            style={slideUp}
                            className="text-4xl md:text-[56px] font-extrabold text-[#A97E48] mb-4"
                        >
                            About Us
                        </animated.h2>
                        <animated.p
                            style={slideUp}
                            className="md:text-[20px] text-[#2e2e2e] pt-5"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
                            arcu justo. Donec sit amet est et risus blandit efficitur. Integer
                            gravida lectus quis justo gravida, vel blandit orci feugiat. Nulla
                            facilisi. Praesent non lacus vel leo tristique vestibulum.
                            Vestibulum non mi sagittis, consequat odio nec, vulputate ligula. Nam
                            id nunc sed odio congue volutpat et non elit. Donec vestibulum
                            venenatis ex eu tristique.
                        </animated.p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
