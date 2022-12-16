import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white'>

        <div className='max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-5xl md:text-7xl tracking-wider font-bold text-white inline uppercase '>About</p>
            </div>
            <div className='shadow-xl px-8 shadow-blue-800 rounded my-2'>
            <p className='text-xl mt-4 py-2'>
                Mijn naam is Levi. Ik ben 17 jaar oud, kom uit België en ben momenteel een junior full stack developer. Ik ben altijd geïnteresseerd geweest in technologie, vooral programmeren, en daarom heb ik besloten om me hierin te specialiseren. 
                Ik hou ervan om te codeën en heb de afgelopen paar jaar hard gewerkt om mijn kennis en vaardigheden op dit gebied te verbeteren. Ik heb veel verschillende technologieën geleerd, zoals HTML, CSS, JavaScript en SQL, en ben op dit moment bezig met het leren van React. </p>

            <p className='text-xl mt-2 py-2'>
                Ik ben het meest trots op mijn kennis en vaardigheden als het gaat om webontwikkeling. Ik ben altijd op zoek naar manieren om mijn kennis en vaardigheden te verbeteren en mezelf te verbeteren als developer. 

                Mijn doel is om uiteindelijk een professionele full stack developer te worden, die werkzaam is in een bedrijf of als freelancer. Ik ben ervan overtuigd dat ik mijn doel zal bereiken met hard werken en door mijn passie voor programmeren.</p>
            </div>

        </div>

    </div>
  )
}
