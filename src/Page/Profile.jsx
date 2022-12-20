import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

import Slider from 'react-slick'
import { IMDb } from 'Assets/icon'
import Images from 'Componets/Image/Images'
import instance from 'instance'
import { apiKey, posterBaseUrl, posterLargeUrl } from 'requests'
import Row from 'Componets/Row/Row'
import { routes } from 'Router/Router'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { Alert } from '@mui/material'
import { Stack } from '@mui/system'

function Profile() {
    let { id } = useParams()
    const [infoMovies, setinfoMovies] = useState([])
    const [infoCast, setinfoCast] = useState([])
    const [MoreMovies, setMoreMovies] = useState([])

    const sliderRef = useRef(null)

    useEffect(() => {
        const fetchApi = async () => {
            const request = await instance.get(`movie/${id}?api_key=${apiKey}&language=en-US`)
            setinfoMovies(request.data)
        }
        const fetchApiCast = async () => {
            const request = await instance.get(`movie/${id}/casts?api_key=${apiKey}&language=en-US`)
            setinfoCast(request.data.cast.slice(0, 20))
        }
        const fetchApiMore = async () => {
            const request = await instance.get(`movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`)
            setMoreMovies(request.data.results.slice(0, 8))
        }
        fetchApiCast()
        fetchApiMore()
        fetchApi()
    }, [id])

    const settingSlider = {
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,

        slidesToShow: 5,

        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settingSlider: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                },
            },
            {
                breakpoint: 600,
                settingSlider: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settingSlider: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    }

    return (
        <div className=' text-white relative  '>
            <Images
                className='  opacity-20
             lg:mb-0 h-auto -z-30 w-full object-cover'
                src={posterBaseUrl + infoMovies.backdrop_path}
                alt=''
            />

            <div className=' lg:-mt-[700px] relative pl-2 -mt-[200px]  z-20 w-full '>
                <div className=' grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:px-16 gap-x-2'>
                    <div className='   '>
                        <div className='shadow-sm rounded-md overflow-hidden'>
                            <Images className='block w-[full] opacity-100 rounded-md p-5 object-cover' src={posterBaseUrl + infoMovies.poster_path} alt='' />
                        </div>
                        <div className='w-full px-2'>
                            <button className='py-2 bg-red-600  w-full rounded-sm  hover:opacity-80'>Xem Phim</button>
                        </div>
                    </div>
                    <div className='leading-8 mt-5 p-3 lg:col-span-3 col-span-3  relative text-white w-full   '>
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

                        <div className=' relative lg:mr-[150px] mx-4  pt-12'>
                            <div className=' absolute right-10 top-0'>
                                <button onClick={() => sliderRef.current.slickPrev()}>
                                    <KeyboardArrowLeftIcon />
                                </button>

                                <button className='btn-next' onClick={() => sliderRef.current.slickNext()}>
                                    <KeyboardArrowRightIcon />
                                </button>
                            </div>
                            <Slider {...settingSlider} ref={sliderRef}>
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
            <div className='lg:mx-[150px] lg:mt-[280px] mx-2    '>
                <Row dataMovies={MoreMovies} title='Phim tương tự' />
            </div>
            <div className='flex  mt-10  justify-center items-center '>
                <button onClick={() => <Alert severity='warning'>Nào update rồi xem</Alert>} className='text-white bg-red-600  p-2 px-4 rounded-xl'>
                    {' '}
                    Xem Thêm...
                </button>
            </div>
        </div>
    )
}

export default Profile
