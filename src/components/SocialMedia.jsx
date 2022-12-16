import React from 'react'

import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa'

export const SocialMedia = () => {

    const Socials = [
        {
          name: 'Github',
          icon : <FaGithub size={30}/>,
          id: 1,
          background: 'bg-gray-700',
          href: 'https://github.com/Vyznite'
        },
        {
          name: 'Discord',
          icon : <FaDiscord size={30}/>,
          id: 2,
          background: 'bg-blue-500',
        href: 'https://discord.gg/invite'
        },
        {
          name: 'Instagram',
          icon : <FaInstagram size={30}/>,
          id: 3,
          background: 'bg-pink-500',
        href: 'https://instagram.com/vyznite'
        },
      ]

  return (
    <div className='hidden xl:flex flex-col top-[40%] left-4 fixed'>
        <ul>
          <li>
            <h1 className='text-white text-2xl font-bold inline-block inline-block px-4'>Socials</h1>
          </li>
          {Socials.map(({id, name, icon, background, href}) => {
              return (
                  <li key={id}
                  className='flex justify-between items-center w-40 h-1/4 px-4'>
                  <a href={href
                  } target="_blank" rel="noreferrer">
                  <button class={`inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${background}`}>
                      {icon}
                  </button>
                  </a>
                  </li>
              )
          })}
        </ul>
    </div>
  )
}
