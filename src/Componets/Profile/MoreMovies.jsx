import Row from 'Componets/Row/Row';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mediaApi from './../../api/modules/mediaApi';

function MoreMovies() {
   const [MoreMovies, setMoreMovies] = useState([]);
   const { mediaType, mediaId } = useParams();

   useEffect(() => {
      const fetchApiMore = async () => {
         const requests = await mediaApi.getSimiler({
            mediaType,
            mediaId,
         });
         setMoreMovies(requests.response.data.results.slice(0, 8));
      };
      fetchApiMore();
   }, [mediaId, mediaType]);

   return (
      <div>
         <div className='mx-2 lg:mx-[150px] lg:mt-[180px]    '>
            <Row dataMovies={MoreMovies} mediaType={mediaType} title='Phim tương tự' />
         </div>
      </div>
   );
}

export default MoreMovies;
