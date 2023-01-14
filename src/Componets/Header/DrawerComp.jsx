import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'Router/Router';
import { auth } from '../../firebase';

import Avatar from '@mui/material/Avatar';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const DrawerComp = ({ pages, User }) => {
   const [openDrawer, setOpenDrawer] = useState(false);
   const [selectedIndex, setSelectedIndex] = useState(0);
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
   return (
      <React.Fragment>
         <Drawer
            PaperProps={{
               sx: {
                  width: 200,
                  backgroundColor: '#111827',
                  color: 'white',
               },
            }}
            anchor='left'
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
         >
            <Link to={routes.home} onClick={() => setOpenDrawer(false)}>
               <button className='w-full bg-gray-900/70 py-2  text-[22px] font-extrabold  text-Red '>PHIMVIP</button>
            </Link>
            {User && (
               <div className='flex h-14 w-full  items-center justify-around bg-gray-800/40 px-4 text-center font-semibold uppercase text-Orange'>
                  <Avatar fontSize='small' /> {User.displayName}
               </div>
            )}
            <List disablePadding>
               {pages.map((page, index) =>
                  index === 3 ? null : (
                     <ListItemButton
                        key={index}
                        sx={{
                           '&.Mui-selected': {
                              backgroundColor: 'rgba(25, 118, 210, 0.12)',
                              color: 'orange',
                           },
                           '&.Mui-focusVisible': {
                              backgroundColor: 'rgba(25, 118, 210, 0.12)',
                              color: 'orange',
                           },
                        }}
                        selected={selectedIndex === page.tabindex}
                        onClick={() => {
                           setOpenDrawer(false);
                           setSelectedIndex(page.tabindex);
                        }}
                     >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                           <Link to={page.link}>
                              <ListItemText
                                 sx={{ my: 0 }}
                                 primary={page.title}
                                 primaryTypographyProps={{
                                    fontSize: 16,
                                    fontWeight: 'light',
                                    letterSpacing: '0.05em',
                                    pt: 1,
                                 }}
                              />
                           </Link>
                        </ListItemIcon>
                     </ListItemButton>
                  ),
               )}
            </List>
            {User ? (
               <>
                  <Divider className='mt-2 bg-gray-700' />
                  <Link
                     onClick={() => setOpenDrawer(false)}
                     to={routes.home}
                     className='h-12  w-full px-4 text-[17px] font-light leading-10'
                  >
                     Accounts
                  </Link>
                  <Link
                     onClick={User ? signout : () => setOpenDrawer(false)}
                     to={routes.home}
                     className='h-12  w-full px-4 text-[17px] font-light leading-10'
                  >
                     Settings
                  </Link>
                  <Link
                     onClick={signout}
                     to={routes.home}
                     className='h-12  w-full px-4 text-[17px] font-light leading-10'
                  >
                     Logout
                  </Link>
               </>
            ) : (
               <Link
                  onClick={() => setOpenDrawer(false)}
                  to={routes.accounts}
                  className='h-12  w-full px-4 text-[17px] font-light leading-10'
               >
                  SignIn/SignUp
               </Link>
            )}
         </Drawer>
         <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon color='primary' className='text-[30px]' />
         </IconButton>
      </React.Fragment>
   );
};

export default DrawerComp;
