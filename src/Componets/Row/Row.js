import { Button } from '@mui/material'
import Images from 'Componets/Image/Images'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { posterBaseUrl } from 'requests'
import { routes } from 'Router/Router'
import HoverRow from './HoverRow'
import { Box } from '@mui/material'




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
                        <Link to={routes.profileLink(movie?.id)} key={movie?.id} >
                            <Box className='relative bg-[#0a0f1a]  group  font-medium shadow-2xl lg:hover:scale-[1.05] overflow-hidden
                           rounded-lg '>
                                <div className='relative h-auto group max-w-full'>
                                    <Images src={posterBaseUrl + movie?.poster_path} className=' w-full  h-full  object-cover' alt='movie?' />
                                    <HoverRow movie={movie} />
                                </div>
                                <div className='p-3 text-start overflow-hidden'>
                                    <div className="text-[16px]">{movie?.title || movie?.name}</div>
                                    <div className="text-[13px] text-gray-400 ">{movie?.title || movie?.original_name}</div>
                                </div>
                            </Box>
                        </Link>
                    )
                })
                }
            </div >
            <div className='flex justify-end  mt-4 '>
                <Button variant='outlined' size='small' href={routes.movies} className='text-title'  > View more... </Button></div>

        </div >
    )
}

export default Row 