import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
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
    serverAllMessages: number;
    // emojis: Array<popularSentence>;
    // serverEmoji: popularSentence;
    // userPopularWord: popularSentence;
    // serverPopularWord: popularSentence;
}

// x capa
// x mandou x mensagens
// - emoji mais usado
// - palavra mais falada
// - por dia
// - quantos dias vc já está no server
// - canais em que mais falou
// - cassino?
// - mencionado?
// - resumo/obg

export default function Home(props: any){
  // console.log(props)
  const [data, setData] = useState<dataProps>({
    'username': 'sainas',
    'periodo': 'novembro',
    'allMessages': 1222,
    'serverAllMessages': 12210,
    // 'emojis': [{sentence: 'a', qtd: 1},{sentence: 'b', qtd: 2}, {sentence:'c', qtd:3}],
    // 'serverEmoji': {sentence: 'a', qtd: 1},
    // 'userPopularWord': {sentence: 'oi', qtd: 1},
    // 'serverPopularWord': {sentence: 'ciao', qtd: 1},
  })

  useEffect(() => {
    setData(props)
  }, )

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

export async function getServerSideProps({query}: any){
  const user_id = query.user_id
  console.log(user_id, typeof(user_id))
  console.log(`https://recalp.feras.club/api/rewind?id=${user_id}&periodo=2022`)

  // const userRecalp = await axios.get(`https://recalp.feras.club/api/rewind?id=${user_id}&periodo=2022`)
  const userRecalp = await axios.get(`http://localhost:3000/api/rewind?id=${user_id}&periodo=2022`)
  console.log(userRecalp.data)

  return {
    props: userRecalp.data
  }

}