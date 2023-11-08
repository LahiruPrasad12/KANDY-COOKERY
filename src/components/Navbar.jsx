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
            } else if (currentPosition < prevScrollPosition) {
                // Scrolling up
                setVisible(false);
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
                    ? "bg-transparent transition duration-300 ease-in"
                    : "bg-black opacity-50 transition duration-300 ease-in"
            }`}
        >
            <div className="flex items-center">
                <h3 className="font-extrabold text-white">
                    <Link to="home" spy={true} smooth={true} duration={500}>
                        <span className="text-4xl">Kandy</span>
                        <br/>
                        <span className="text-xl">Cooking class</span>
                    </Link>
                </h3>
            </div>
            <div className="items-center hidden space-x-12 md:flex text-white">
                <Link to="about" spy={true} smooth={true} duration={500}>
                    About us
                </Link>
                <Link to="services" spy={true} smooth={true} duration={500}>
                    Services
                </Link>
                <Link to="menu" spy={true} smooth={true} duration={500}>
                    Menu
                </Link>
                <Link to="herbs" spy={true} smooth={true} duration={500}>
                    Herbs
                </Link>
                <Link to="contact" spy={true} smooth={true} duration={500}>
                    Contact us
                </Link>
            </div>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={20} style={{ color: "white" }} />
                ) : (
                    <AiOutlineMenu size={20} style={{ color: "white" }} />
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
                        <span className="text-4xl">Kandy</span>
                        <br/>
                        <span className="text-xl">Cooking class</span>
                    </Link>

                </h1>
                <ul className="p-4 mt-20 text-black">
                    <li className="p-4 border-b border-gray-600">
                        <Link
                            to="about"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            About us
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link
                            to="services"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link
                            to="menu"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Menu
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link
                            to="herbs"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Herbs
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link
                            to="contact"
                            onClick={() => {
                                setNav(false);
                            }}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
