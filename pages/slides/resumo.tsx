import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {daysElapsed, formatNumber} from '../../utils'

// type props = {
//     username: string;
//     mes: string;
// }

const Resumo = (resumo: any) => {
    // const [data, setData] = useState<any>({timestamp: ''})

    // useEffect(() => {
    //     setData(resumo)
    // })
    // console.log(capaData)

    return(
        <div className={styles.slides}>
            <div className="flex flex-row md:items-center md:justify-center w-full h-full md:px-20 sm:px-1 sm:items-around">
                <div>
                    <div className='rounded'>
                        <Image src={resumo.avatar} alt="avatar" width={200} height={200} className="rounded-full ring-4 ring-azoxo"/>
                        <h1 className='md:text-8xl sm:text-5xl md:w-1/2 sm:w-full font-black'>
                        <span className='text-azoxo'>{resumo.username}</span> x <span className='text-azoxo'>Alberguz</span>
                        {/* oi <span className="text-azoxo inline">{data.username}</span>, 
                        esse é o seu recalp de <span className='text-azoxo inline'>{data.mes}</span> */}
                        </h1>
                    </div>
                </div>
                <div className="text-center">
                    <div className='flex flex-col gap-16'>
                        <div>
                            <span className='md:text-8xl sm:text-5xl md:w-1/2 sm:w-full font-black'>
                                {formatNumber(resumo.qtdAll)}
                            </span><br/>
                            <span className='text-azoxo text-2xl font-black'>Mensagens Enviadas</span>
                        </div>
                        <div>
                            <span className='md:text-8xl sm:text-5xl md:w-1/2 sm:w-full font-black'>
                                {daysElapsed(resumo.joinedAt)}
                            </span><br/>
                            <span className='text-azoxo text-2xl font-black'>Dias no Servidor</span>
                        </div>
                        <div>
                            <span className='md:text-6xl sm:text-5xl md:w-1/2 sm:w-full font-black'>
                                {resumo.mostMessagedChannel}
                            </span><br/>
                            <span className='text-azoxo text-2xl font-black'>Canal mais usado</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Resumo;