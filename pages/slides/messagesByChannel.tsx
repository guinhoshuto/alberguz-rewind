import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';
import BarChart from '../components/BarChart';
import { stringify } from 'querystring';
import { formatNumber } from '../utils';

// type props = {
//     key: string;
//     value: number
// }

const MessagesByChannel = (messagesByChannel: any) => {
    // const [mostMessagedChannel, setMostMessagedChannel] = useState<props>({key: '', value: 0})

    // useEffect(() => {
    //     const channelMessages = Object.entries(messagesByChannel).map((m: any) => m[1].value)
    //     channelMessages.pop()
    //     const max = Math.max(...channelMessages)
    //     const tmp = Object.entries(messagesByChannel).find((m: any) => m[1].value === max)[1];
    //     setMostMessagedChannel(tmp)
    // }, [])
    // console.log(data)

    return(
        <div className={styles.slides}>
            <div className='flex items-center justify-items-center h-full w-full'>
                <div className='px-8 text-center w-full'>
                    <h1 className='text-4xl font-black mb-16'>
                        Em <span className='text-azoxo'>2022</span> você enviou <span className='text-azoxo'>{formatNumber(messagesByChannel.mostMessagedChannelMessages)}</span><br/>
                        no canal <span className='text-azoxo'>{messagesByChannel.mostMessagedChannel}</span> 
                    </h1>
                    <BarChart {...messagesByChannel.channels} />
                </div>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default MessagesByChannel;