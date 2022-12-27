import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IMDb } from 'Assets/icon';
import Images from 'Componets/Image/Images';
import instance from 'instance';
import { apiKey, posterBaseUrl } from 'requests';
import MoreMovies from 'Componets/Profile/MoreMovies';
import SlickCast from 'Componets/Profile/SlickCast';
import { Button } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import UpdateIcon from '@mui/icons-material/Update';
import HoverRow from './../Componets/Row/HoverRow';

function Profile() {
   let { id } = useParams();
   const [infoMovies, setinfoMovies] = useState([]);
   const [genMovies, setgenMovies] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         const request = await instance.get(`movie/${id}?api_key=${apiKey}&language=en-US`);
         setinfoMovies(request.data);
         setgenMovies(request.data.genres);
      };
      fetchApi();
   }, [id]);

   return (
      <div className=' relative text-white  '>
         <Images
            className='-z-30 h-auto w-full object-cover opacity-20 lg:mb-0'
            src={posterBaseUrl + infoMovies?.backdrop_path}
            alt=''
         />

         <div className=' relative z-20 -mt-[200px] w-full  pl-2 lg:-mt-[600px] '>
            <div className=' grid grid-cols-1 gap-x-2 md:grid-cols-4 lg:grid-cols-4 lg:px-16'>
               <div className='px-10 pt-10   lg:px-5 lg:pt-0 '>
                  <div className='overflow-hidden rounded-2xl shadow-2xl'>
                     <Images
                        className='block max-w-full   object-cover'
                        src={posterBaseUrl + infoMovies?.poster_path}
                        alt=''
                     />
                  </div>
                  <div className='w-full pt-4 '>
                     <button className='w-full rounded-sm  bg-red-600 py-2  hover:opacity-80'>Xem phim</button>
                  </div>
               </div>
               <div className='relative col-span-3 mt-5 w-full p-3 leading-8  text-white lg:col-span-3 lg:mt-0   '>
                  <div className=' text-[35px]'>{infoMovies?.original_title}</div>
                  <div className=' text-[18px] '>{infoMovies?.original_title}</div>
                  <div className='flex lg:mt-4 '>
                     <IMDb className='mr-2 h-[30px] w-[30px]' />

                     <HoverRow value={infoMovies?.vote_average} size={40} />
                  </div>
                  <div className='text-[16px] '>
                     <UpdateIcon color='success' />
                     <span className='ml-2 '>{infoMovies?.release_date}</span>
                  </div>
                  <div className=' text-[16px] '>
                     <RemoveRedEyeOutlinedIcon color='warning' />
                     <span className=' ml-2'>{infoMovies?.popularity}</span>
                  </div>
                  <div className=' text-[16px] '>
                     <ThumbUpOffAltIcon color='info' />
                     <span className=' ml-2'>{infoMovies?.vote_count}</span>
                  </div>

                  <div className='mt-2 text-[15px] text-white/80 '>{infoMovies?.overview}</div>
                  <div className='mt-3 flex   '>
                     {genMovies.map((genre, index) => (
                        <Button
                           key={index}
                           variant='outlined'
                           size='small'
                           sx={{
                              borderRadius: '50px',
                              marginRight: '15px',
                           }}
                        >
                           {genre.name}
                        </Button>
                     ))}
                  </div>
                  <SlickCast />
               </div>
            </div>
         </div>

         <MoreMovies />
      </div>
   );
}

export default Profile;
