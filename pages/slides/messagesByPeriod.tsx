import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';
import BarChart from '../components/BarChart'

const MessagesByPeriod = (messagesByPeriod: any) => {
    // const [data, setData] = useState<any>({jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0})

    // useEffect(() => {
    //     setData(messagesByPeriod)
    // }, )
    // console.log(capaData)
    console.log(messagesByPeriod)

    return(
        <div className={styles.slides}>
            <div className='flex items-center justify-items-center h-full w-full'>
                <div className='px-8 text-center w-full'>
                    {/* <p className='md:text-2xl sm:text-xl font-black'>Em <span className="text-azoxo">{data.periodo}</span>, você enviou</p>
                    <p className='text-azoxo md:text-[220px] sm:text-6xl font-black'>{new Intl.NumberFormat('pt-BR').format(data.qtd)}</p> */}
                    <BarChart {...messagesByPeriod} />

                </div>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default MessagesByPeriod;