import Main from 'Componets/Main/Main'
import Row from 'Componets/Row/Row'
import React from 'react'
import requests from 'requests'

function Home() {
    return (
        <div className='px-[15px] lg:px-[100px] mt-16'>
            Home
            <Main title='trending' fetchUrl={requests.fetchActionMovies} />
        </div>
    )
}

export default Home
