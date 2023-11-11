import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import serviceImage from '../asserts/images/service1.jpg';
import serviceImage2 from '../asserts/images/service2.jpg';
import illustration1 from '../asserts/images/illustration1.png';
import useVisibility from '../utils/useVisibility';

const Services = () => {
    const { isVisible, ref } = useVisibility();

    // Animations
    const fadeIn = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 2500 },
    });

    const slideUp = useSpring({
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        from: { transform: 'translateY(50px)' },
        config: { duration: 1000 },
    });

    const imageScale = useSpring({
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        config: { duration: 1000 },
    });

    return (
        <div ref={ref}>
            <animated.div style={slideUp} className="flex justify-end md:mb-[-190px] mb-[-100px]">
                <animated.img src={illustration1} alt="leaf" className="object-contain" style={fadeIn} />
            </animated.div>
            <div className="container mx-auto">
                <animated.h1 style={slideUp} className="md:text-[56px] text-4xl font-extrabold text-[#A97E48] mt-16 mb-10 text-center">
                    Services
                </animated.h1>

                <animated.div style={fadeIn} className="flex flex-col lg:flex-row gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <animated.img
                            style={imageScale}
                            className="object-cover md:w-[612px] md:h-[409px]"
                            src={serviceImage}
                            alt="Services"
                        />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <animated.h2 style={slideUp} className="md:text-[32px] text-3xl font-extrabold mb-6 text-gray-800">
                            Lorem ipsum dolor sit amet
                        </animated.h2>
                        <div className="text-[2e2e2e]">
                            <animated.p style={slideUp} className="md:text-[20px] text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam eros, elementum a purus sit amet,
                                interdum consequat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                turpis egestas. Vestibulum vehicula, erat consequat sagittis fermentum, augue leo sodales metus, ut
                                tincidunt dui purus eu lorem. Proin interdum mauris vitae sem pellentesque viverra. Aliquam erat
                                volutpat. Vestibulum nec enim mattis, laoreet risus sed, suscipit tellus.
                            </animated.p>
                        </div>
                    </div>
                </animated.div>

                <animated.div style={fadeIn} className="flex flex-col lg:flex-row-reverse gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <animated.img
                            style={imageScale}
                            className="object-cover md:w-[612px] md:h-[409px]"
                            src={serviceImage2}
                            alt="Services"
                        />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <animated.h2 style={slideUp} className="md:text-[32px] text-3xl font-extrabold mb-6 text-gray-800">
                            Lorem ipsum dolor sit amet
                        </animated.h2>
                        <div className="text-[2e2e2e]">
                            <animated.p style={slideUp} className="md:text-[20px] text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam eros, elementum a purus sit amet,
                                interdum consequat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                turpis egestas. Vestibulum vehicula, erat consequat sagittis fermentum, augue leo sodales metus, ut
                                tincidunt dui purus eu lorem. Proin interdum mauris vitae sem pellentesque viverra. Aliquam erat
                                volutpat. Vestibulum nec enim mattis, laoreet risus sed, suscipit tellus.
                            </animated.p>
                        </div>
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

export default Services;
