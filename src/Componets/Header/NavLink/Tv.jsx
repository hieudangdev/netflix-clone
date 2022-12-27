import Row from 'Componets/Row/Row';
import instance from 'instance';
import React, { useEffect } from 'react';
import { useState } from 'react';
import requests from 'requests';

function Tv() {
   const [Movies, setMovies] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         const request = await instance.get(requests.fetchNetflixOriginals);
         setMovies(request.data.results);
      };
      fetchApi();
   }, []);

   return (
      <div className=' mt-16 px-[15px] lg:px-[120px]'>
         <div className='w-full'>
            <Row dataMovies={Movies} title='Phim Bộ' />
         </div>
      </div>
   );
}

export default Tv;
