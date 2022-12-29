import React from 'react';
import Ratings from './Ratings';
import { Button } from '@mui/material';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import UpdateIcon from '@mui/icons-material/Update';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

function HoverRow({ movie }) {
   return (
      <div className='absolute inset-x-0 top-8  -bottom-8  z-10 bg-gradient-to-t from-black  to-black/50  opacity-0   transition-all content-none group-hover:top-0 group-hover:bottom-0  group-hover:opacity-100   '>
         <div className='bg-blue-400\ flex h-full w-full flex-col items-start  justify-between p-3 '>
            <div className='text-start '>
               <Ratings value={movie?.vote_average} size={35} color='success' />
            </div>
            <div className='flex w-full justify-center '>
               <Button
                  variant='outlined'
                  sx={{
                     borderColor: 'red',
                     color: 'red',
                  }}
                  color='error'
                  size='small'
               >
                  More
               </Button>
            </div>
            <div className=' flex w-full  items-end justify-between text-[14px]'>
               <div className='text-start'>
                  <div>
                     <RemoveRedEyeOutlinedIcon color='warning' /> {movie?.popularity}
                  </div>
                  <div>
                     <ThumbUpOffAltIcon color='info' />
                     {movie?.vote_count}
                  </div>
                  <div>
                     <UpdateIcon color='success' />
                     {movie?.release_date}
                  </div>
               </div>
               <div className=''>
                  <Button variant='outlined' size='small' sx={{ minWidth: 30 }}>
                     {movie?.original_language}
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HoverRow;
