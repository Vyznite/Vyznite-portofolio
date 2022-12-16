import React from 'react'

import { Link } from "react-scroll";

export const Home = () => {

    const text = [
        'Mijn naam is Levi, momenteel 17 jaar oud en ik ben een junior developer. Welkom op mijn portfolio website. Hier vind je een overzicht van mijn werk en ervaringen. Tevens is dit ook mijn eerste React project!',
    ]

    return (
    <div name='home' 
    className='h-screen w-full text-center bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center pt-12 justify-center w-full h-full p-4'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className="text-4xl sm:text-7xl font-bold text-white">
                Junior Developer
                </h1>
                <p className=" text-base py-4 text-white">{text}</p>
            
            <div>
            <div className='max-w-screen flex flex-col justify-center items-center'>
                <Link
                    to='experience'
                    smooth
                    duration={350}
                    class=" cursor-pointer py-2 hover:scale-125 duration-200 text-white font-bold p-2 rounded items-center bg-blue-500">
                    Experience
                </Link>
            </div>

            </div>
            </div>
        </div>

    </div>
    )
}
