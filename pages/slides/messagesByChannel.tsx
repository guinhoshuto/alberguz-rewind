import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';

type props = {
    qtd: number
    qtdAll: number
    periodo: string
}

const MessagesByChannel = (messagesByChannel: props) => {
    const [data, setData] = useState<props>({qtd: 0, qtdAll: 0, periodo: ''})

    useEffect(() => {
        setData(messagesByChannel, );
    }, [])
    console.log(data)

    return(
        <div className={styles.slides}>
            <div className='flex items-center justify-items-center h-full w-full'>
                <div className='px-8 text-center w-full'>
                    <p className='md:text-2xl sm:text-xl font-black'>Em <span className="text-azoxo">{data.periodo}</span>, você enviou</p>
                    <p className='text-azoxo md:text-[220px] sm:text-6xl font-black'>{new Intl.NumberFormat('pt-BR').format(data.qtd)}</p>
                    <p className='md:text-2xl sm:text-xl font-black'>mensagens</p>
                </div>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default MessagesByChannel;