import { useRef } from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Images from 'Componets/Image/Images';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import tmdbConfigs from './../../api/Config/tmdb.config';

import { Swiper, SwiperSlide } from 'swiper/react';

function SlickCast({ infoCast }) {
   const swiperRef = useRef(null);
   return (
      <div className=' relative  mt-5  w-full '>
         <div className='mb-4 flex w-full justify-end '>
            <button className=' bg-slate-900/10 px-1 ' onClick={() => swiperRef.current?.slidePrev()}>
               <KeyboardArrowLeftIcon fontSize='large' />
            </button>
            <button className=' bg-slate-900/10 px-1' onClick={() => swiperRef.current?.slideNext()}>
               <KeyboardArrowRightIcon fontSize='large' />
            </button>
         </div>
         <div className='w-full'>
            <Swiper
               slidesPerView={3}
               spaceBetween={1}
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
                           <Images src={tmdbConfigs.posterPath(cast.profile_path)} className='block h-full w-full rounded-full object-cover' />
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
