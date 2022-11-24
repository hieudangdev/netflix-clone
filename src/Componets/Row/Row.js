import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { posterBaseUrl } from 'requests'

import { routes } from 'Router/Router'

function Row({ movie }) {



    return (
        <Link to={routes.profileLink(movie.id)} >
            <button onClick={() => routes.profileLink(movie.id)} className='relative  flex-col font-[400] lg:hover:opacity-80 shadow-md overflow-hidden shadow-gray-800/50  text-start rounded-md' >
                <div className=" absolute top-0 ml-2 w-[18px] bg-red-600 text-center rounded-b-md  font-[700] h-8  text-white text-[6px] ">IMDB
                    <div className='text-[10px]'>{Math.floor(movie.vote_average)}</div>
                </div>
                <div className=''>
                    <img src={posterBaseUrl + movie.poster_path} className=' w-full  h-full  object-cover' alt='movie' />
                </div>
                <div className='p-2'>
                    <div>{movie.id}</div>
                    <div className="text-[13px] text-[#dbdbd] mt-1 ">{movie.title || movie.name}</div>
                    <div className="text-[10px] font-extralight ]">{movie.title || movie.original_name}</div>
                </div>
            </button>

        </Link>
    )
}

export default Row 