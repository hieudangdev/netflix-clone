import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'Router/Router';
const DrawerComp = ({ pages, User }) => {
   const [openDrawer, setOpenDrawer] = useState(false);
   const [selectedIndex, setSelectedIndex] = useState(0);
   const handleListItemSelected = (e, index) => setSelectedIndex(index);

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
            <Link to={routes.home}>
               <button className='w-full py-2 text-[22px] font-extrabold  text-Red '>PHIMVIP</button>
            </Link>
            {User && <p>{User.displayName}</p>}
            <Divider />
            <List disablePadding>
               {pages.map(
                  (page, index) =>
                     index !== 3 && (
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
                           onClick={() => setSelectedIndex(page.tabindex)}
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
         </Drawer>
         <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon color='primary' className='text-[30px]' />
         </IconButton>
      </React.Fragment>
   );
};

export default DrawerComp;
