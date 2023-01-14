import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from 'Router/Router';

import Logout from '@mui/icons-material/Logout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Settings from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import { auth } from '../../firebase';
import DrawerComp from './DrawerComp';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import './styleHeader.css';
export const navheader = [
   {
      tabindex: 1,
      title: 'Top Rate',
      link: routes.top,
   },
   {
      tabindex: 2,
      title: 'Now Playing',
      link: routes.nowplaying,
   },
   {
      tabindex: 3,
      title: 'Up Coming',
      link: routes.upcoming,
   },
   {
      tabindex: 4,
      title: 'Tìm kiếm',
      link: routes.search,
   },
];

function Header() {
   const [IsUser, setIsUser] = useState(false);
   const [User, setUser] = useState('');
   const [anchorEl, setAnchorEl] = useState(null);
   const open = !!anchorEl;

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setIsUser(true);
            setUser(user);
         }
      });
   }, []);

   const signout = async () => {
      signOut(auth)
         .then(() => {
            window.location.reload();
            toast.success('User is signed out !');
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <header
         className='fixed top-0  z-50 flex h-12  w-full items-center  justify-between bg-primary/95  px-4 
       text-white shadow-lg shadow-gray-700/10 '
      >
         <div className=' flex h-full w-full items-center text-[18px] uppercase lg:text-[24px] '>
            <div className='lg:hidden'>
               <DrawerComp pages={navheader} User={User} />
            </div>f

            <Link to={routes.home} className=' block w-full cursor-pointer text-center  text-[25px] font-[900]  text-Red lg:w-auto'>
               PHIMVIP
            </Link>

            <div className='hidden  lg:ml-5 lg:flex'>
               {navheader.map((nav, index) =>
                  index === 4 ? null : (
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

               {IsUser ? (
                  <>
                     <Tooltip title='Account settings'>
                        <Button
                           aria-controls={open ? 'basic-menu' : undefined}
                           aria-haspopup='true'
                           aria-expanded={open ? 'true' : undefined}
                           onClick={handleClick}
                           variant='outlined'
                           size='small'
                           className='  hidden border-Blue  text-[15px] capitalize   text-Blue lg:flex'
                        >
                           {User.displayName} <ArrowDropDownIcon />
                        </Button>
                     </Tooltip>
                     <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                           'aria-labelledby': 'basic-button',
                        }}
                        PaperProps={{
                           elevation: 0,
                           sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              paddingX: 4,
                              fontSize: 15,
                              borderRadius: 2,
                              color: 'white',
                              backgroundColor: '#000000',
                              '& .MuiAvatar-root': {
                                 width: 32,
                                 height: 32,
                                 ml: -0.5,
                                 mr: 1,
                              },

                              '&:before': {
                                 content: '""',
                                 display: 'block',
                                 position: 'absolute',
                                 top: 0,
                                 right: 14,
                                 width: 10,
                                 height: 10,
                                 color: 'white',
                                 backgroundColor: '#000000',
                                 transform: 'translateY(-50%) rotate(45deg)',
                                 zIndex: 0,
                              },
                           },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                     >
                        <MenuItem>
                           <ListItemIcon>
                              <Avatar fontSize='small' />
                           </ListItemIcon>
                           Accounts
                        </MenuItem>
                        <MenuItem>
                           <ListItemIcon>
                              <MonetizationOnIcon className='text-white' />
                           </ListItemIcon>
                           0
                        </MenuItem>
                        <Divider color='white' />

                        <MenuItem>
                           <ListItemIcon>
                              <Settings className='text-white' fontSize='small' />
                           </ListItemIcon>
                           Settings
                        </MenuItem>
                        <MenuItem onClick={signout}>
                           <ListItemIcon>
                              <Logout className='text-white' fontSize='small' />
                           </ListItemIcon>
                           Logout
                        </MenuItem>
                     </Menu>
                  </>
               ) : (
                  <Link to={routes.accounts}>
                     <Button variant='outlined' size='small' className='hidden border-Red text-[14px] text-Red lg:block'>
                        Login
                     </Button>
                  </Link>
               )}
            </div>
         </div>
      </header>
   );
}

export default Header;
