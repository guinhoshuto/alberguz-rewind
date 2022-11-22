import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';

type props = {
    username: string;
    mes: string;
}

const Slide1 = (capaData: props) => {
    const [data, setData] = useState<props>({username: '', mes: ''})

    useEffect(() => {
        setData({
            username: 'sainas', 
            mes: 'novembro',
        }, );
    })
    console.log(capaData)

    return(
        <div className={styles.slides}>
            <h1 className={styles.title}>oi {data.username}, esse é o seu recalp de {data.mes}</h1>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default Slide1;
