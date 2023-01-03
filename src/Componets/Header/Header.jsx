import { Button } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from 'Router/Router';
import './header.css';
import DrawerComp from './DrawerComp';

import SearchIcon from '@mui/icons-material/Search';
export const navheader = [
   {
      tabindex: 1,
      title: 'Top Rate',
      link: routes.top,
   },
   {
      tabindex: 2,
      title: 'Now Playing',
      link: routes.movies,
   },
   {
      tabindex: 3,
      title: 'Up Coming',
      link: routes.tv,
   },
   {
      tabindex: 4,
      title: 'Tìm kiếm',
      link: routes.search,
   },
   {
      tabindex: 5,
      title: 'Login',
      link: routes.search,
   },
];

function Header() {
   return (
      <header className='fixed top-0  z-50 flex  h-12 w-full   items-center  justify-between  bg-[#05103b] px-4 shadow-lg shadow-gray-700/10 '>
         <div className=' flex h-full w-full items-center text-[18px] uppercase lg:text-[24px] '>
            <div className='-ml-4 lg:hidden'>
               <DrawerComp pages={navheader} />
            </div>
            <div className=' flex cursor-pointer  justify-center  text-[25px]  font-[900] text-red-600  '>
               <Link to={routes.home}>PHIMVIP</Link>
            </div>

            <div className='hidden lg:ml-5  lg:flex'>
               {navheader.map(
                  (nav, index) =>
                     index != 4 && (
                        <NavLink
                           key={index}
                           to={nav.link}
                           className={`border-l border-gray-500  px-4 text-[17px] font-light `}
                        >
                           <button className=' tracking-wide'> {nav.title}</button>
                        </NavLink>
                     ),
               )}
            </div>
         </div>

         <div className='inline-flex'>
            <div className=' flex'>
               <Link to={routes.search} className='lg:hidden'>
                  <SearchIcon color='primary' fontSize='large' className='  ' />
               </Link>
               <Button
                  variant='outlined'
                  className='text-[15px] '
                  sx={{
                     borderRadius: '4px',
                     color: 'white',
                     backgroundColor: 'red',
                     maxHeight: 30,
                     borderColor: 'red',
                     fontSize: '12px',
                     marginRight: '-10px',
                  }}
               >
                  Login
               </Button>
            </div>
         </div>
      </header>
   );
}

export default Header;
