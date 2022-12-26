import { Button } from '@mui/material';
import { SearchIcon } from 'Assets/icon';
import Search from 'Componets/Header/Search/Search';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from 'Router/Router';
import DrawerNav from './DrawerComp';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import './header.css';
import DrawerComp from './DrawerComp';

function Header() {
   const [showMenu, setshowMenu] = useState(false);
   const navheader = [
      {
         tabindex: 1,
         title: 'Phim Hot',
         link: routes.top,
      },
      {
         tabindex: 2,
         title: 'Phim lẻ',
         link: routes.movies,
      },
      {
         tabindex: 3,
         title: 'Phim Bộ',
         link: routes.tv,
      },
   ];

   return (
      <header
         className='flex h-12  fixed top-0  z-50 px-5   justify-between  items-center  w-full bg-gray-900/40 shadow-lg shadow-gray-700/10 
        '
      >
         <div className=' text-[18px] lg:text-[24px] flex h-full uppercase items-center '>
            <div className='lg:hidden'>
               <DrawerComp pages={navheader} />
            </div>
            <Link to={routes.home} className='flex flex-grow justify-center text-red-600 font-[900] cursor-pointer '>
               PHIMVIP
            </Link>

            <div className='hidden lg:block  ml-5'>
               {navheader.map((nav, index) => (
                  <NavLink key={index} to={nav.link} className={`px-4 text-[16px] font-medium `}>
                     <button className=' tracking-widest'> {nav.title}</button>
                  </NavLink>
               ))}
            </div>
         </div>

         <div className='inline-flex'>
            <div className=' flex'>
               <NavLink to={routes.search}>
                  <SearchIcon className='mx-2 py-2' width={20} />
               </NavLink>
               <Search className=' hidden lg:flex relative w-[300px]  h-9 rounded-full bg-gray-700/50 overflow-hidden' />
               <Button
                  variant='outlined'
                  size='small'
                  sx={{
                     color: 'red',
                     borderColor: 'red',
                     padding: '2px',
                     fontSize: '12px',
                     marginRight: '-10px',
                  }}
                  className='lg:block lg:ml-5 text-[14px] bg-transparent border border-red-600  text-red-600 p-1 -mr-3 rounded-md'
               >
                  Login
               </Button>
            </div>
         </div>
      </header>
   );
}

export default Header;
