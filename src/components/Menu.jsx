import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import menu1 from '../asserts/images/menu1.jpg';
import menu2 from '../asserts/images/menu2.jpg';
import menu3 from '../asserts/images/menu3.jpg';
import illustration2 from '../asserts/images/illustration2.png';
import bg from '../asserts/images/menubg.png';
import useVisibility from '../utils/useVisibility'

const Menu = () => {

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
        config: { duration: 800 },
    });

    return (
        <>
            <animated.div ref={ref} style={slideUp} className="flex justify-start mb-[-220px]">
                <img src={illustration2} alt="leaf" className="object-contain" />
            </animated.div>

            <animated.div
                ref={ref}
                style={{
                    ...fadeIn,
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className="bg-[#F8F3ED] px-6 md:px-20 py-16"
            >
                <div className="container mx-auto text-center">
                    <animated.h2 style={fadeIn} className="md:text-[56px] text-4xl font-extrabold text-[#A97E48] mb-8">
                        Menu
                    </animated.h2>
                    <div className="flex flex-col md:flex-row items-center md:justify-center md:space-x-6 lg:space-x-28">
                        <animated.div style={slideUp} className="flex flex-col items-center mb-8 md:mb-0">
                            <img src={menu1} alt="First Item" className="object-contain w-[400px] h-[322px]" />
                            <h3 className="text-lg font-semibold mb-1">First Item</h3>
                            <p className="text-gray-500">Description for the first item.</p>
                        </animated.div>
                        <animated.div style={slideUp} className="flex flex-col items-center mb-8 md:mb-0">
                            <img src={menu2} alt="Second Item" className="object-contain w-[400px] h-[322px]" />
                            <h3 className="text-lg font-semibold mb-1">Second Item</h3>
                            <p className="text-gray-500">Description for the second item.</p>
                        </animated.div>
                        <animated.div style={slideUp} className="flex flex-col items-center">
                            <img src={menu3} alt="Third Item" className="object-contain w-[400px] h-[322px]" />
                            <h3 className="text-lg font-semibold mb-1">Third Item</h3>
                            <p className="text-gray-500">Description for the third item.</p>
                        </animated.div>
                    </div>
                </div>
            </animated.div>
        </>
    );
};

export default Menu;
