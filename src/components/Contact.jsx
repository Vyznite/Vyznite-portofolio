import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-blue-900 p-4 text-white'>

        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-white inline border-b-4'>Contact</p>
                <p className='py-4'>Contact me!</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/e104fd5b-ae96-484b-9041-719d908a57de' method='POST' className='flex flex-col w-full md:w-screen'>
                    <input 
                    type='text' 
                    name='name' 
                    placeholder='Vul hier je naam in' 
                    className='p-2 border-2 rounded-md text-white bg-transparent focus:outline-none md:w-1/2'
                    />

                    <input 
                    type='text'
                    name='email' 
                    placeholder='Vul hier je email in' 
                    className='my-4 p-2 border-2 rounded-md text-white bg-transparent focus:outline-none md:w-1/2'
                    />

                    <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <button className='text-white bg-gradient-to-b from-blue-600 to-blue-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Send
                    </button>

                </form>
            </div>

        </div>

    </div>
  )
}
