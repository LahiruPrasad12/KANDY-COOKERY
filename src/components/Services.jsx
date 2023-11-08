import React from "react";
import serviceImage from "../asserts/images/service1.jpg";
import serviceImage2 from "../asserts/images/service2.jpg";

const Services = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold text-[#A97E48] mt-16 mb-10 text-center">Services</h1>

                <div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-16">
                    <div className="flex justify-center items-center lg:w-1/2">
                        <img className="object-cover w-full h-auto" src={serviceImage} alt="Services" />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Lorem ipsum dolor sit amet</h2>
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
                        <img className="object-cover w-full h-auto" src={serviceImage2} alt="Services" />
                    </div>

                    <div className="flex flex-col justify-center lg:w-1/2">
                        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Lorem ipsum dolor sit amet</h2>
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

export default Services;
