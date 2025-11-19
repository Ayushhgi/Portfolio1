import React from 'react'
import ayushgoyal from '../assets/portfolio/ayushgoyal.jpg'
// import heroimage1 from '../assets/portfolio/Heroimage1.png';
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-scroll'
import Resume from '../util/ayush_er.pdf';

const Home = () => {
  return (
    <div
      name='home '
      className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h1 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h1>
          <p className='text-gray-500 py-4 max-w-md'>
            Hi, I'm Ayush Goyal Computer Science Engineering student passionate
            about software development solutions. I have hands-on experience
            with technologies like Express.js, Bootstrap, MongoDB, Java, and
            JavaScript. I'm eager to explore innovative solutions and
            continuously enhance my technical skills.
          </p>
          <div>
            <button
              to='portfolio'
              smooth
              duration={500}
              className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              <a
                href={Resume}
                className='flex justify-between items-center w-full text-white'
                target='_blank'
                rel='noreferrer'
                download='ayush_er'
              >
                Resume
                <span className='group-hover:rotate-90 duration-300'>
                  <IoIosArrowForward size={25} className='ml-1' />
                </span>
              </a>
            </button>
          </div>
        </div>
        <div>
          <img
            src={ayushgoyal}
            alt='my profile'
            className='rounded-3xl mx-auto w-1/2 sm:w-2/3 md:w-full lg:h-[400px] object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
