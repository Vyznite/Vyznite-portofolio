import React from 'react'

import lua from '../assets/Lua.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'


export const Portfolio = () => {
    
    const languages = [
        {
            name: 'Lua',
            id: 1,
            image: lua,
            description: 'Ik heb Lua leren kennen door het spel FiveM en Roblox. Ik heb hier veel ervaring mee opgedaan en heb hier ook veel projecten mee gemaakt.'
        },
        {
            name: 'React',
            id: 2,
            image: react,
            description: 'Ik heb React leren kennen door een goede vriend van mij. Hij heeft mij veel geholpen met het leren van React en ik heb hier ook veel ervaring mee opgedaan. Sindsdien gebruik ik React voor al mijn web gerelateerde projecten.'
        },
        {
            name: 'Javascript',
            id: 3,
            image: javascript,
            description: 'Ik heb Javascript geleerd toen ik voor de eerste keer een website ging maken. Hierna ben ik mij gaan verdiepen in Javascript en heb ik hier veel ervaring mee opgedaan.'

        },
        {
            name: 'Tailwind',
            id: 4,
            image: tailwind,
            description: 'Ik heb Tailwind leren kennen toen ik begon met React, omdat ik opzoek was naar een makkelijk alternatief voor CSS. Ik heb hier veel ervaring mee opgedaan en gebruik het nu voor al mijn projecten.'
        },
    ]

    return (
    <div name='experience' className='w-full h-full bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900'>

        <div className='max-w-screen-lg p-2 pt-64 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
              <p className='text-5xl md:text-7xl tracking-wider font-bold text-white inline uppercase '>FRAMEWORK'S & TALEN</p>
              <p className='font-semibold mt-2 pt-2 text-white '>Dit zijn de Framework's en talen waarmee ik heb gewerkt</p>
              <p className='xl:hidden font-semibold mt-2'>Gebruik desktop voor de descriptions te lezen!</p>
            </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 mx-auto gap-8 text-center py-8 px-12 sm:px-0 text-white '>

            {languages.map(({name, id, image, style, description}) => (
                <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg`}
              >
                <img src={image} alt="" className="w-20 mx-auto" />
                <p className="mt-4 text-2xl font-bold">{name}</p>
                <div className='hidden p-4 lg:flex'>
                    {description}
                </div>
              </div>
            ))}
        </div>

        </div>

    </div>
  )
}
