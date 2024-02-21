
import MovieCard from './MovieCard';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Keyboard, Pagination, Navigation,Mousewheel } from 'swiper/modules';


const Movielist = ({title, movies}) => {


   
    return (
      <>
        <div className="px-6 ">
           <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>


        <Swiper
         slidesPerView={6}
         spaceBetween={30}
         
         pagination={{
           clickable: true,
         }}
         mousewheel={true}
         navigation={true}
         keyboard={{
            enabled: true,
          }}
          
         modules={[Keyboard, Pagination, Navigation,Mousewheel]}
         className="mySwiper"
      >
         {movies?.map((movie) => (
            <SwiperSlide key={movie.id}> 
            <MovieCard  poster_path={movie.poster_path} />
            </SwiperSlide>
        ))}
      </Swiper>
        </div>
  
      </>)
}

export default Movielist

// return (
//     <div className="px-6 ">
//       <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
//       <div className="flex overflow-x-auto">
//         <div className="flex">
//           {movies?.map((movie) => (
//             <MovieCard key={movie.id} poster_path={movie.poster_path} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );


// {movies?.map((movie) => (
//     <SwiperSlide key={movie.id}> 
//        <MovieCard  poster_path={movie.poster_path} />
//    </SwiperSlide>
// ))}