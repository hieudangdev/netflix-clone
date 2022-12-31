import Search from 'Componets/Header/Search/Search';
import Row from 'Componets/Row/Row';
import instance from 'api/Config/ClientApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mediaApi from './../api/modules/mediaApi';
import tmdbConfigs from 'api/Config/tmdb.config';

function SearchPage() {
   let { q } = useParams();
   const [searchMovies, setsearchMovies] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         setsearchMovies([]);
         const request = await mediaApi.search({
            mediaType: tmdbConfigs.mediaType.movie,
            query: q,
            page: 1,
         });
         setsearchMovies(request.response.data.results);
      };
      fetchApi();
   }, [q]);
   console.log(searchMovies);

   return (
      <div className='mt-[60px] px-[15px] pb-[200px] lg:mt-[100px] lg:px-[120px]'>
         <Search className=' relative h-10 w-full overflow-hidden rounded-lg bg-gray-700/50' />

         <Row dataMovies={searchMovies} title={`Kết quả`} />
      </div>
   );
}
export default SearchPage;
