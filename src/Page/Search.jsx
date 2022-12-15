import Row from 'Componets/Row/Row'
import instance from 'instance'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey } from 'requests'

function SearchPage() {
    let { id, q } = useParams()
    const [searchMovies, setsearchMovies] = useState([])

    console.log(searchMovies)
    useEffect(() => {
        setsearchMovies([])
        window.scrollTo(0, 0)

        const fetchApi = async () => {
            const request = await instance.get(`search/movie?api_key=${apiKey}&language=en-US&query=${q}&page=1&include_adult=false`)
            setsearchMovies(request.data.results)
        }
        fetchApi()
    }, [q])

    return (
        <div className='px-[15px] pb-[200px] lg:px-[100px] mt-16 lg:mt-[100px]'>
            <Row dataMovies={searchMovies} />
        </div>
    )
}
export default SearchPage
