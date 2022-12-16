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
import AllMessages from './slides/allMessages'
import MessagesByPeriod from './slides/messagesByPeriod'
import MessagesByChannel from './slides/messagesByChannel'
import Valeu from './slides/valeu'
import JoinedAt from './slides/joinedAt'
import Resumo from './slides/resumo'

// interface popularSentence{
//   sentence: string;
//   qtd: number;
// }

type dataProps = {
    username: string;
    periodo: string;
    allMessages: number;
    serverAllMessages: number;
    messagesByMonth: any;
    messagesByChannel: any;
    joinedAt: string;
    profilePicture: string;
    // emojis: Array<popularSentence>;
    // serverEmoji: popularSentence;
    // userPopularWord: popularSentence;
    // serverPopularWord: popularSentence;
}

// x capa
// - quantos dias vc já está no server
// x mandou x mensagens
// - por dia
// - canais em que mais falou
// - resumo/obg

export default function Home(props: any){
  // console.log('props', props)
  const [data, setData] = useState<dataProps>({
    'username': 'sainas',
    'periodo': 'novembro',
    'allMessages': 1222,
    'serverAllMessages': 12210,
    'messagesByMonth': {},
    'messagesByChannel': {},
    'joinedAt': '',
    'profilePicture': ''
  })

  useEffect(() => {
    setData(props)
  }, [props])

  const capaData = {
    username: data.username,
    mes: data.periodo
  }

  const mensagens = {
    periodo: data.periodo,
    qtd: data.allMessages,
    qtdAll: data.serverAllMessages
  }

  const joinedAt = {
    timestamp: data.joinedAt
  }

  const resumo = {
    username: data.username,
    avatar: data.profilePicture,
    qtd: data.allMessages,
    qtdAll: data.serverAllMessages,
    mostMessagedChannel: data.messagesByChannel.mostMessagedChannel,
    mostMessagedChannelMessages: data.messagesByChannel.mostMessagedChannelMessages,
    joinedAt: data.joinedAt
  }

  // const messagesByPeriod = data.messagesByMonth
  const messagesByPeriod = {
    mostMessagedMonth: data.messagesByMonth.mostMessagedMonth,
    mostMessagedMonthMessages: data.messagesByMonth.mostMessagedMonthMessages,
    months: data.messagesByMonth.months
  }
  const messagesByChannel = {
    channels: data.messagesByChannel.channels,
    mostMessagedChannel: data.messagesByChannel.mostMessagedChannel,
    mostMessagedChannelMessages: data.messagesByChannel.mostMessagedChannelMessages
  }

  // const emojis = {
  //   emojis: data.emojis,
  //   serverEmoji: data.serverEmoji
  // }

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
      <SwiperSlide><JoinedAt {...joinedAt} /></SwiperSlide>
      <SwiperSlide><AllMessages {...mensagens} /></SwiperSlide>
      <SwiperSlide><MessagesByPeriod {...messagesByPeriod}/></SwiperSlide>
      <SwiperSlide><MessagesByChannel {...messagesByChannel}/></SwiperSlide> 
      <SwiperSlide><Resumo {...resumo} /></SwiperSlide>
      <SwiperSlide><Valeu /></SwiperSlide>
    </Swiper>
  );
};

export async function getServerSideProps({query}: any){
  const user_id = query.user_id
  const api = `https://recalp.feras.club/api/rewind?id=${user_id}&periodo=2022`
  // const api = `http://localhost:3000/api/rewind?id=${user_id}&periodo=2022`

  const userRecalp = await fetch(api)
  const data = await userRecalp.json()

  return {
    props: data 
  }

}