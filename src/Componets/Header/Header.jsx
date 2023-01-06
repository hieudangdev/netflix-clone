import { Button } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from 'Router/Router';
import './styleHeader.css';
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
      <header
         className='fixed top-0  z-50 flex  h-12 w-full  items-center justify-between  bg-primary/95 px-1
       text-white shadow-lg shadow-gray-700/10 '
      >
         <div className=' flex h-full w-full items-center text-[18px] uppercase lg:text-[24px] '>
            <div className='lg:hidden'>
               <DrawerComp pages={navheader} />
            </div>

            <Link
               to={routes.home}
               className=' block w-full cursor-pointer text-center  text-[25px] font-[900]  text-Red lg:w-auto'
            >
               PHIMVIP
            </Link>

            <div className='hidden  lg:ml-5 lg:flex'>
               {navheader.map(
                  (nav, index) =>
                     index != 4 && (
                        <NavLink key={index} to={nav.link} className={`px-3 text-[17px] font-light `}>
                           <button className=' tracking-wide'> {nav.title}</button>
                        </NavLink>
                     ),
               )}
            </div>
         </div>

         <div className='inline-flex'>
            <div className=' flex'>
               <Link to={routes.search} className='lg:hidden'>
                  <SearchIcon color='primary' className='text-[30px]' />
               </Link>
               <Button variant='outlined' size='small' className='hidden border-Red text-[14px] text-Red lg:block'>
                  Login
               </Button>
            </div>
         </div>
      </header>
   );
}

export default Header;
