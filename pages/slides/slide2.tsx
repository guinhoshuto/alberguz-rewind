import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';

type props = {
    qtd: number
    periodo: string
}

const Slide2 = (mensagens: props) => {
    const [data, setData] = useState<props>({qtd: 0, periodo: ''})

    useEffect(() => {
        setData({
            periodo: mensagens.periodo,
            qtd: mensagens.qtd
        }, );
    })
    // console.log(capaData)

    return(
        <div className={styles.slides}>
            <div className='flex align-center h-full'>
                <p>Em {data.periodo}, você enviou {data.qtd} mensagens</p>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default Slide2;
