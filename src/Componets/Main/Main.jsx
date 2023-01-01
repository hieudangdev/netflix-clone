import Row from 'Componets/Row/Row';
import React, { useEffect, useState } from 'react';
import mediaApi from './../../api/modules/mediaApi';

function Main({ title, mediaType, mediaCategory }) {
   const [Movies, setMovies] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         const request = await mediaApi.getList({
            mediaType,
            mediaCategory,
            page: 1,
         });
         setMovies(request.response.data.results.slice(0, 10));
      };
      fetchApi();
   }, [mediaType, mediaCategory]);

   return (
      <div className='w-full'>
         <Row dataMovies={Movies} mediaType={mediaType} title={title} />
      </div>
   );
}

export default Main;
