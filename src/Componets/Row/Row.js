import axios from '../../axios'
import React, { useEffect, useState } from 'react'

function Row({ title, fetchUrl }) {

    const posterBaseUrl = 'https://image.tmdb.org/t/p/original'
    const [movies, setmovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setmovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className=''
        >
            <h2>{title}</h2>
            <div className='flex h-[200px] justify-start items-start w-full'>
                {movies.map((movie) => (
                    <div key={movie.id} className='block' >
                        <div>
                            <img src={posterBaseUrl + movie.poster_path} className='w-12 block mr-2 h-15' alt='movie' />
                        </div>
                        <div className="text-[14px] text-white">{movie.title}</div>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Row  