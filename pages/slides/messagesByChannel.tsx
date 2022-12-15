import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';
import BarChart from '../components/BarChart';

type props = {
    key: string;
    value: number
}

const MessagesByChannel = (messagesByChannel: props[]) => {
    // const [data, setData] = useState<props>({qtd: 0, qtdAll: 0, periodo: ''})

    // useEffect(() => {
    //     setData(messagesByChannel);
    // } )
    // console.log(data)
    const channelMessages = Object.entries(messagesByChannel).map((m: any) => m[1].value)
    channelMessages.pop()

    const mostMessagedChannel: any = Object.entries(messagesByChannel).find((m: any) => m[1].value === Math.max(...channelMessages))

    return(
        <div className={styles.slides}>
            <div className='flex items-center justify-items-center h-full w-full'>
                <div className='px-8 text-center w-full'>
                    <h1>
                        {/* Em <span className='text-azoxo'>2022</span> você enviou <span className='text-azoxo'>{mostMessagedChannel[1].value}</span><br/>
                        no canal <span className='text-azoxo'>{mostMessagedChannel[1].key}</span> */}
                    </h1>
                    {/* <p className='md:text-2xl sm:text-xl font-black'>Em <span className="text-azoxo">{data.periodo}</span>, você enviou</p>
                    <p className='text-azoxo md:text-[220px] sm:text-6xl font-black'>{new Intl.NumberFormat('pt-BR').format(data.qtd)}</p>
                    <p className='md:text-2xl sm:text-xl font-black'>mensagens</p> */}
                    <BarChart {...messagesByChannel} />
                </div>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default MessagesByChannel;