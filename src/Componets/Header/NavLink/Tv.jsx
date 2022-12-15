import Row from 'Componets/Row/Row'
import instance from 'instance'
import React, { useEffect } from 'react'
import { useState } from 'react'
import requests from 'requests'

function Tv() {
    const [Movies, setMovies] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const request = await instance.get(requests.fetchNetflixOriginals)
            setMovies(request.data.results)
        }
        fetchApi()
    }, [requests.fetchNetflixOriginals])

    return (
        <div className=' px-[15px] mt-16 lg:px-[100px]'>
            <div className='w-full'>
                <Row dataMovies={Movies} title='Phim Bộ' />
            </div>
        </div>
    )
}

export default Tv
