import React from 'react'
import wanderlust from '../assets/portfolio/wanderlust.jpg'
import tracking from '../assets/portfolio/tracking.jpg'
import zoomclone from '../assets/portfolio/zoomclone.jpg'

export const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: wanderlust
    },
    {
      id: 2,
      src: tracking
    },
    {
      id: 3,
      src: zoomclone
    }
  ]
  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
            Projects
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                className='rounded-md duration-200 hover:scale-105'
                src={src}
                alt=''
              />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Demo
                </button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
