import { IMDb } from 'Assets/icon'
import instance from 'instance'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, posterBaseUrl } from 'requests'

function Profile() {
    let { id } = useParams()
    const [infoMovies, setinfoMovies] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const request = await instance.get(`movie/${id}?api_key=${apiKey}`)
            setinfoMovies(request.data)
        }
        fetchApi()
    }, [id])

    console.log(infoMovies)

    return (
        <div className=' text-white  relative '>
            <img className='transition-all opacity-30 mb-[800px] lg:mb-0 h-full w-full object-fill' src={posterBaseUrl + infoMovies.backdrop_path} alt='' />

            <div className='absolute  w-full right-2 left-2 top-[80px] z-30'>
                <div className=' grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-2'>
                    <div className=' shadow-md    '>
                        <img className='block w-[full] p-5 object-cover' src={posterBaseUrl + infoMovies.poster_path} alt='' />
                        <button className='p-2 bg-red-600 w-full rounded-sm  hover:opacity-80'>Xem Phim</button>
                    </div>
                    <div className='leading-8 mt-5 p-3 lg:col-span-3  text-white w-full   '>
                        <div className=' text-[35px]'>{infoMovies.original_title}</div>
                        <div className=' text-[18px] text-white/70 '>{infoMovies.original_title}</div>
                        <div className='text-[14px] text-white/70'>
                            Release
                            <span className='text-blue-400'> ({infoMovies.release_date})</span>
                        </div>
                        <div>
                            <IMDb className='w-[30px] inline items-center  h-[30px] ' />

                            <span> {infoMovies.vote_average}</span>
                        </div>
                        <div className='text-white/70 text-[14px]'>
                            popularity <span className='text-white'>({infoMovies.popularity})</span>
                        </div>

                        <div className='text-[16px] text-white/70 '>{infoMovies.overview}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
