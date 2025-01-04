import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'; // Heroicons
import { BsFillPersonLinesFill } from 'react-icons/bs'; // Bootstrap Icons

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/ayush-goyal-159670228/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Ayushhgi',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:goyal.ayush2424@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/path/to/resume.pdf', // Replace with actual path to the resume file
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 bg-slate-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              target='_blank'
              rel='noreferrer'
              download={download}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
