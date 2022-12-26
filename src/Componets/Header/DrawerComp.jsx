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
            <button className='w-full py-2 font-extrabold text-red-500  text-[18px] '>PHIMVIP</button>
            <Divider />
            <List disablePadding>
               {pages.map((page, index) => (
                  <ListItemButton
                     key={index}
                     sx={{
                        '&.Mui-selected': {
                           backgroundColor: '#2e8b57',
                        },
                        '&.Mui-focusVisible': {
                           backgroundColor: '#2e8b57',
                        },
                     }}
                     LinkComponent={NavLink}
                     selected={selectedIndex === page.tabindex}
                     onClick={() => setSelectedIndex(page.tabindex)}
                  >
                     <ListItemIcon>
                        <ListItemText
                           sx={{ my: 0, color: 'white' }}
                           primary={page.title}
                           primaryTypographyProps={{
                              fontSize: 18,
                              fontWeight: 'medium',
                              letterSpacing: 1,
                              pt: 1,
                           }}
                        />
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
