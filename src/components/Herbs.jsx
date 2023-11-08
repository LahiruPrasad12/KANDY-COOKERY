import React from "react";
import herb1 from "../asserts/images/herb1.jpg";
import herb2 from "../asserts/images/herb2.jpg";
import herb3 from "../asserts/images/herb3.jpg";
import herb4 from "../asserts/images/herb4.jpg";

const Herbs = () => {
    return (
        <section className="py-10 lg:px-44">
            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold text-[#A97E48] mt-16 mb-10 text-center">Herbs</h1>

                <div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <img className="object-cover w-48 h-48 lg:w-96 lg:h-96 rounded-full mb-4" src={herb1} alt="Cinnamon" />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <h2 className="text-3xl font-extrabold mb-6 text-[#C69B64]">Cinnamon</h2>
                        <div className="text-gray-700">
                            <p className="text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam eros, elementum a
                                purus sit amet, interdum consequat quam. Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas. Vestibulum vehicula, erat consequat
                                sagittis fermentum, augue leo sodales metus, ut tincidunt dui purus eu lorem. Proin
                                interdum mauris vitae sem pellentesque viverra. Aliquam erat volutpat. Vestibulum nec
                                enim mattis, laoreet risus sed, suscipit tellus.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <img className="object-cover w-48 h-48 lg:w-96 lg:h-96 rounded-full mb-4" src={herb2} alt="Pepper" />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <h2 className="text-3xl font-extrabold mb-6 text-[#C69B64]">Pepper</h2>
                        <div className="text-gray-700">
                            <p className="text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam eros, elementum a
                                purus sit amet, interdum consequat quam. Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas. Vestibulum vehicula, erat consequat
                                sagittis fermentum, augue leo sodales metus, ut tincidunt dui purus eu lorem. Proin
                                interdum mauris vitae sem pellentesque viverra. Aliquam erat volutpat. Vestibulum nec
                                enim mattis, laoreet risus sed, suscipit tellus.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <img className="object-cover w-48 h-48 lg:w-96 lg:h-96 rounded-full mb-4" src={herb3} alt="Cinnamon" />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <h2 className="text-3xl font-extrabold mb-6 text-[#C69B64]">Cloves</h2>
                        <div className="text-gray-700">
                            <p className="text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam eros, elementum a
                                purus sit amet, interdum consequat quam. Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas. Vestibulum vehicula, erat consequat
                                sagittis fermentum, augue leo sodales metus, ut tincidunt dui purus eu lorem. Proin
                                interdum mauris vitae sem pellentesque viverra. Aliquam erat volutpat. Vestibulum nec
                                enim mattis, laoreet risus sed, suscipit tellus.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <img className="object-cover w-48 h-48 lg:w-96 lg:h-96 rounded-full mb-4" src={herb4} alt="Pepper" />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <h2 className="text-3xl font-extrabold mb-6 text-[#C69B64]">Curry Leaves</h2>
                        <div className="text-gray-700">
                            <p className="text-lg mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam eros, elementum a
                                purus sit amet, interdum consequat quam. Pellentesque habitant morbi tristique senectus
                                et netus et malesuada fames ac turpis egestas. Vestibulum vehicula, erat consequat
                                sagittis fermentum, augue leo sodales metus, ut tincidunt dui purus eu lorem. Proin
                                interdum mauris vitae sem pellentesque viverra. Aliquam erat volutpat. Vestibulum nec
                                enim mattis, laoreet risus sed, suscipit tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Herbs;
