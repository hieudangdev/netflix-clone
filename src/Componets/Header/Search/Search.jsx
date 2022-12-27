import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from 'Router/Router';
import SearchIcon from '@mui/icons-material/Search';

function Search({ className }) {
   const navigate = useNavigate();
   const [searchValue, setsearchValue] = useState('');

   return (
      <div>
         <div className={className}>
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
               className='block  h-full w-full rounded-full bg-transparent p-4 pr-10 text-base font-normal text-white outline-none '
               placeholder='Search Movies'
            />
            <Link to={routes.searchLink(searchValue)}>
               <div
                  onClick={() => setsearchValue('')}
                  className='absolute inset-y-0 right-0 flex items-center p-3 hover:bg-slate-600 '
               >
                  <SearchIcon color='primary' />
               </div>
            </Link>
         </div>
      </div>
   );
}

export default Search;
