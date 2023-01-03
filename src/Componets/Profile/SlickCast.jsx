import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Images from 'Componets/Image/Images';
import tmdbConfigs from './../../api/Config/tmdb.config';
import mediaApi from './../../api/modules/mediaApi';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

function SlickCast({ mediaType, mediaId }) {
   const swiperRef = useRef(null);
   const [infoCast, setinfoCast] = useState([]);

   useEffect(() => {
      const fetchApiCast = async () => {
         const request = await mediaApi.getCast({
            mediaType,
            mediaId,
         });
         setinfoCast(request.response.data.cast.slice(0, 20));
      };
      fetchApiCast();
   }, [mediaId, mediaType]);

   const sliderSettings = {
      680: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
      1024: {
         slidesPerView: 2,
      },
   };

   return (
      <div className=' relative  mt-5  w-full '>
         <div className='mb-4 flex w-full justify-end '>
            <button className='prev bg-slate-900/10 px-1 ' onClick={() => swiperRef.current?.slidePrev()}>
               <KeyboardArrowLeftIcon fontSize='large' />
            </button>
            <button className='next bg-slate-900/10 px-1' onClick={() => swiperRef.current?.slideNext()}>
               <KeyboardArrowRightIcon fontSize='large' />
            </button>
         </div>
         <div className='w-full '>
            <Swiper
               slidesPerView={3}
               spaceBetween={1}
               modules={[Navigation]}
               slidesPerGroup={3}
               freeMode={true}
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
               }}
               breakpoints={{
                  640: {
                     slidesPerView: 4,
                     slidesPerGroup: 4,
                  },
                  1024: {
                     slidesPerView: 6,
                     slidesPerGroup: 6,
                  },
               }}
               style={{ width: '100%', height: 'max-content' }}
            >
               {infoCast.map((cast, index) => {
                  return (
                     <SwiperSlide key={index} className='  flex flex-col items-center'>
                        <div className='h-[100px] w-[100px]'>
                           <Images
                              src={tmdbConfigs.posterPath(cast.profile_path)}
                              className='block h-full w-full rounded-full object-cover'
                           />
                        </div>
                        <span className='  mt-1 text-[14px] '>{cast.original_name}</span>
                        <p className=' text-[13px] font-light leading-3'>{cast.character}</p>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </div>
   );
}

export default SlickCast;
