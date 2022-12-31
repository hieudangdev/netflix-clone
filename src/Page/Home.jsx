import Main from 'Componets/Main/Main';
import React from 'react';
import requests from 'api/Config/tmdb.config';
import tmdbConfig from './../api/Config/tmdb.config';

function Home() {
   return (
      <div className=' mt-16 px-[15px] lg:px-[120px] 2xl:px-[200px] '>
         <Main
            title='Trending'
            mediaType={tmdbConfig.mediaType.movie}
            mediaCategory={tmdbConfig.mediaCategory.popular}
         />
         <Main title='Netflix' mediaType={tmdbConfig.mediaType.tv} mediaCategory={tmdbConfig.mediaCategory.top_rated} />
      </div>
   );
}

export default Home;
