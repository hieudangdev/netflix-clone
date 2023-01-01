import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Images from 'Componets/Image/Images';
import tmdbConfigs from './../../api/Config/tmdb.config';
import mediaApi from './../../api/modules/mediaApi';

function SlickCast({ mediaType, mediaId }) {
   const sliderRef = useRef(null);
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

   const settingSlider = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,
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
               slidesToShow: 3,

               slidesToScroll: 3,
            },
         },
      ],
   };
   return (
      <div className=' relative  mt-5  w-full '>
         <div className='mb-4 flex w-full justify-end '>
            <button className='bg-slate-900/10 px-1 ' onClick={() => sliderRef.current.slickPrev()}>
               <KeyboardArrowLeftIcon fontSize='large' />
            </button>
            <button className='bg-slate-900/10 px-1 ' onClick={() => sliderRef.current.slickNext()}>
               <KeyboardArrowRightIcon fontSize='large' />
            </button>
         </div>
         <div className='w-full overflow-hidden'>
            <Slider {...settingSlider} ref={sliderRef}>
               {infoCast.map((cast, index) => {
                  return (
                     <div key={index} className='flex h-full w-full translate-[0,0,0] flex-col items-center   '>
                        <div className='h-[100px] w-[100px]'>
                           <Images
                              src={tmdbConfigs.posterPath(cast.profile_path)}
                              className='block h-full w-full rounded-full object-cover'
                           />
                        </div>

                        <span className='  mt-1 text-[14px] '>{cast.original_name}</span>
                        <span className=' text-[13px] font-light leading-3'>{cast.character}</span>
                     </div>
                  );
               })}
            </Slider>
         </div>
      </div>
   );
}

export default SlickCast;
