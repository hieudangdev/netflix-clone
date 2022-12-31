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
];

function Header() {
   return (
      <header
         className='fixed top-0  z-50 flex  h-12 w-full   items-center  justify-between  bg-gray-900/40 px-4 shadow-lg shadow-gray-700/10 
        '
      >
         <div className=' flex h-full items-center text-[18px] uppercase lg:text-[24px] '>
            <div className='-ml-4 lg:hidden'>
               <DrawerComp pages={navheader} />
            </div>
            <Link to={routes.home} className='flex flex-grow cursor-pointer justify-center font-[900] text-red-600 '>
               PHIMVIP
            </Link>

            <div className='ml-5 hidden  lg:flex'>
               {navheader.map((nav, index) => (
                  <NavLink key={index} to={nav.link} className={`px-4 text-[17px] font-light `}>
                     <button className=' tracking-wider'> {nav.title}</button>
                  </NavLink>
               ))}
            </div>
         </div>

         <div className='inline-flex'>
            <div className=' flex'>
               <Button
                  variant='outlined'
                  sx={{
                     maxHeight: 30,
                     fontSize: 12,
                  }}
                  startIcon={
                     <SearchIcon color='primary' sx={{ marginRight: 0, fontSize: 12, Width: 20 }} className='  ' />
                  }
                  className='mr-2 max-w-[100px]'
               >
                  Search
               </Button>
               <Button
                  variant='outlined'
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
