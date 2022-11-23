import React, { useEffect, useState } from 'react'
import { routes } from 'Router/Router'
import { Link, useParams } from 'react-router-dom'
import Profile from 'Page/Profile'
import instance from '../../axios'


function Row({ title, fetchUrl }) {

    const posterBaseUrl = 'https://image.tmdb.org/t/p/original'
    const [movies, setmovies] = useState([])
    const handleViewFilm = (id) => {
        return routes.profile = '/movie/' + id

    }
    useEffect(() => {
        const fetchApi = async () => {
            const request = await instance.get(fetchUrl)
            setmovies(request.data.results)
            return request
        }
        fetchApi()
    }, [])

    //select 8 film to view
    const eightvideos = movies.slice(0, 8)



    return (
        <div className='text-white mb-8 '>
            <h2 className='mb-4 leading-9 border-b border-gray-700 '>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 lg:gap-4'>
                {eightvideos.map((movie, index) => (

                    <Link to={routes.profile} onClick={handleViewFilm(movie.id)} key={movie.id} >
                        <button className='relative   flex-col font-[400] lg:hover:scale-105 shadow-md overflow-hidden shadow-gray-800/50  text-start rounded-md' >
                            <div className=" absolute top-0 ml-2 w-[18px] bg-red-600 text-center rounded-b-md  font-[700] h-8  text-white text-[6px] ">IMDB
                                <div className='text-[10px]'>{Math.floor(movie.vote_average)}</div>
                            </div>
                            <div className=''>
                                <img src={posterBaseUrl + movie.poster_path} className=' w-full  h-full  object-cover' alt='movie' />
                            </div>
                            <div className='p-2'>
                                <div className="text-[13px] text-[#dbdbd] mt-1 ">{movie.title || movie.name}</div>
                                <div className="text-[10px] font-extralight ]">{movie.title || movie.original_name}</div>
                            </div>
                        </button>
                    </Link>

                ))}

            </div>
        </div >

    )
}

export default Row  