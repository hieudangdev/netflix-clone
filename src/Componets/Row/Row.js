import { Button } from '@mui/material'
import Images from 'Componets/Image/Images'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routes } from 'Router/Router'
import HoverRow from './HoverRow'
import { Box } from '@mui/material'
import tmdbConfigs from './../../api/Config/tmdb.config'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'





function Row({ dataMovies = [], title, mediaType }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const DataMovie = dataMovies.release_date

    return (
        <div>
            <h2 className='mt-12 mb-4 leading-9 border-b border-gray-700 text-Orange font-semibold text-[20px] uppercase'>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 '>
                {dataMovies?.map((movie, index) => {
                    const yearmovie = movie.release_date && movie.release_date.split('-')[0]
                    return (
                        <Link to={routes.detailLink(mediaType, movie?.id)} key={index} >
                            <Box className='relative bg-[#0a0f1a]   group  text-white font-medium shadow-2xl lg:hover:scale-[1.05] 
                           rounded-2xl overflow-hidden '>
                                <div className='relative h-auto group max-w-full'>
                                    <Images src={tmdbConfigs.posterPath(movie.poster_path)} className='w-full  h-full  object-cover' alt='movie?' />
                                </div>
                                <div className='bg-secondary text-[14px] p-3  flex justify-between'>

                                    <div className='text-ellipsis overflow-hidden flex flex-col justify-between '>
                                        <div className="text-ellipsis overflow-hidden ">{movie?.title || movie?.name}</div>
                                        <div>
                                            <RemoveRedEyeOutlinedIcon color='warning' /> {Math.floor(movie?.popularity)}

                                        </div>
                                    </div>
                                    <div className='flex flex-col ml-2 justify-between'>
                                        <Button variant='outlined' size='small' className=" min-w-[20px] text-Red border-Red text-[12px]">{yearmovie}</Button>

                                        <Button variant='outlined' size='small' className='min-w-[10px] text-[10px]'>
                                            {movie?.original_language}
                                        </Button>

                                    </div>

                                </div>
                            </Box>
                        </Link>
                    )
                })
                }
            </div >
            <div className='flex justify-end  mt-4 '>
                <Button variant='outlined' size='small' href={routes.movies} className='text-Red border-Red'  > View more... </Button></div>

        </div >
    )
}

export default Row 