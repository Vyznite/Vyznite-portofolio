import React from 'react'

export const NavBar = () => {
  return (
    <nav className='flex justify-between items-center w-full h-20 px-4 text-black fixed border-b-2 border-black'>
    
      <h1 className='text-xl font-bold Montserrat border-purple-500 py-1 px-4 border rounded text-purple-700 '>LEVI MEERT</h1>

    <ul className='flex'>

        <li className='mr-4 cursor-pointer capitalize bg-transparent hover:bg-purple-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded'>Home</li>
        
        <li className='mr-4 cursor-pointer capitalize bg-transparent hover:bg-purple-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded'>About Me</li>
        
        <li className='mr-4 cursor-pointer capitalize bg-transparent hover:bg-purple-800 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded'>experience</li>
    
    </ul>

    </nav>
  )
}
