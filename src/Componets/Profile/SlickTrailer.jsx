import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useEffect } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import YouTube from 'react-youtube';

function SlickTrailer({ Videos, title }) {
   const swiperRef = useRef(null);
   return (
      <div className='relative  w-full '>
         <h2 className=' border-b-2 border-gray-700 text-[20px] font-semibold uppercase leading-9 text-Orange'>
            {title}
         </h2>
         <div className='mb-1 flex w-full justify-end '>
            <button className=' bg-slate-900/10 px-1 ' onClick={() => swiperRef.current?.slidePrev()}>
               <KeyboardArrowLeftIcon fontSize='large' />
            </button>
            <button className=' bg-slate-900/10 px-1' onClick={() => swiperRef.current?.slideNext()}>
               <KeyboardArrowRightIcon fontSize='large' />
            </button>
         </div>
         <div className='mt-1 w-full'>
            <Swiper
               slidesPerView={1}
               spaceBetween={10}
               slidesPerGroup={1}
               freeMode={true}
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
               }}
               breakpoints={{
                  640: {
                     slidesPerView: 3,
                     slidesPerGroup: 3,
                  },
                  1024: {
                     slidesPerView: 3,
                     slidesPerGroup: 3,
                  },
               }}
            >
               {Videos.map((video, index) => {
                  return (
                     <SwiperSlide key={index} className='overflow-hidden rounded-lg'>
                        <YouTube
                           videoId={video.key}
                           className=''
                           opts={{
                              width: '100%',
                              height: '200px',
                              playerVars: {
                                 controls: 0,
                                 cc_load_policy: 0,
                                 fs: 0,
                                 modestbranding: true,
                                 iv_load_policy: 0,
                                 modestbranding: 0,
                                 rel: 0,
                                 showinfo: 0,
                              },
                           }}
                        />
                        {/* <p>{video.name}</p> */}
                        <p className='block bg-secondary/30 text-center text-[15px]'>{video.type}</p>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </div>
   );
}

export default SlickTrailer;
