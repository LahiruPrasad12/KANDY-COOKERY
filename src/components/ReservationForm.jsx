import React, { useState } from "react";
import food1 from '../asserts/images/food1.jpg'
import food2 from '../asserts/images/food2.jpg'
import food3 from '../asserts/images/food3.jpg'
import food4 from '../asserts/images/food4.jpg'


const ReservationForm = () => {
    const [adultsCount, setAdultsCount] = useState(0);
    const [childrenOver6Count, setChildrenOver6Count] = useState(0);
    const [childrenUnder6Count, setChildrenUnder6Count] = useState(0);
    const [chickenCount, setChickenCount] = useState(0);
    const [fishCount, setFishCount] = useState(0);
    const [vegeCount, setVegeCount] = useState(0);
    const [burgerCount, setBurgerCount] = useState(0);
    const [pastaCount, setPastaCount] = useState(0);
    const [submarineCount, setSubmarineCount] = useState(0);
    const [hotDogCount, setHotDogCount] = useState(0);
    const [inquiry, setInquiry] = useState("");
    const [total, setTotal] = useState(0);

    const calculateTotal = () => {
        const totalAdults = 10 * adultsCount;
        const totalChildrenOver6 = 5 * childrenOver6Count;
        const totalChildrenUnder6 = 0; // Kids under 6 eat free
        const totalChicken = 8 * chickenCount;
        const totalFish = 10 * fishCount;
        const totalVege = 6 * vegeCount;

        const grandTotal =
            totalAdults +
            totalChildrenOver6 +
            totalChildrenUnder6 +
            totalChicken +
            totalFish +
            totalVege;

        setTotal(grandTotal);
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-md max-w-[1200px] mx-auto h-[600px] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4 text-[#A97E48]">
                Reserve Your Spot Now
            </h2>
            <div className="grid md:grid-cols-3 md:gap-4 gap-3 mb-4 grid-cols-1">
                <div className="col-span-3 sm:col-span-1">
                    <label className="text-lg font-bold mb-2 block">Your Name</label>
                    <input
                        type="text"
                        className="border border-[#A97E48] rounded-md py-2 px-3 w-full"
                    />
                </div>
                <div className="col-span-3 sm:col-span-1">
                    <label className="text-lg font-bold mb-2 block">Your Email</label>
                    <input
                        type="email"
                        className="border border-[#A97E48] rounded-md py-2 px-3 w-full"
                    />
                </div>
                <div className="col-span-3 sm:col-span-1">
                    <label className="text-lg font-bold mb-2 block">Date</label>
                    <input
                        type="date"
                        className="border border-[#A97E48] rounded-md py-2 px-3 w-full"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-4 gap-3 mb-4 grid-cols-1">
                <div className="col-span-2 sm:col-span-1">
                    <label className="text-lg font-bold mb-2 block">Meal Time</label>
                    <div className="flex items-center mb-2">
                        <input type="radio" id="lunch" name="mealTime" />
                        <label htmlFor="lunch" className="ml-2">
                            Lunch
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="dinner" name="mealTime" />
                        <label htmlFor="dinner" className="ml-2">
                            Dinner
                        </label>
                    </div>
                </div>
                <div>
                    <label className="text-lg font-bold mb-2 block">Special Request</label>
                    <input
                        type="text"
                        className="border border-[#A97E48] rounded-md py-2 px-3 w-full"
                    />
                </div>
            </div>
            <label className="text-lg font-bold mb-2 block">Select guest count</label>
            <div className="grid md:grid-cols-3 md:gap-4 gap-3 mb-4 grid-cols-1">
                <div>
                    <label className="text-[#A97E48] mb-2 block">Adults</label>
                    <div className="flex items-center">
                        <button
                            onClick={() => setAdultsCount(adultsCount - 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 mr-2"
                        >
                            -
                        </button>
                        <span>{adultsCount}</span>
                        <button
                            onClick={() => setAdultsCount(adultsCount + 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 ml-2"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <label className="text-[#A97E48] mb-2 block">Children (Over 6y)</label>
                    <div className="flex items-center">
                        <button
                            onClick={() => setChildrenOver6Count(childrenOver6Count - 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 mr-2"
                        >
                            -
                        </button>
                        <span>{childrenOver6Count}</span>
                        <button
                            onClick={() => setChildrenOver6Count(childrenOver6Count + 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 ml-2"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <label className="text-[#A97E48] mb-2 block">Children (Under 6y)</label>
                    <div className="flex items-center">
                        <button
                            onClick={() => setChildrenUnder6Count(childrenUnder6Count - 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 mr-2"
                        >
                            -
                        </button>
                        <span>{childrenUnder6Count}</span>
                        <button
                            onClick={() => setChildrenUnder6Count(childrenUnder6Count + 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 ml-2"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <label className="text-lg font-bold mb-2 block">Meal count</label>
            <div className="grid md:grid-cols-3 md:gap-4 gap-2 mb-4 grid-cols-1">

                <div>
                    <label className="text-[#A97E48] mb-2 block">Chicken</label>
                    <div className="flex items-center">
                        <button
                            onClick={() => setChickenCount(chickenCount - 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 mr-2"
                        >
                            -
                        </button>
                        <span>{chickenCount}</span>
                        <button
                            onClick={() => setChickenCount(chickenCount + 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 ml-2"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <label className="text-[#A97E48] mb-2 block">Fish</label>
                    <div className="flex items-center">
                        <button
                            onClick={() => setFishCount(fishCount - 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 mr-2"
                        >
                            -
                        </button>
                        <span>{fishCount}</span>
                        <button
                            onClick={() => setFishCount(fishCount + 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 ml-2"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <label className="text-[#A97E48] mb-2 block">Vege</label>
                    <div className="flex items-center">
                        <button
                            onClick={() => setVegeCount(vegeCount - 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 mr-2"
                        >
                            -
                        </button>
                        <span>{vegeCount}</span>
                        <button
                            onClick={() => setVegeCount(vegeCount + 1)}
                            className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 ml-2"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <label className="text-lg font-bold mb-2 block">Kids Meal</label>
                <div className="grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-3">
                    {/* Card 1: Burger */}
                    <div className="border border-[#A97E48] rounded-lg p-4 flex flex-col items-center">
                        <h3 className="text-[#A97E48] mb-2 text-lg font-semibold">Burger</h3>
                        <img
                            src={food1}
                            alt="Burger"
                            className="mb-2 w-50 h-40 object-cover"
                        />
                        <div className="flex items-center">
                            <button
                                onClick={() => setBurgerCount(burgerCount - 1)}
                                className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 mr-2"
                            >
                                -
                            </button>
                            <span>{burgerCount}</span>
                            <button
                                onClick={() => setBurgerCount(burgerCount + 1)}
                                className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 ml-2"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Pasta */}
                    <div className="border border-[#A97E48] rounded-lg p-4 flex flex-col items-center">
                        <h3 className="text-[#A97E48] mb-2 text-lg font-semibold">Pasta</h3>
                        <img
                            src={food2}
                            alt="Pasta"
                            className="mb-2 w-50 h-40 object-cover"
                        />
                        <div className="flex items-center">
                            <button
                                onClick={() => setPastaCount(pastaCount - 1)}
                                className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 mr-2"
                            >
                                -
                            </button>
                            <span>{pastaCount}</span>
                            <button
                                onClick={() => setPastaCount(pastaCount + 1)}
                                className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 ml-2"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Card 3: Submarine */}
                    <div className="border border-[#A97E48] rounded-lg p-4 flex flex-col items-center">
                        <h3 className="text-[#A97E48] mb-2 text-lg font-semibold">Submarine</h3>
                        <img
                            src={food3}
                            alt="Submarine"
                            className="mb-2 w-50 h-40 object-cover"
                        />
                        <div className="flex items-center">
                            <button
                                onClick={() => setSubmarineCount(submarineCount - 1)}
                                className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 mr-2"
                            >
                                -
                            </button>
                            <span>{submarineCount}</span>
                            <button
                                onClick={() => setSubmarineCount(submarineCount + 1)}
                                className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 ml-2"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Card 4: Hot Dogs */}
                    <div className="border border-[#A97E48] rounded-lg p-4 flex flex-col items-center">
                        <h3 className="text-[#A97E48] mb-2 text-lg font-semibold">Hot Dogs</h3>
                        <img
                            src={food4}
                            alt="Hot Dogs"
                            className="mb-2 w-50 h-40 object-cover"
                        />
                        <div className="flex items-center">
                            <button
                                onClick={() => setHotDogCount(hotDogCount - 1)}
                                className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 mr-2"
                            >
                                -
                            </button>
                            <span>{hotDogCount}</span>
                            <button
                                onClick={() => setHotDogCount(hotDogCount + 1)}
                                className="text-[#A97E48] border border-[#A97E48] rounded-full px-3 py-1 ml-2"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <label className="text-lg font-bold mb-2 block">Inquiries</label>
                <textarea
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                    className="border border-[#A97E48] rounded-md py-2 px-3 w-full h-24"
                />
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-[#A97E48] text-4xl mb-2 block">Total: ${total}</p>
                </div>
                <button
                    onClick={calculateTotal}
                    className="bg-[#A97E48] text-white py-3 px-6 rounded-full hover:bg-opacity-80 transition duration-300"
                >
                    Reserve Now
                </button>
            </div>
        </div>
    );
};

export default ReservationForm;
