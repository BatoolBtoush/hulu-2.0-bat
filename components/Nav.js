import React from 'react';
import requests from '../utills/requests';
import { useRouter} from 'next/router';

function Nav() {
  const router = useRouter();





  return (
    <nav className='relative'>
      <div className='flex px-10 space-x-10 overflow-x-scroll text-2xl sm:px-20 whitespace-nowrap sm:space-20 last-pr-24 scrollbar-hide'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2 
          key={key} 
          onClick={() => router.push(`/?genre=${key}`)}
          className='transition duration-100 transform cursor-pointer hover:text-white active:text-red-500 hover:scale-125 '>
            {title}
            </h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    </nav>
  )
}

export default Nav