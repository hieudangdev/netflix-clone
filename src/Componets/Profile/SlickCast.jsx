import Row from 'Componets/Row/Row'
import instance from 'instance'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, posterBaseUrl } from 'requests'
import Slider from 'react-slick'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import Images from 'Componets/Image/Images'

function SlickCast() {
    const [infoCast, setinfoCast] = useState([])

    const { id } = useParams()
    const sliderRef = useRef(null)

    useEffect(() => {
        const fetchApiCast = async () => {
            const request = await instance.get(`movie/${id}/casts?api_key=${apiKey}&language=en-US`)
            setinfoCast(request.data.cast.slice(0, 20))
        }

        fetchApiCast()
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
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    dots: true,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    slidesToScroll: 3,
                },
            },
        ],
    }
    return (
        <div className=' relative lg:mr-[150px] mt-5 lg:mx-4  pt-12'>
            <div className='absolute right-10 top-0'>
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
    )
}

export default SlickCast
