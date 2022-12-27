import Search from 'Componets/Header/Search/Search';
import Row from 'Componets/Row/Row';
import instance from 'instance';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey } from 'requests';

function SearchPage() {
   let { q } = useParams();
   const [searchMovies, setsearchMovies] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         setsearchMovies([]);
         const request = await instance.get(
            `search/movie?api_key=${apiKey}&language=en-US&query=${q}&page=1&include_adult=false`,
         );
         setsearchMovies(request.data.results);
      };
      fetchApi();
   }, [q]);

   return (
      <div className='mt-[60px] px-[15px] pb-[200px] lg:mt-[100px] lg:px-[120px]'>
         <Search className=' relative h-10 w-full overflow-hidden rounded-lg bg-gray-700/50' />

         <Row dataMovies={searchMovies} title={`Kết quả`} />
      </div>
   );
}
export default SearchPage;
