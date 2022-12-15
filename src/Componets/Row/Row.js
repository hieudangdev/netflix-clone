import Images from 'Componets/Image/Images'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { posterBaseUrl } from 'requests'

import { routes } from 'Router/Router'

function Row({ dataMovies, title }) {



    return (
        <div>
            <h2 className='mt-12 mb-4 leading-9 border-b border-gray-700 text-title font-semibold text-[20px] uppercase'>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-y-8  lg:gap-4'>
                {dataMovies.map((movie, index) => {
                    return (
                        <Link to={routes.profileLink(movie.id)} key={index} >
                            <button onClick={() => routes.profileLink(movie.id)} className='relative bg-[#0d131f] font-medium shadow-sm flex-col lg:hover:opacity-80 overflow-hidden 
                          text-start rounded-lg' >
                                <div className=" absolute top-0 ml-4 w-[20px] bg-red-600 text-center rounded-b-md  font-[700] h-8  text-white text-[6px] ">IMDB
                                    <div className='text-[10px]'>{Math.floor(movie.vote_average)}</div>
                                </div>
                                <div className=''>
                                    <Images src={posterBaseUrl + movie.poster_path} className=' w-full  h-full  object-cover' alt='movie' />
                                </div>
                                <div className='p-3'>
                                    <div className="text-[18px]">{movie.title || movie.name}</div>
                                    <div className="text-[12px] text-gray-400 ">{movie.title || movie.original_name}</div>
                                </div>
                            </button>


                        </Link>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Row 