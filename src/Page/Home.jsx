import Main from 'Componets/Main/Main'
import Row from 'Componets/Row/Row'
import React from 'react'
import requests from 'requests'

function Home() {
    return (
        <div className='px-[15px] pb-[200px] lg:px-[100px] mt-16'>
            <Main title='Trending' fetchUrl={requests.fetchActionMovies} />
            <Main title='Netflix' fetchUrl={requests.fetchNetflixOriginals} />
        </div>
    )
}

export default Home
