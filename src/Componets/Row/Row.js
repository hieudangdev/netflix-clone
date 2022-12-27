import { Button } from '@mui/material'
import Images from 'Componets/Image/Images'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { posterBaseUrl } from 'requests'
import { routes } from 'Router/Router'
import HoverRow from './HoverRow'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import UpdateIcon from '@mui/icons-material/Update'




function Row({ dataMovies = [], title }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [dataMovies])

    return (
        <div>
            <h2 className='mt-12 mb-4 leading-9 border-b border-gray-700 text-title font-semibold text-[20px] uppercase'>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 '>
                {dataMovies?.map((movie, index) => {
                    return (
                        <Link to={routes.profileLink(movie?.id)} key={index} >
                            <button onClick={() => routes.profileLink(movie?.id)} className='relative bg-[#0a0f1a]  group  font-medium shadow-2xl lg:hover:scale-[1.05] overflow-hidden
                           rounded-lg '>


                                <div className=" absolute top-0 ml-4 w-[20px] bg-red-600 text-center rounded-b-md   pt-1 font-[700] h-8  text-white text-[6px] ">IMDB
                                    <div className='text-[10px] '>{Math.floor(movie?.vote_average)}</div>
                                </div>
                                <div className='relative h-auto group max-w-full'>
                                    <Images src={posterBaseUrl + movie?.poster_path} className=' w-full  h-full  object-cover' alt='movie?' />
                                    <div className=" group-hover:opacity-100 opacity-0  absolute group-hover:top-0 top-8 transition-all  -bottom-4  group-hover:bottom-0   content-none bg-gradient-to-t from-black to-black/50 inset-x-0 z-10   ">

                                        <div className=''>
                                            <div className='m-4 text-start '>
                                                <HoverRow value={movie?.vote_average} size={30} color='success' />
                                            </div>
                                            <div className="w-full h-full  lg:mt-[100px] text-white/90 flex-col ">
                                                <Button variant='outlined' sx={{
                                                    borderColor: 'red',
                                                    color: 'red',
                                                }} color='error' size='small' >More</Button>
                                                <div className='mt-[50px] flex-col items-start text-start pl-4 text-[13px]'>
                                                    <p className='text-[14px]'>{movie?.title || movie?.name}</p>
                                                    <p className=''> <ThumbUpOffAltIcon color='info' />   {movie?.vote_count} </p>
                                                    <p className=''> <UpdateIcon color='success' />   {movie?.release_date} </p>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className='p-3 text-start overflow-hidden'>
                                    <div className="text-[16px]">{movie?.title || movie?.name}</div>
                                    <div className="text-[13px] text-gray-400 ">{movie?.title || movie?.original_name}</div>
                                </div>
                            </button>
                        </Link>
                    )
                })
                }
            </div>
            <div className='flex justify-end  mt-4 '>
                <Button variant='outlined' size='small' href={routes.movies} className='text-title'  > View more... </Button></div>

        </div >
    )
}

export default Row 