import Row from 'Componets/Row/Row'
import instance from 'instance'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Main({ title, fetchUrl }) {
    const [Movies, setMovies] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results.slice(0, 8))
        }
        fetchApi()
    }, [fetchUrl])

    return (
        <div className='w-full'>
            <Row dataMovies={Movies} title={title} />
        </div>
    )
}

export default Main
