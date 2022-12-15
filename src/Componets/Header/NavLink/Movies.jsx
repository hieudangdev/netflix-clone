import Row from 'Componets/Row/Row'
import instance from 'instance'
import React, { useEffect } from 'react'
import { useState } from 'react'
import requests from 'requests'

function Movies() {
    const [Movies, setMovies] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const request = await instance.get(requests.fetchTrending)
            setMovies(request.data.results)
        }
        fetchApi()
    }, [requests.fetchTrending])

    return (
        <div className=' px-[15px] mt-16 lg:px-[100px]'>
            <div className='w-full'>
                <Row dataMovies={Movies} title='Phim Lẻ' />
            </div>
        </div>
    )
}

export default Movies
