import Row from 'Componets/Row/Row'
import instance from 'instance'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey } from 'requests'

function MoreMovies() {
    const [MoreMovies, setMoreMovies] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setMoreMovies([])
        const fetchApiMore = async () => {
            const requests = await instance.get(`movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`)
            setMoreMovies(requests.data.results.slice(0, 8))
        }
        fetchApiMore()
    }, [id])
    return (
        <div>
            <div className='lg:mx-[150px] lg:mt-[180px] mx-2    '>
                <Row dataMovies={MoreMovies} title='Phim tương tự' />
            </div>

            <div className='flex  mt-10  justify-center items-center '>
                <button className='text-white bg-red-600  p-2 px-4 rounded-xl'> Xem Thêm...</button>
            </div>
        </div>
    )
}

export default MoreMovies
