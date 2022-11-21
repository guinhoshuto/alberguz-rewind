import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Slide1 from './slides/slide1'

export default function Home(){
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="slider"><Slide1 /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};


// import Head from 'next/head'
// import Stories from 'react-insta-stories'

// export default function Home() {
//   const storyStyle = {
//     width: 'auto',
//     maxWidth: '100%',
//     maxHeight: '100vw',
//     margin: 'auto'
//   }

  // const stories = [
  //   {
  //     url: 'https://cdn.dribbble.com/userupload/3810776/file/original-2a8742b53c412df673c49a7d6c6332e3.png?compress=1&resize=2048x1536',
  //     styles: storyStyle
  //   },
  //   {
  //     url: 'https://cdn.dribbble.com/userupload/4029329/file/original-0e7f081fa340f5544370583687371c62.png?compress=1&resize=1504x1128' ,
  //     styles: storyStyle
  //   },

  // ]

//   return (
//     <div className=''>
//       <Stories 
//         stories={stories}
//         defaultInterval={1500}
//         width={'auto'}
//         height={'100%'}
//       />
//     </div>
//   )
// }
