import Search from 'Componets/Header/Search/Search'
import Row from 'Componets/Row/Row'
import instance from 'instance'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey } from 'requests'

function SearchPage() {
    let { q } = useParams()
    const [searchMovies, setsearchMovies] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const request = await instance.get(`search/movie?api_key=${apiKey}&language=en-US&query=${q}&page=1&include_adult=false`)
            setsearchMovies(request.data.results)
        }
        fetchApi()
    }, [q])

    return (
        <div className='px-[15px] pb-[200px] lg:px-[100px] mt-[40px] lg:mt-[100px]'>
            <Search className='lg:hidden relative w-full h-10 rounded-full bg-gray-700/50 overflow-hidden' />

            <Row dataMovies={searchMovies} title={`Kết quả`} />
        </div>
    )
}
export default SearchPage
