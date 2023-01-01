import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function Ratings({ value = 0, color, size }) {
   return (
      <div className='relative w-max'>
         <CircularProgress variant='determinate' color={color} value={value * 10} size={size} />
         <div className='absolute inset-0 -mt-[5px] flex items-center justify-center text-[12px]'>
            {Math.floor(value * 10) / 10}
         </div>
      </div>
   );
}

export default Ratings;
