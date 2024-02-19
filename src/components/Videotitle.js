import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div  className='pt-[20%] px-24 absolute text-white w-screen aspect-video bg-gradient-to-r  from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2 '>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-16 text-xl rounded-lg hover:bg-opacity-80' >
               ▶ Play
            </button>
            <button className='bg-gray-500 text-black p-4 px-16 text-xl rounded-lg mx-2' >
                More Info
            </button>
        </div>
    </div>
  )
}

export default Videotitle
