import React, {useState, useEffect} from 'react';
import {useSpring, animated, config} from 'react-spring';
import hero from '../asserts/images/home.png';
import About from '../components/About';
import Services from '../components/Services';
import Menu from '../components/Menu';
import Herbs from '../components/Herbs';
import Contact from '../components/Contact';
import ReservationForm from '../components/ReservationForm';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fadeIn = useSpring({
        opacity: 1,
        from: {opacity: 0},
        config: {duration: 1000},
    });

    const modalAnimation = useSpring({
        transform: isModalOpen ? 'scale(1)' : 'scale(0.8)',
        opacity: isModalOpen ? 1 : 0,
        config: config.gentle,
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col">
            <div
                id="home"
                className="h-screen relative mt-[-100px]"
                style={{
                    backgroundImage: `url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <animated.div
                    style={fadeIn}
                    className="absolute inset-0 flex flex-col justify-center items-center px-10 text-white text-center pt-[300px] md:pb-0 pb-[200px]"
                >
                    <h1 className="lg:text-[48px] text-4xl text-white mb-4">Discover the Flavors of Sri Lanka</h1>
                    <p className="lg:text-[48px] text-4xl mb-4 sm:text-5xl">A Culinary Adventure Awaits!</p>
                    <p className="lg:text-[24px] text-xl mb-8 sm:text-2xl">Unleash Your Inner Chef in Sri Lanka!</p>
                    <button
                        onClick={openModal}
                        className="bg-white text-[16px] hover:bg-[#A97E48] hover:text-white border-4 border-[#A97E48] text-[#A97E48] font-bold py-[12px] px-[24px] hover:shadow-lg transition duration-300"
                    >
                        Reserve Now
                    </button>
                </animated.div>
            </div>

            <div id="about">
                <About/>
            </div>

            <div id="services">
                <Services/>
            </div>

            <div id="menu">
                <Menu/>
            </div>

            <div id="herbs">
                <Herbs/>
            </div>

            <div id="contact">
                <Contact/>
            </div>

            {isModalOpen && (
                <animated.div style={modalAnimation} className="fixed inset-0 flex justify-center items-center z-50">
                    <div
                        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-[800px] lg:max-w-[1300px] lg:max-h-[700px]">
                        <ReservationForm/>
                        <button onClick={closeModal} className="text-[#A97E48] mt-4 hover:underline cursor-pointer">
                            Close
                        </button>
                    </div>
                </animated.div>
            )}
        </div>
    );
};

export default Home;
