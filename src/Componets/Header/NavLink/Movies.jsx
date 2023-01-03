import Row from 'Componets/Row/Row';
import React, { useEffect } from 'react';
import { useState } from 'react';
import mediaApi from './../../../api/modules/mediaApi';
import tmdbConfigs from './../../../api/Config/tmdb.config';
import { navheader } from '../Header';

function Movies() {
   const [Movies, setMovies] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         const request = await mediaApi.getList({
            mediaType: tmdbConfigs.mediaType.movie,
            mediaCategory: tmdbConfigs.mediaCategory.nowplaying,
            page: 1,
         });
         setMovies(request.response.data.results);
      };
      fetchApi();
   }, []);

   return (
      <div className=' mt-16 px-[15px] lg:px-[120px]'>
         <div className='w-full'>
            <Row dataMovies={Movies} mediaType={tmdbConfigs.mediaType.movie} title={navheader[1].title} />
         </div>
      </div>
   );
}

export default Movies;
