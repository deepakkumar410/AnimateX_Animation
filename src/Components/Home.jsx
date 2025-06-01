import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { AllData } from '../../public/All_Image_data';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index < AllData.length - 1) {
            gsap.to("#first-can", {
                opacity: 1,
                scale: 0.3,
                duration: 0.5,
                onComplete: () => setIndex(index + 1),
            });
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            gsap.from("#first-can", {
                opacity: 1,
                scale: 0.3,
                duration: 0.5,
                onComplete: () => setIndex(index - 1),
            });
        }
    };

    useGSAP(() => {
        gsap.from("#first-can", {
            opacity: 0,
            duration: 1.5,
            delay: 0.7,
            y: 400,
            rotation: 180,
            ease: "bounce.out"
        });

        gsap.from("#navbar", {
            opacity: 0,
            duration: 1,
            delay: 0.4,
            y: -10,
            stagger: 0.3,
            ease: "power2.out"
        });

        gsap.from("#all-text", {
            opacity: 0,
            duration: 1,
            delay: 0.4,
            y: 100,
            stagger: 0.5,
            ease: "power2.out"
        });
    }, [index]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            gsap.fromTo(
                "#first-can",
                { opacity: 0, scale: 0.7 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 2.5,
                    ease: "bounce.out",
                }
            );
        }, 50);

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <div className={`relative h-screen w-full overflow-hidden  text-gray-800 font-outfit ${AllData[index]?.bg}`}>
        
            {/* <button className={`fixed top-4 right-4 z-50 px-6 py-2 text-sm md:text-lg ${AllData[index]?.color} text-white rounded-md bg-white/10 backdrop-blur-sm shadow-xl font-semibold hover:${AllData[index]?.color} transition-all ring-2 ring-transparent hover:scale-125 duration-500 focus:outline-none focus:ring-4 focus:ring-white/50`}>
                Order
            </button> */}

            <nav className="w-full z-40   flex  justify-center gap-4 md:gap-8 pt-6 text-white font-medium relative">
                {['Home', 'About', 'Contact', 'Service', 'More'].map((item) => (
                    <li key={item} id="navbar" className="list-none bg-white/10 backdrop-blur-sm px-4 py-2 text-[9px] md:text-lg rounded-md shadow-xl hover:scale-110 transition-transform duration-300">
                        {item}
                    </li>
                ))}
            </nav>

            <div id="all-text" className="relative z-30 grid grid-cols-1  md:grid-cols-2 items-center justify-between px-4 md:px-20 pt-12 md:pt-20 space-y-10 md:space-y-0">
                
               
                <div className="order-2 pt-12 md:order-1 flex flex-col gap-6">
                    <h1 className={`text-4xl md:text-6xl xl:text-[90px] font-bold ${AllData[index]?.color} drop-shadow-[8px_10px_2px_rgba(0,0,0,0.3)]`}>
                        {AllData[index]?.name}
                    </h1>
                    <p className={`text-base md:text-lg xl:text-xl ${AllData[index]?.color} font-light`}>
                        {AllData[index]?.DATA}
                    </p>
                    <button className={`w-max mt-4 px-6 py-3 text-white text-base md:text-lg rounded-xl shadow-inner hover:bg-[#b8920a] transition-colors duration-300 ${AllData[index]?.bg}`}>
                        Explore More
                    </button>
                </div>

                <div id="first-can" className="order-1 md:order-2 relative z-50 flex justify-center items-center">
                    <img
                        src={AllData[index]?.img}
                        alt="Main Visual"
                        key={index}
                        className="h-[250px] sm:h-[300px] md:h-[400px] xl:h-[500px] transition-transform duration-500 hover:scale-110 drop-shadow-[8px_10px_2px_rgba(0,0,0,0.3)]"
                    />
                </div>
            </div>

            <div className="absolute inset-y-0 left-0 max-[800px]:-top-72 flex items-center px-2 md:px-4 z-50">
                <button
                    onClick={handlePrev}
                    className="p-3 md:p-4 border border-white cursor-pointer rounded-full bg-white/10 hover:scale-125 transition-transform duration-500"
                >
                    <GrPrevious color="white" />
                </button>
            </div>

           
            <div className="absolute inset-y-0 right-0 max-[800px]:-top-72 flex items-center px-2 md:px-4 z-50">
                <button
                    onClick={handleNext}
                    className="p-3 md:p-4 border border-white cursor-pointer rounded-full bg-white/10 hover:scale-125 transition-transform duration-500"
                >
                    <GrNext color="white" />
                </button>
            </div>
        </div>
    );
};

export default Home;
