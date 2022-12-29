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
import { Button, Stack } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import UpdateIcon from '@mui/icons-material/Update';
import HoverRow from './../Componets/Row/HoverRow';
import Ratings from './../Componets/Row/Ratings';
import { Fullscreen, Translate } from '@mui/icons-material';

function Profile() {
   let { id } = useParams();
   const [infoMovies, setinfoMovies] = useState([]);
   const [genMovies, setgenMovies] = useState([]);
   const [infoCast, setinfoCast] = useState([]);

   useEffect(() => {
      const fetchApiCast = async () => {
         const request = await instance.get(`movie/${id}/casts?api_key=${apiKey}&language=en-US`);
         setinfoCast(request.data.cast.slice(0, 10));
      };
      fetchApiCast();
   }, [id]);

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
                     <Button
                        variant='contained'
                        sx={{
                           width: 1,
                           backgroundColor: 'red',
                           color: 'white',
                           ':hover': {
                              backgroundColor: 'red',
                           },
                        }}
                     >
                        Xem phim
                     </Button>
                  </div>
               </div>
               <div className='relative col-span-3 mt-5 w-full p-3 leading-8  text-white lg:col-span-3 lg:mt-0   '>
                  <div className=' text-[45px]'>{infoMovies?.title}</div>
                  <div className=' mt-2 text-[20px] '>{infoMovies?.original_title}</div>
                  <div className='flex lg:mt-4 '>
                     <Ratings value={infoMovies?.vote_average} color='success' size={40} />
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
                              color: 'red',
                              borderColor: 'red',
                              ':hover': {
                                 borderColor: 'white',
                                 color: 'white',
                              },
                           }}
                        >
                           {genre.name}
                        </Button>
                     ))}
                  </div>
                  <SlickCast infoCast={infoCast} />
               </div>
            </div>
         </div>

         <MoreMovies />
      </div>
   );
}

export default Profile;
