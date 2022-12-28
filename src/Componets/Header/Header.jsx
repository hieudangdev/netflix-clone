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
      {
         tabindex: 4,
         title: 'Tìm kiếm',
         link: routes.search,
      },
   ];

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
                  <NavLink key={index} to={nav.link} className={`px-4 text-[16px] font-medium `}>
                     <button className=' tracking-widest'> {nav.title}</button>
                  </NavLink>
               ))}
            </div>
         </div>

         <div className='inline-flex'>
            <div className=' flex'>
               <Button
                  variant='outlined'
                  sx={{
                     borderRadius: '4px',
                     color: 'white',
                     backgroundColor: 'red',
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
