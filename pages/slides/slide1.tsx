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
            <div className="flex md:items-center w-full h-full md:px-20 sm:px-1 sm:items-around">
                <div>
                    <h1 className='md:text-8xl sm:text-5xl md:w-1/2 sm:w-full font-black'>
                        oi&nbsp;<span className="text-azoxo inline">{data.username}</span>, 
                        esse é o seu recalp de&nbsp;<span className='text-azoxo inline'>{data.mes}</span>
                    </h1>
                </div>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default Slide1;
