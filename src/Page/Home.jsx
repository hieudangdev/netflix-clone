import Row from 'Componets/Row/Row'
import React from 'react'
import requests from 'requests'

function Home() {
    return (
        <div className='px-[15px] lg:px-[100px] mt-16'>
            Home
            <Row title='Trending' fetchUrl={requests.fetchTrending} />
            {/* <Row title='TopRated' fetchUrl={requests.fetchNetflixOriginals} />
            <Row title='Netflix' fetchUrl={requests.fetchNetflixOriginals} /> */}
        </div>
    )
}

export default Home
