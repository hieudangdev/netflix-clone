import Row from 'Componets/Row/Row'
import instance from 'instance'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Main({ title, fetchUrl }) {
    const [Movies, setMovies] = useState([])
    let { id } = useParams()

    useEffect(() => {
        const fetchApi = async () => {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results.slice(0, 8))
        }
        fetchApi()
    }, [])

    return (
        <div className='w-full'>
            <h2 className='mb-4 leading-9 border-b border-gray-700 '>{title}</h2>
            <div className='grid grid-cols-4  md:grid-cols-3 lg:grid-cols-4  gap-2 lg:gap-4 '>
                {Movies.map((movie) => {
                    return (
                        <div key={movie.id} className=' '>
                            <Row movie={movie} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main
