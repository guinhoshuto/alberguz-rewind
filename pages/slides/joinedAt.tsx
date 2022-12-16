import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';
import { daysElapsed } from '../../utils';

// type props = {
//     username: string;
//     mes: string;
// }

const JoinedAt = (joinedDate: any) => {
    // const [data, setData] = useState<any>({date: '', days: ''})

    // useEffect(() => {
    //     const date = new Date(Date.parse(joinedDate.timestamp))
    //     // const date = new Date(joinedDate.timestamp)

    //     setData({
    //         date: date.toLocaleDateString('pt-BR'), 
    //         days: Math.floor((Date.now() - Date.parse(joinedDate.timestamp))/(1000*60*60*24))
    //     })
    // }, [joinedDate.timestamp])
    // console.log(capaData)
    const date = new Date(Date.parse(joinedDate.timestamp))
    const data = {
        date: date.toLocaleDateString('pt-BR'), 
        days: daysElapsed(joinedDate.timestamp)
    }

    return(
        <div className={styles.slides}>
            <div className="flex md:items-center w-full h-full md:px-20 sm:px-1 sm:items-around">
                <div>
                    <h1 className='md:text-8xl sm:text-5xl md:w-1/2 sm:w-full font-black'>
                        Você chegou aqui no dia <span className="text-azoxo inline">{data.date}</span> <br/><br/>
                        são <span className="text-azoxo">{data.days} dias</span> de Alberguz
                    </h1>
                </div>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default JoinedAt;