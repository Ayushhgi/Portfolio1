import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          I am Ayush Goyal, a passionate and dedicated 3rd-year Computer Science
          Engineering student with a deep interest in technology and
          problem-solving. My academic journey has equipped me with a strong
          foundation in programming languages like Java and JavaScript, and I’ve
          applied these skills to real-world projects such as Wanderlust, a
          full-stack travel planning platform.
        </p>
        <br />
        <p className='text-xl'>
          Through this experience, I’ve honed my abilities in backend
          development using Express.js, MongoDB, and Node.js, while focusing on
          creating intuitive user experiences. Beyond coding, I enjoy exploring
          innovative applications of AI, particularly in cybersecurity, as seen
          in my ongoing project on AI-based anomaly detection and response
          systems.
        </p>
      </div>
    </div>
  )
}

export default About
