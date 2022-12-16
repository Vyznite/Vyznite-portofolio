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
        },
        {
            name: 'React',
            id: 2,
            image: react,
        },
        {
            name: 'Javascript',
            id: 3,
            image: javascript,
        },
        {
            name: 'Tailwind',
            id: 4,
            image: tailwind,
        },
    ]

    return (
    <div name='experience' className='bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div className='pb-8'>
                <p className='text-4xl font-bold text-white inline border-b-4'>languages</p>
                <p className='py-6'>These are the languages  I've worked with</p>
            </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>



            {languages.map(({name, id, image, style}) => (
                <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white`}
              >
                <img src={image} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{name}</p>
              </div>
            ))}
        </div>

        </div>

    </div>
  )
}
