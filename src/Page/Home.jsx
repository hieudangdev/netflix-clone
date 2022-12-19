import Main from 'Componets/Main/Main'
import React from 'react'
import requests from 'requests'

function Home() {
    return (
        <div className=' px-[15px] mt-16 lg:px-[100px] ]'>
            <Main title='Trending' fetchUrl={requests.fetchActionMovies} />
            <Main title='Netflix' fetchUrl={requests.fetchNetflixOriginals} />
        </div>
    )
}

export default Home
