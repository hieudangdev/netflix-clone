import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import tmdbConfigs from 'api/Config/tmdb.config';
import YouTube from 'react-youtube';
import { Typography } from '@mui/material';

function SlickTrailer({ Videos, title }) {
   const [open, setOpen] = useState(false);
   const [videoId, setvideoId] = useState('');
   const swiperRef = useRef(null);

   const handleClose = () => setOpen(false);
   console.log(videoId);

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
         <Modal
            open={open}
            keepMounted
            onClose={handleClose}
            aria-labelledby='keep-mounted-modal-title'
            aria-describedby='keep-mounted-modal-description'
         >
            <Box onClick={handleClose} className='absolute my-2 flex h-screen w-full  items-center justify-center '>
               <YouTube
                  videoId={videoId}
                  opts={{
                     height: '540',
                     width: '960',

                     playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        autoplay: 1,
                     },
                  }}
               />
            </Box>
         </Modal>

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
                     <SwiperSlide
                        onClick={() => {
                           setvideoId(video.key);
                           setOpen(true);
                        }}
                        key={index}
                        className='overflow-hidden '
                     >
                        <img
                           src={tmdbConfigs.youtubeThumnail(video.key, 'maxresdefault')}
                           alt='trailer'
                           className='rounded- h-[230px] w-[369px] rounded-lg '
                           onError={(e) => (e.target.src = tmdbConfigs.youtubeThumnail(video.key, 'mqdefault'))}
                        />
                        <div className='absolute inset-0 flex items-center justify-center rounded-lg border  opacity-0 content-none hover:border-Orange  hover:opacity-100'>
                           <PlayArrowIcon className=' text-[50px]' />
                        </div>
                        <p className='absolute  left-2 top-2 rounded-full bg-secondary/50 px-2  text-center text-[12px] leading-4  text-Orange '>
                           {video.type}
                        </p>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </div>
   );
}

export default SlickTrailer;
