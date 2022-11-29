import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Slide1 from './slides/slide1'
import Slide2 from './slides/slide2'

interface popularSentence{
  sentence: string;
  qtd: number;
}

type dataProps = {
    username: string;
    periodo: string;
    allMessages: number;
    emojis: Array<popularSentence>;
    serverEmoji: popularSentence;
    userPopularWord: popularSentence;
    serverPopularWord: popularSentence;
}

// x capa
// x mandou x mensagens
// - emoji mais usado
// - palavra mais falada
// - por dia
// - quantos dias vc já está no server
// - cassino?
// - mencionado?
// - resumo/obg

export default function Home(){
  const [data, setData] = useState<dataProps>({
    'username': 'sainas',
    'periodo': 'novembro',
    'allMessages': 1221,
    'emojis': [{sentence: 'a', qtd: 1},{sentence: 'b', qtd: 2}, {sentence:'c', qtd:3}],
    'serverEmoji': {sentence: 'a', qtd: 1},
    'userPopularWord': {sentence: 'oi', qtd: 1},
    'serverPopularWord': {sentence: 'ciao', qtd: 1},
  })

  // useEffect(() => {

  // }, )

  const capaData = {
    username: data.username,
    mes: data.periodo
  }

  const mensagens = {
    periodo: data.periodo,
    qtd: data.allMessages
  }

  const emojis = {
    emojis: data.emojis,
    serverEmoji: data.serverEmoji
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="slider"><Slide1 {...capaData} /></SwiperSlide>
      <SwiperSlide><Slide2 {...mensagens} /></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
