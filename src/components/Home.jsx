import React from 'react'

import { Link } from "react-scroll";

export const Home = () => {

    const text = [
        'Mijn naam is Levi, momenteel 17 jaar oud en ik ben een junior developer. Welkom op mijn portfolio website. Hier vind je een overzicht van mijn werk en ervaringen. Tevens is dit ook mijn eerste REACT project!',
    ]

    return (
    <div name='home' 
    className='h-screen w-full bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className="text-4xl sm:text-7xl font-bold text-white">
                Junior Full Stack Developer2
                </h1>
                <p className=" text-base py-4 text-white">{text}</p>
            
            <div>
            <Link
                to='experience'
                smooth
                duration={350}
                class="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
                Experience
            </Link>

            </div>
            </div>
        </div>

    </div>
    )
}
