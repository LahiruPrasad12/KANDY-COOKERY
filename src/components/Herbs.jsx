import React from 'react';
import { useSpring, animated } from 'react-spring';
import herb1 from '../asserts/images/herbs1.png';
import herb2 from '../asserts/images/herbs2.png';
import herb3 from '../asserts/images/herbs3.png';
import herb4 from '../asserts/images/herbs4.png';
import hbg from '../asserts/images/herbsbg.png';
import useVisibility from '../utils/useVisibility'

const Herbs = () => {

    const { isVisible, ref } = useVisibility();

    // Animations
    const fadeIn = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    const slideUp = useSpring({
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        from: { transform: 'translateY(50px)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div
            ref={ref}
            style={{
                ...fadeIn,
                backgroundImage: `url(${hbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="py-10"
        >
            <div className="container mx-auto lg:px-44">
                <animated.h1 style={fadeIn} className="md:text-[56px] text-4xl font-extrabold text-[#A97E48] mt-16 mb-10 text-center">
                    Herbs
                </animated.h1>

                <animated.div style={slideUp} className="flex flex-col lg:flex-row gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <animated.img
                            style={slideUp}
                            className="object-cover w-48 h-48 lg:w-[350px] lg:h-[350px] rounded-full mb-4"
                            src={herb1}
                            alt="Cinnamon"
                        />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <h2 className="md:text-[40px] text-3xl font-extrabold mb-6 text-[#C69B64]">Cinnamon</h2>
                        <div className="text-gray-700">
                            <p className="md:text-[20px] text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam eros, elementum a purus sit amet, interdum
                                consequat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Vestibulum vehicula, erat consequat sagittis fermentum, augue leo sodales metus, ut tincidunt dui purus eu lorem.
                                Proin interdum mauris vitae sem pellentesque viverra. Aliquam erat volutpat. Vestibulum nec enim mattis, laoreet
                                risus sed, suscipit tellus.
                            </p>
                        </div>
                    </div>
                </animated.div>

                <animated.div style={slideUp} className="flex flex-col lg:flex-row-reverse gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <animated.img
                            style={slideUp}
                            className="object-cover w-48 h-48 lg:w-[350px] lg:h-[350px] rounded-full mb-4"
                            src={herb2}
                            alt="Cinnamon"
                        />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <h2 className="md:text-[40px] text-3xl font-extrabold mb-6 text-[#C69B64]">Pepper</h2>
                        <div className="text-gray-700">
                            <p className="md:text-[20px] text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam eros, elementum a purus sit amet, interdum
                                consequat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Vestibulum vehicula, erat consequat sagittis fermentum, augue leo sodales metus, ut tincidunt dui purus eu lorem.
                                Proin interdum mauris vitae sem pellentesque viverra. Aliquam erat volutpat. Vestibulum nec enim mattis, laoreet
                                risus sed, suscipit tellus.
                            </p>
                        </div>
                    </div>
                </animated.div>

                <animated.div style={slideUp} className="flex flex-col lg:flex-row gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <animated.img
                            style={slideUp}
                            className="object-cover w-48 h-48 lg:w-[350px] lg:h-[350px] rounded-full mb-4"
                            src={herb3}
                            alt="Cinnamon"
                        />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <h2 className="md:text-[40px] text-3xl font-extrabold mb-6 text-[#C69B64]">Cloves</h2>
                        <div className="text-gray-700">
                            <p className="md:text-[20px] text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam eros, elementum a purus sit amet, interdum
                                consequat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Vestibulum vehicula, erat consequat sagittis fermentum, augue leo sodales metus, ut tincidunt dui purus eu lorem.
                                Proin interdum mauris vitae sem pellentesque viverra. Aliquam erat volutpat. Vestibulum nec enim mattis, laoreet
                                risus sed, suscipit tellus.
                            </p>
                        </div>
                    </div>
                </animated.div>

                <animated.div style={slideUp} className="flex flex-col lg:flex-row-reverse gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <animated.img
                            style={slideUp}
                            className="object-cover w-48 h-48 lg:w-[350px] lg:h-[350px] rounded-full mb-4"
                            src={herb4}
                            alt="Cinnamon"
                        />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <h2 className="md:text-[40px] text-3xl font-extrabold mb-6 text-[#C69B64]">Curry Leaves</h2>
                        <div className="text-gray-700">
                            <p className="md:text-[20px] text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam eros, elementum a purus sit amet, interdum
                                consequat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Vestibulum vehicula, erat consequat sagittis fermentum, augue leo sodales metus, ut tincidunt dui purus eu lorem.
                                Proin interdum mauris vitae sem pellentesque viverra. Aliquam erat volutpat. Vestibulum nec enim mattis, laoreet
                                risus sed, suscipit tellus.
                            </p>
                        </div>
                    </div>
                </animated.div>

                {/* Repeat the above structure for other herb sections */}

            </div>
        </animated.div>
    );
};

export default Herbs;