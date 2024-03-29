import React from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'


function Thumbnail({result}) {
  return (
    <div className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'> 
        <Image  
        layout = 'responsive' 
        src = {`https://image.tmdb.org/t/p/original/${result.poster_path}`}
        height={1080} width={1920}
        />

        <div className='p-2'>
            <p className='truncate max-w-md'>{result.overview}</p>
            <h2 className='text-2xl mt-1 text-white transition-all duration-100 ease-in-out group-hover:font-bold '>
                {result.title || result.name}</h2>
            <p className=' flex items-center opacity-0 group-hover:opacity-100'>
                {result.media_type && `${result.media_type} • `}{" "}
                {result.release_date || result.first_air_date} • {" "}
                <ThumbUpIcon className='text-green-500 h-5 mx-2' /> {result.vote_count}

                </p>




        </div>
    </div>
  )
}

export default Thumbnail