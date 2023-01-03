import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MoreMovies from 'Componets/Profile/MoreMovies';
import SlickCast from 'Componets/Profile/SlickCast';
import { Button } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import UpdateIcon from '@mui/icons-material/Update';
import Images from 'Componets/Image/Images';
import tmdbConfigs from './../api/Config/tmdb.config';
import mediaApi from './../api/modules/mediaApi';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Profile() {
   const [infoMovies, setinfoMovies] = useState([]);
   const [genMovies, setgenMovies] = useState([]);

   let { mediaType, mediaId } = useParams();
   console.log(mediaType, mediaId);

   useEffect(() => {
      window.scrollTo(0, 0);
      const fetchApi = async () => {
         const request = await mediaApi.getDetail({
            mediaType,
            mediaId,
         });
         setinfoMovies(request.response.data);
         setgenMovies(request.response.data.genres);
      };
      fetchApi();
   }, [mediaId, mediaType]);

   return (
      <div className=' relative text-white  '>
         <Images
            className='-z-30 h-auto w-full object-cover opacity-20 lg:mb-0'
            src={tmdbConfigs.backdropPath(infoMovies.backdrop_path)}
            alt=''
         />

         <div className=' relative z-20 -mt-[200px] w-full  pl-2 lg:-mt-[680px] '>
            <div className=' grid grid-cols-1 gap-x-2 md:grid-cols-4 lg:grid-cols-4 lg:px-16'>
               <div className='px-10 pt-10   lg:px-5 lg:pt-0 '>
                  <div className='overflow-hidden rounded-2xl shadow-2xl'>
                     <Images
                        className='block max-w-full   object-cover'
                        src={tmdbConfigs.posterPath(infoMovies?.poster_path)}
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
               <div className='relative col-span-3 mt-5 w-full flex-wrap  p-3  text-white lg:col-span-3 lg:mt-0   '>
                  <div className=' text-[45px] leading-[45px]'>{infoMovies?.title}</div>
                  <div className=' mt-2 text-[24px] font-normal text-white/80 '>{infoMovies?.original_title}</div>
                  <div className=' text-[15px] font-medium leading-[16px]'>
                     <div className='mt-1 flex h-[35px] flex-1  items-center  '>
                        <p className='h-[22px] rounded-md border border-orange-600 px-1 text-[13px] font-semibold leading-[22px] text-orange-600'>
                           IMDb
                        </p>
                        <div className='px-2  '>{Math.floor(infoMovies.vote_average * 10) / 10 || 0}</div>
                     </div>
                     <div className='mt-2'>
                        <UpdateIcon color='success' />
                        <span className='ml-2 '>{infoMovies?.release_date}</span>
                     </div>
                     <div className='mt-2 '>
                        <RemoveRedEyeOutlinedIcon color='warning' />
                        <span className=' ml-2'>{infoMovies?.popularity}</span>
                     </div>
                     <div className=' mt-2'>
                        <ThumbUpOffAltIcon color='info' />
                        <span className=' ml-2'>{infoMovies?.vote_count}</span>
                     </div>
                  </div>
                  <div className='mt-5 flex w-full  flex-wrap   justify-between'>
                     <Button
                        startIcon={<FavoriteBorderIcon />}
                        size='small'
                        sx={{
                           borderColor: 'red',
                           color: 'red',
                           marginBottom: 2,
                           ':hover': {
                              backgroundColor: 'red',
                              color: 'white',
                              border: 'none',
                           },
                        }}
                        variant='outlined'
                     >
                        Add to favorite
                     </Button>
                     <div>
                        {genMovies.map((genre, index) => (
                           <Button
                              key={index}
                              variant='outlined'
                              size='small'
                              color='primary'
                              sx={{
                                 borderRadius: '50px',
                                 marginRight: '15px',

                                 color: '#0288D1',
                                 borderColor: '#0288D1',
                                 ':hover': {
                                    borderColor: 'red',
                                    color: 'red',
                                 },
                              }}
                           >
                              {genre.name}
                           </Button>
                        ))}
                     </div>
                  </div>
                  <div className='mt-4 text-[18px] font-normal text-white/90 '>{infoMovies?.overview}</div>

                  <SlickCast mediaType={mediaType} mediaId={mediaId} />
               </div>
            </div>
         </div>

         <MoreMovies />
      </div>
   );
}

export default Profile;
