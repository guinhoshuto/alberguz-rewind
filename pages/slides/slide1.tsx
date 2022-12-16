import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';

type props = {
    username: string;
    mes: string;
}

const Slide1 = (capaData: props) => {
    // const [data, setData] = useState<props>({username: '', mes: ''})

    // useEffect(() => {
    //     setData(capaData)
    // } )
    // console.log(capaData)
    const data = capaData

    return(
        <div className={styles.slides}>
            <div className="flex items-around justify-center w-full h-full md:px-20 sm:px-1 md:items-center flex-col lg:flex-row md:flex-row">
                <div>
                    <h1 className='md:text-8xl text-5xl md:w-1/2 sm:w-full font-black text-center md:text-left lg:text-left'>
                        oi <span className="text-azoxo inline">{data.username}</span>, 
                        esse é o seu recalp de <span className='text-azoxo inline'>{data.mes}</span>
                    </h1>
                </div>
                <div>
                    <Image src="/pamonha.gif" className="mr-16" width={500} height={500} alt="" />
                </div>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default Slide1;
