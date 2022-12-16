import React from 'react'

import { FaBars, FaTimes, FaGithub, FaDiscord, FaInstagram  } from 'react-icons/fa'

import {Link} from 'react-scroll'

export const NavBar = () => {

  const [nav, setNav] = React.useState(false)

  const links = [
    {
      name: 'home',
      id: 1,
    },
    {
      name: 'about',
      id: 2,
    },
    {
      name: 'experience',
      id: 3,
    },
    {
      name: 'contact',
      id: 3,
    },
  ]

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
    href: 'https://instagram.com/levi.meert'
    },
  ]

  return (
    <nav className='flex justify-between items-center w-full h-20 px-4 text-white fixed bg-transparent text-white'>
    
    <h1 className="text-5xl font-signature ml-2">Levi Meert</h1>

    <ul className='hidden xl:flex'>

      {links.map(({id, name}) => {
        return (
          <li key={id} className='mr-4 cursor-pointer capitalize bg-transparent hover:bg-blue-800 text-white font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded'>
            <Link to={name} smooth duration={500}>{name}</Link>
          </li>
        )
      })}
    </ul>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 xl:hidden '>
        {nav ? <FaTimes  size={30}/> : <FaBars  size={30}/>}
      </div>
      
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 text-white">
        
        <div className='flex justify-center items-center '>
        <h1 className="text-5xl font-signature">Levi Meert</h1>
        </div>

        {links.map(({id, name}) => {
          return (
            <li key={id} className='mr-4 cursor-pointer capitalize bg-transparent hover:font-bold text-white text-4xl py-2 px-4  hover:border-transparent rounded'>
              <Link
              onClick={() => setNav(!nav)}
              to={name}
              smooth
              duration={250}
              >{name}</Link>
            </li>
          )
        })}

        <div className='flex justify-center items-center h-1/4'>
        {Socials.map(({id, name, icon, background, href}) => {
          return (
            
            <li key={id} className='flex justify-between items-center w-full h-1/4 px-4'>
                <a href={href
                } target="_blank" rel="noreferrer">
                <button class={`inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${background}`}>
                    {icon}
                </button>
                </a>
            </li>
          )
        })}
        </div>

      </ul>
      )}
    </nav>
  )
}
