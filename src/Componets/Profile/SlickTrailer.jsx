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

function SlickTrailer({ Videos, title }) {
   const [open, setOpen] = useState(false);
   const swiperRef = useRef(null);

   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

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
                     <SwiperSlide onClick={handleOpen} key={index} className='overflow-hidden '>
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
                        {/* <Modal
                           keepMounted
                           open={open}
                           onClose={handleClose}
                           aria-labelledby='keep-mounted-modal-title'
                           aria-describedby='keep-mounted-modal-description'
                        >
                           <Box
                              sx={{
                                 position: 'absolute',
                                 top: '50%',
                                 left: '50%',
                                 transform: 'translate(-50%, -50%)',
                                 width: 400,
                                 bgcolor: 'background.paper',
                                 border: '2px solid #000',
                                 boxShadow: 24,
                                 p: 4,
                              }}
                           >
                              <div id='keep-mounted-modal-title' variant='h6' component='h2'>
                                 Text in a modal
                              </div>
                              <div id='keep-mounted-modal-description' sx={{ mt: 2 }}>
                                 Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                              </div>
                           </Box>
                        </Modal> */}
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </div>
   );
}

export default SlickTrailer;
