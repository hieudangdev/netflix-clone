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
        <div className=' text-white relative'>
            <img className='transition-all opacity-30  h-full w-full object-cover' src={posterBaseUrl + infoMovies.backdrop_path} alt='' />
            <div className='absolute  w-full top-[60px] '>
                <div className='ml-[100px] flex'>
                    <div className=' shadow-md  overflow-hidden '>
                        <img className='h-[300px] rounded-md  w-[270px] object-cover' src={posterBaseUrl + infoMovies.poster_path} alt='' />
                        <button className='p-[6px] bg-red-600 w-full rounded-sm mt-6 hover:opacity-80'>Xem Phim</button>
                    </div>
                    <div className='ml-[25px] pt-2 leading-8 text-white mr-[40px] w-full   '>
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
