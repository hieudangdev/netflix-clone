import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'
import { IMDb } from 'Assets/icon'
import Images from 'Componets/Image/Images'
import instance from 'instance'
import { apiKey, posterBaseUrl } from 'requests'

function Profile() {
    let { id } = useParams()
    const [infoMovies, setinfoMovies] = useState([])
    const [infoCast, setinfoCast] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const request = await instance.get(`movie/${id}?api_key=${apiKey}`)
            setinfoMovies(request.data)
        }
        const fetchApiCast = async () => {
            const request = await instance.get(`movie/${id}/casts?api_key=${apiKey}`)
            setinfoCast(request.data.cast.slice(0, 20))
        }
        fetchApiCast()
        fetchApi()
    }, [id])
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    }

    return (
        <div className=' text-white  relative '>
            <Images
                className='transition-all opacity-30 mt-0
             mb-[1000px] lg:mb-0 h-full w-full object-fill'
                src={posterBaseUrl + infoMovies.backdrop_path}
                alt=''
            />

            <div className='absolute  w-full right-4 left-2  top-[80px] z-30'>
                <div className=' grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:px-16 gap-x-2'>
                    <div className='   '>
                        <div className='shadow-sm rounded-md overflow-hidden'>
                            <Images className='block w-[full] rounded-md p-5 object-cover' src={posterBaseUrl + infoMovies.poster_path} alt='' />
                        </div>
                        <button className='p-2 bg-red-600 w-full rounded-sm  hover:opacity-80'>Xem Phim</button>
                    </div>
                    <div className='leading-8 mt-5 p-3 lg:col-span-3 col-span-3   text-white w-full   '>
                        <div className=' text-[35px]'>{infoMovies.original_title}</div>
                        <div className=' text-[18px] text-white/80 '>{infoMovies.original_title}</div>
                        <div className='text-[16px] text-white/70'>
                            Release
                            <span className='text-blue-400'> ({infoMovies.release_date})</span>
                        </div>
                        <div>
                            <IMDb className='w-[30px] inline items-center  h-[30px] ' />

                            <span> {infoMovies.vote_average}</span>
                        </div>
                        <div className='text-white/80 text-[16px]'>
                            Popularity <span className='text-white'>({infoMovies.popularity})</span>
                        </div>
                        <div className='text-[14px] text-white/70 '>{infoMovies.overview}</div>

                        <Slider {...settings} className=''>
                            {infoCast.map((cast, index) => {
                                return (
                                    <div key={index} className=' mx-2 inline-block'>
                                        <Images src={posterBaseUrl + cast.profile_path} className='rounded-full h-[100px] w-[100px]  object-cover inline-block' />
                                        <h4>{cast.original_name}</h4>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
