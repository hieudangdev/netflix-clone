import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import UpdateIcon from '@mui/icons-material/Update';
import { Button } from '@mui/material';
import Images from 'Componets/Image/Images';
import SlickCast from 'Componets/Profile/SlickCast';
import SlickTrailer from 'Componets/Profile/SlickTrailer';
import tmdbConfigs from './../api/Config/tmdb.config';
import mediaApi from './../api/modules/mediaApi';
import SimilarMovies from './../Componets/Profile/Similar';

function Profile() {
   const [infoMovies, setinfoMovies] = useState([]);
   const [genMovies, setgenMovies] = useState([]);
   const [Casts, setCasts] = useState([]);
   const [Similar, setSimilar] = useState([]);
   const [Videos, setVideos] = useState([]);
   const [Date, setDate] = useState([]);

   let { mediaType, mediaId } = useParams();

   useEffect(() => {
      window.scrollTo(0, 0);
      const GetDetailMedia = async () => {
         const { response, err } = await mediaApi.getDetail({
            mediaType,
            mediaId,
         });

         if (response) {
            setCasts(response.data.casts.cast.slice(0, 20));
            setSimilar(response.data.similar.results.slice(0, 10));
            setinfoMovies(response.data);
            setVideos(response.data.videos.results.slice(0, 10));
            setgenMovies(response.data.genres);
            setDate(response.data.release_date.split('-'));
         }

         if (err) {
            console.log(err);
         }
      };
      GetDetailMedia();
   }, [mediaId, mediaType]);

   return (
      <div className=' relative text-white  '>
         {infoMovies.backdrop_path ? (
            <Images
               className='-z-10 h-auto w-full object-cover opacity-20 lg:mb-0'
               src={tmdbConfigs.backdropPath(infoMovies.backdrop_path)}
               alt=''
            />
         ) : (
            <div className='h-[768px] w-[1366px] bg-primary'></div>
         )}

         <div className=' relative z-20 -mt-[200px] w-full  pl-2 lg:-mt-[680px] '>
            <div className=' grid grid-cols-1 gap-x-2 md:grid-cols-4 lg:grid-cols-4 lg:px-16'>
               <div className='px-10 pt-10   lg:px-5 lg:pt-0 '>
                  <div className='overflow-hidden rounded-2xl shadow-2xl'>
                     <Images
                        className='block max-w-full   object-cover  '
                        src={tmdbConfigs.posterPath(infoMovies?.poster_path || '')}
                        alt=''
                     />
                  </div>
                  <div className='w-full pt-4 '>
                     <Button
                        variant='contained'
                        className='bg-Red text-white'
                        sx={{
                           width: 1,
                           color: 'white',
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
                     <div className='mt-1 flex h-[35px] w-full  items-center'>
                        <p className='h-[22px] rounded-md border border-orange-600 px-1 text-[13px] font-semibold leading-[22px] text-orange-600'>
                           IMDb
                        </p>
                        <div className='px-2  '>{Math.floor(infoMovies.vote_average * 10) / 10 || 0}</div>
                     </div>
                     <div className=' mt-2 flex  items-center font-normal'>
                        <UpdateIcon color='success' />
                        <p className='mr-2 ml-2 text-white/70'>Release Date</p>
                        <span className='ml-2 font-medium '>{`${Date[2]}/${Date[1]}/${Date[0]} `}</span>
                     </div>
                     <div className='mt-2 flex items-center font-normal '>
                        <RemoveRedEyeOutlinedIcon color='warning' />
                        <p className='mr-7 ml-2 text-white/70'>Popularity</p>
                        <span className=' ml-2 font-medium'>{infoMovies?.popularity}</span>
                     </div>
                     <div className=' mt-2 flex items-center font-normal'>
                        <ThumbUpOffAltIcon color='info' />
                        <p className='mr-[60px] ml-2 text-white/70'>Likes</p>
                        <span className=' ml-2 font-medium'>{infoMovies?.vote_count}</span>
                     </div>
                  </div>
                  <div className='mt-5 mb-3 w-full justify-between  lg:flex'>
                     <Button
                        startIcon={<FavoriteBorderIcon />}
                        size='small'
                        className='border-Red text-Red hover:bg-Red hover:text-white'
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
                              className='mr-[15px] mt-4 rounded-full border-blue-600  text-[14px] font-normal capitalize text-blue-600  lg:mt-0'
                           >
                              {genre.name}
                           </Button>
                        ))}
                     </div>
                  </div>
                  <div className='mt-4     text-[18px] font-normal text-white/90 '>{infoMovies?.overview}</div>
                  <SlickCast infoCast={Casts} />
               </div>
            </div>
         </div>
         <div className='mt-[100px] px-2 lg:px-[120px]'>
            <SlickTrailer Videos={Videos} title='Trailer Movie' />

            <SimilarMovies Similar={Similar} mediaType={mediaType} />
         </div>
      </div>
   );
}

export default Profile;
