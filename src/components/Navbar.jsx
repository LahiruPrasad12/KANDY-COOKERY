import React, {useEffect, useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {

    const [isAtTop, setIsAtTop] = useState(true);
    const [visible, setVisible] = useState(true);
    const [nav, setNav] = useState(false);

    useEffect(() => {
        let prevScrollPosition = window.pageYOffset;

        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition === 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }

            // Determine scroll direction
            if (currentPosition > prevScrollPosition) {
                // Scrolling down
                setVisible(true);
                setNav(false);
            } else if (currentPosition < prevScrollPosition) {
                // Scrolling up
                setVisible(false);
                setNav(false);
            }

            // Update previous scroll position
            prevScrollPosition = currentPosition;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav
            className={`flex justify-between w-full py-4 md:px-36 px-12 sticky top-0 z-[999] ${
                isAtTop || visible
                    ? "top-[-100%] bg-transparent transition ease-in-out duration-500"
                    : "bg-[#F8F3ED] transition ease-in-out duration-500"
            }`}
        >

            <div className={`flex items-center ${isAtTop ? 'text-white' : 'text-black'}`}>
                <h3 className={`font-extrabold ${isAtTop ? 'text-white' : 'text-black'}`}>
                    <Link to="home" spy={true} smooth={true} duration={500}>
                        <div className="cursor-pointer">
                            <span className="text-4xl">Kandy</span>
                            <br />
                            <span className="text-xl">Cooking class</span>
                        </div>
                    </Link>
                </h3>
            </div>
            <div className={`items-center hidden space-x-12 md:flex ${isAtTop ? 'text-white' : 'text-black'}`}>
                <Link to="about" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-xl hover:font-extrabold">
                        About us
                    </div>
                </Link>
                <Link to="services" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-xl hover:font-extrabold">
                        Services
                    </div>
                </Link>
                <Link to="menu" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-xl hover:font-extrabold">
                        Menu
                    </div>
                </Link>
                <Link to="herbs" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-xl hover:font-extrabold">
                        Herbs
                    </div>
                </Link>
                <Link to="contact" spy={true} smooth={true} duration={500}>
                    <div className="cursor-pointer hover:text-xl hover:font-extrabold">
                        Contact us
                    </div>
                </Link>
            </div>

            <div onClick={handleNav} className={`block md:hidden ${isAtTop ? 'text-white' : 'text-black'}`}>
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>

            <div
                className={
                    !nav
                        ? "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray bg-white ease-in-out duration-500 md:hidden"
                        : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray ease-in-out bg-white duration-500 md:hidden"
                }
            >
                <h1 className="font-bold m-8 text-black">
                    <Link
                        to="home"
                        onClick={() => {
                            setNav(false);
                        }}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <div className="cursor-pointer">
                        <span className="text-4xl">Kandy</span>
                        <br/>
                        <span className="text-xl">Cooking class</span>
                        </div>
                    </Link>

                </h1>
                <ul className="p-4 mt-20 text-black">
                    <li className="p-4 border-b border-gray-600 hover:text-xl hover:font-extrabold">
                        <Link
                            to="about"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer hov">
                            About us
                            </div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-xl hover:font-extrabold">
                        <Link
                            to="services"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer">
                            Services
                            </div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-xl hover:font-extrabold">
                        <Link
                            to="menu"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer">
                            Menu
                            </div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-xl hover:font-extrabold">
                        <Link
                            to="herbs"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer">
                            Herbs
                            </div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-xl hover:font-extrabold">
                        <Link
                            to="contact"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className="cursor-pointer">
                            Contact us
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
