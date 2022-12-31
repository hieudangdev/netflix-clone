import React, { useState } from 'react';
import {
   Button,
   Divider,
   Drawer,
   IconButton,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { routes } from 'Router/Router';
const DrawerComp = ({ pages }) => {
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
               <button className='w-full py-2 text-[22px] font-extrabold  text-red-500 '>PHIMVIP</button>
            </Link>
            <Divider />
            <List disablePadding>
               {pages.map((page, index) => (
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
               ))}
            </List>
         </Drawer>
         <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon color='white' />
         </IconButton>
      </React.Fragment>
   );
};

export default DrawerComp;
