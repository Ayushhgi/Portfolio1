// import React from 'react'
import html from '../assets/techs/html.jpg'
import css from '../assets/techs/css.jpg'
import javascript from '../assets/techs/javascript.png'
import reactjs from '../assets/techs/react.png'
import mongodb from '../assets/techs/mongodb.png'
import nodejs from '../assets/techs/nodejs.png'
import tailwind from '../assets/techs/tailwind.png'
import github from '../assets/techs/github.png'

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
    { id: 3, src: javascript, title: 'JavaScript', style: 'shadow-yellow-500' },
    { id: 4, src: reactjs, title: 'ReactJS', style: 'shadow-blue-300' },
    { id: 5, src: mongodb, title: 'MongoDB', style: 'shadow-green-500' },
    { id: 6, src: nodejs, title: 'NodeJS', style: 'shadow-green-400' },
    { id: 7, src: tailwind, title: 'Tailwind', style: 'shadow-sky-400' },
    { id: 8, src: github, title: 'GitHub', style: 'shadow-gray-500' }
  ]

  return (
    <div
      name='experience'
      className='bg-gradient-to-b from-gray-800 to-black w-full h-screen '
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Experience
          </p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt={`${title} logo`}
                className='w-16 sm:w-20 mx-auto'
              />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
