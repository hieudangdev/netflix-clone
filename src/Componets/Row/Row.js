import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import StarIcon from '@mui/icons-material/Star'
import { Box, Button } from '@mui/material'
import Images from 'Componets/Image/Images'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routes } from 'Router/Router'
import tmdbConfigs from './../../api/Config/tmdb.config'





function Row({ dataMovies = [], title, mediaType }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <h2 className='mt-12 mb-4 leading-9 border-b-2 border-gray-700 text-Orange font-semibold text-[20px] uppercase'>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 '>
                {dataMovies?.map((movie, index) => {

                    return (
                        <Link to={routes.detailLink(mediaType, movie?.id)} key={index} >
                            <Box className='relative hover:border hover:border-Orange  group  text-white font-medium shadow-2xl lg:hover:scale-[1.05] 
                           rounded-lg overflow-hidden '>
                                <div className='relative h-auto group max-w-full'>
                                    <Images src={tmdbConfigs.posterPath(movie.poster_path)} className='w-full  h-full  object-cover' alt='movie?' />
                                </div>
                                <div className='absolute top-2 left-2 text-[12px] flex items-center bg-secondary/50  px-1 rounded-full'>
                                    <StarIcon className='text-[14px] text-Orange' />
                                    {Math.floor(movie.vote_average * 10) / 10 || 0}
                                </div>
                                <div className=' absolute left-0 right-0 bottom-0 pt-[200px] whitespace-nowrap from-secondary to-transparent bg-gradient-to-t text-[14px] p-2  flex flex-col justify-between'>

                                    <div className="text-ellipsis text-[16px] pb-1 overflow-hidden ">{movie?.title || movie?.name}</div>
                                    <div className=' flex items-center h-[25px]  justify-between'>
                                        <div className='font-light  text-[13px]'> <RemoveRedEyeOutlinedIcon color='warning' fontSize='small' /> {Math.floor(movie?.popularity)}</div>
                                        <div>
                                            <button className='text-[10px] border border-blue-700 text-blue-700 rounded-[4px] w-[25px] uppercase p-[2px]  font-normal' >{movie?.original_language}</button>
                                            <button className='text-[10px] ml-1 border border-Red text-Red rounded-[4px] w-[35px] uppercase p-[2px]  font-normal' >{(movie?.release_date || movie?.first_air_date).split('-')[0]}</button>

                                        </div>

                                    </div>

                                </div>
                            </Box>
                        </Link>
                    )
                })
                }
            </div >
            <div className='w-full text-end  mt-10 '>
                <Button variant='outlined' size='small' className='text-Red border-Red'  > View more... </Button>
            </div>

        </div >
    )
}

export default Row 