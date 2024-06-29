'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

function MorphingShapes({ children }) {
    // Define a single state variable
    const [shapeConfig, setShapeConfig] = useState({
        config: 0,
        configRound: 0,
        radius: ''
    });

    //   const round = ['', 'rounded-full', 'rounded-4xl']
    const round = ['border-radius: 0px;', 'border-radius: 999px;', 'border-radius: 60px;', ''];

    const shapeOne = ['left-0 top-1/2 w-[30%] h-1/2 rounded-r-full', 'left-0 top-1/2 w-[30%] h-1/2', 'left-[40%] top-[20%] w-[15%] h-[70%]', 'left-0 top-[40%] w-[30%] aspect-square']
    const shapeTwo = ['left-[30%] top-1/2 w-[20%] h-1/2 rounded-bl-full', 'left-[30%] top-1/2 w-[20%] h-1/2', 'left-[90%] top-[40%] w-[10%] h-1/2', 'left-[30%] top-1/2 w-[20%] aspect-square']
    const shapeThree = ['left-[70%] top-1/2 w-[30%] h-1/2 rounded-br-full', 'left-[70%] top-1/2 w-[30%] h-1/2', 'left-[0%] top-0 w-[20%] h-[40%]', 'left-[60%] top-[30%] w-[30%] aspect-square']
    const shapeFour = ['left-0 top-0 w-[20%] h-1/2 rounded-bl-full', 'left-0 top-0 w-[20%] h-1/2', 'left-[20%] top-0 w-[20%] h-[70%]', 'left-0 top-[15%] w-[20%] aspect-square']
    const shapeFive = ['left-[20%] top-0 w-[30%] h-1/2 rounded-full', 'left-[20%] top-0 w-[30%] h-1/2', 'left-[55%] top-[20%] w-[15%] h-[30%]', 'left-[20%] top-0 w-[30%] aspect-square']
    const shapeSix = ['left-[50%] top-0 w-[20%] h-1/2', 'left-[50%] top-0 w-[20%] h-1/2', 'left-[70%] top-[10%] w-[20%] h-[90%]', 'left-[50%] top-[5%] w-[20%] aspect-square']


    const combinations = [
        { config: 0, configRound: 3 },
        { config: 0, configRound: 3 },
        { config: 1, configRound: 0 },
        { config: 1, configRound: 1 },
        { config: 1, configRound: 2 },
        { config: 2, configRound: 0 },
        { config: 2, configRound: 1 },
        { config: 2, configRound: 2 },
        { config: 3, configRound: 1 },
    ]

    const intervalRef = useRef(null); // Use useRef instead of a let variable

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * combinations.length);
            const randomConfig = combinations[randomIndex];
            // Set all the values in a single state update
            setShapeConfig({
                config: randomConfig.config,
                configRound: randomConfig.configRound,
                radius: round[randomConfig.configRound]
            });
        }, 4000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleMouseEnter = () => {
        clearInterval(intervalRef.current); // Clear the interval using intervalRef.current
    }

    const handleMouseLeave = () => {
        intervalRef.current = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * combinations.length);
            const randomConfig = combinations[randomIndex];
            // Set all the values in a single state update
            setShapeConfig({
                config: randomConfig.config,
                configRound: randomConfig.configRound,
                radius: round[randomConfig.configRound]
            });
        }, 4000);
    }

    function parseStyleString(style) {
        return style.split(';')
            .filter(Boolean)
            .map(rule => rule.trim().split(':'))
            .reduce((acc, [property, value]) => {
                acc[camelCase(property)] = value.trim();
                return acc;
            }, {});
    }

    function camelCase(str) {
        return str.split('-').reduce((result, word, index) => {
            return result + (index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        }, '');
    }


    return (
        <div
            className="aspect-[1.618] w-[90vmin] relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <div
                className={`absolute bg-green-400 ${shapeOne[shapeConfig.config]}`}
                style={{ transition: 'all 750ms ease-in-out', ...parseStyleString(shapeConfig.radius) }}
            ></div>

            {/* yellow */}
            <Link href='/projects/lsd' className='group'>
                <div
                    className={`absolute bg-[#F4E869] flex justify-center items-center ${shapeTwo[shapeConfig.config]}`}
                    style={{ transition: 'all 750ms ease-in-out', ...parseStyleString(shapeConfig.radius) }}
                >
                    <span className="group-hover:opacity-100 opacity-0 text-5xl font-bold text-white z-20">L</span>
                </div>
            </Link>

            {/* blue */}
            <Link href='/projects/muunai' className='group'>
                <div

                    className={`absolute bg-[#072541] flex justify-center items-center ${shapeThree[shapeConfig.config]}`}
                    style={{ transition: 'all 750ms ease-in-out', ...parseStyleString(shapeConfig.radius) }}
                >
                    <span className="group-hover:opacity-100 opacity-0 text-5xl font-bold text-white z-20">m</span>
                </div>
            </Link>

            {/* red */}
            <Link href='/projects/swinglab' className='group'>
                <div
                    className={`absolute bg-[#F8BDEB] flex justify-center items-center ${shapeFour[shapeConfig.config]}`}
                    style={{ transition: 'all 750ms ease-in-out', ...parseStyleString(shapeConfig.radius) }}
                >
                    <span className="group-hover:opacity-100 opacity-0 text-5xl font-bold text-white z-20">S</span>
                </div>
            </Link>

            {/* sky */}
            <div
                className={`absolute bg-[#5272F2] ${shapeFive[shapeConfig.config]}`}
                style={{ transition: 'all 750ms ease-in-out', ...parseStyleString(shapeConfig.radius) }}
            ></div>
            <div
                className={`absolute bg-gray-300 ${shapeSix[shapeConfig.config]}`}
                style={{ transition: 'all 750ms ease-in-out', ...parseStyleString(shapeConfig.radius) }}
            ></div>
        </div>
    )
}

export default MorphingShapes