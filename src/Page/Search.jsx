import tmdbConfigs from 'api/Config/tmdb.config';
import Row from 'Componets/Row/Row';
import useDebounce from 'Hook/useDebounce';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import mediaApi from './../api/modules/mediaApi';

function SearchPage() {
   const navigate = useNavigate();
   const [searchMovies, setsearchMovies] = useState([]);
   const [searchValue, setsearchValue] = useState('');
   const { q } = useParams();
   const debouncedvalue = useDebounce(searchValue, 400);

   useEffect(() => {
      const fetchApi = async () => {
         const request = await mediaApi.search({
            mediaType: tmdbConfigs.mediaType.movie,
            query: debouncedvalue || q,
            page: 1,
         });
         setsearchMovies(request.response.data.results);
      };
      fetchApi();
   }, [debouncedvalue]);

   return (
      <div className='mt-[60px] px-[15px] pb-[200px] lg:mt-[100px] lg:px-[120px]'>
         <div className=' relative h-10 w-full overflow-hidden rounded-lg bg-gray-700/50'>
            <input
               type='search'
               onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                     setsearchValue('');
                     navigate(`/search/${searchValue}`);
                  }
               }}
               onChange={(e) => setsearchValue(e.target.value.trim())}
               value={searchValue}
               className='block h-full w-full  bg-transparent px-4 pr-4 text-base font-normal text-white outline-none '
               placeholder='Search Movies'
            />
         </div>

         <Row dataMovies={searchMovies} mediaType={tmdbConfigs.mediaType.movie} title={`Kết quả`} />
      </div>
   );
}
export default SearchPage;
