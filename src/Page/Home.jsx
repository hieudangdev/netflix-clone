import Main from 'Componets/Main/Main';
import React from 'react';
import requests from 'requests';

function Home() {
   return (
      <div className=' mt-16 px-[15px] lg:px-[120px] 2xl:px-[200px] '>
         <Main title='Trending' fetchUrl={requests.fetchActionMovies} />
         <Main title='Netflix' fetchUrl={requests.fetchNetflixOriginals} />
      </div>
   );
}

export default Home;
