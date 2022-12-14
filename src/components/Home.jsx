import React from 'react'

import { Link } from "react-scroll";

export const Home = () => {

    const text = [
        'Mijn naam is Levi, momenteel 17 jaar oud en ik ben een junior developer. Welkom op mijn portfolio website. Hier vind je een overzicht van mijn werk en ervaringen.',
    ]

    return (
    <div name='Home' 
    className='h-screen w-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className="text-4xl sm:text-7xl font-bold text-white">
                Junior Full Stack Developer
                </h1>
                <p className=" text-base py-4 text-white">{text}</p>
            
            <div>
            <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Experience
            </button>

            </div>
            </div>
        </div>

    </div>
    )
}
