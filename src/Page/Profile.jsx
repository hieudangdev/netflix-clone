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
        <div className='mt-[50px] text-white relative'>
            <img className='transition-all opacity-50  h-screen w-full object-cover' src={posterBaseUrl + infoMovies.backdrop_path} alt='' />
            <div className='absolute  w-full top-[60px] '>
                <div className='ml-[100px] flex flex-1'>
                    <div className=' shadow-md overflow-hidden '>
                        <img className='h-[280px] rounded-md  w-[220px] object-cover' src={posterBaseUrl + infoMovies.poster_path} alt='' />
                        <button className='p-[6px] bg-red-600 w-full rounded-sm mt-9'>Xem Phim</button>
                    </div>
                    <div className='ml-[15px] pt-2 leading-8 text-white/80 mr-[40px] w-full   '>
                        <div className=' text-[28px]'>{infoMovies.original_title}</div>
                        <div className=' text-[16px]'>{infoMovies.original_title}</div>
                        <div className='text-[12px]'>Release ({infoMovies.release_date})</div>
                        <div className='text-[16px] '>{infoMovies.overview}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
