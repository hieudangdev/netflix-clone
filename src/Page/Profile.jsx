import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { IMDb } from 'Assets/icon'
import Images from 'Componets/Image/Images'
import instance from 'instance'
import { apiKey, posterBaseUrl } from 'requests'
import MoreMovies from 'Componets/Profile/MoreMovies'
import SlickCast from 'Componets/Profile/SlickCast'

function Profile() {
    let { id } = useParams()
    const [infoMovies, setinfoMovies] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const request = await instance.get(`movie/${id}?api_key=${apiKey}&language=en-US`)
            setinfoMovies(request.data)
        }
        fetchApi()
    }, [id])

    return (
        <div className=' text-white relative  '>
            <Images className='opacity-20 lg:mb-0 h-auto -z-30 w-full object-cover' src={posterBaseUrl + infoMovies?.backdrop_path} alt='' />

            <div className=' lg:-mt-[600px] relative pl-2 -mt-[200px]  z-20 w-full '>
                <div className=' grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:px-16 gap-x-2'>
                    <div className='px-10 lg:px-5   pt-10 lg:pt-0 '>
                        <div className='shadow-2xl rounded-2xl overflow-hidden'>
                            <Images className='block max-w-full   object-cover' src={posterBaseUrl + infoMovies?.poster_path} alt='' />
                        </div>
                        <div className='w-full pt-4 '>
                            <button className='py-2 bg-red-600  w-full rounded-sm  hover:opacity-80'>Xem phim</button>
                        </div>
                    </div>
                    <div className='leading-8 mt-5 lg:mt-0 p-3 lg:col-span-3 col-span-3  relative text-white w-full   '>
                        <div className=' text-[35px]'>{infoMovies?.original_title}</div>
                        <div className=' text-[18px] '>{infoMovies?.original_title}</div>
                        <div>
                            <IMDb className='w-[30px] inline items-center  h-[30px] ' />

                            <span> {infoMovies?.vote_average}</span>
                        </div>
                        <div className='text-[16px] '>
                            Release
                            <span className='text-blue-400'> ({infoMovies?.release_date})</span>
                        </div>
                        <div className=' text-[16px]'>
                            Popularity <span className='text-blue-400'>({infoMovies?.popularity})</span>
                        </div>

                        <div className='text-[15px] mt-2 text-white/80 '>{infoMovies?.overview}</div>
                        <SlickCast />
                    </div>
                </div>
            </div>

            <MoreMovies />
        </div>
    )
}

export default Profile
