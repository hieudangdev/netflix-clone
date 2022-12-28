import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Images from 'Componets/Image/Images';
import { posterBaseUrl } from 'requests';

function SlickCast({ infoCast }) {
   const sliderRef = useRef(null);

   const settingSlider = {
      dots: false,
      infinite: false,
      speed: 200,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 5,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
            },
         },
      ],
   };
   return (
      <div className=' relative -mx-3  mt-5  lg:mx-4  lg:mr-[150px]'>
         <div className='mb-4 flex w-full justify-end '>
            <button className='bg-gray-500/20' onClick={() => sliderRef.current.slickPrev()}>
               <KeyboardArrowLeftIcon />
            </button>
            <button className='bg-gray-500/20' onClick={() => sliderRef.current.slickNext()}>
               <KeyboardArrowRightIcon />
            </button>
         </div>
         <div className='w-full overflow-hidden'>
            <Slider {...settingSlider} ref={sliderRef}>
               {infoCast.map((cast, index) => {
                  return (
                     <div key={index} className='h-full w-full'>
                        <div className='h-[90px] w-[90px]'>
                           <Images
                              src={posterBaseUrl + cast.profile_path}
                              className='block h-full w-full rounded-full object-cover'
                           />
                        </div>
                        <p className='flex flex-wrap text-[12px]'>{cast.original_name}</p>
                     </div>
                  );
               })}
            </Slider>
         </div>
      </div>
   );
}

export default SlickCast;
