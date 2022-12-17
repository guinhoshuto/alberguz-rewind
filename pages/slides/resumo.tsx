import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {daysElapsed, formatNumber} from '../../utils'

const Resumo = (resumo: any) => {
    return(
        <div className={styles.slides}>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-8 items-center md:justify-center w-full h-full lg:px-20 md:px-20 px-6">
                <div>
                    <div className='rounded'>
                        <Image src={resumo.avatar} alt="avatar" width={200} height={200} className="rounded-full ring-4 ring-azoxo"/>
                        <h1 className='lg:text-8xl md:text-8xl text-5xl md:w-1/2 sm:w-full font-black'>
                        <span className='text-azoxo'>{resumo.username}</span> x <span className='text-azoxo'>Alberguz</span>
                        {/* oi <span className="text-azoxo inline">{data.username}</span>, 
                        esse é o seu recalp de <span className='text-azoxo inline'>{data.mes}</span> */}
                        </h1>
                    </div>
                </div>
                <div className="md:text-center lg:text-center text-left">
                    <div className='flex flex-col gap-16'>
                        <div>
                            <span className='lg:text-8xl md:text-8xl text-5xl md:w-1/2 sm:w-full font-black'>
                                {formatNumber(resumo.qtd)}
                            </span><br/>
                            <span className='text-azoxo text-2xl font-black'>Mensagens Enviadas</span>
                        </div>
                        <div>
                            <span className='lg:text-8xl md:text-8xl text-5xl md:w-1/2 sm:w-full font-black'>
                                {daysElapsed(resumo.joinedAt)}
                            </span><br/>
                            <span className='text-azoxo text-2xl font-black'>Dias no Servidor</span>
                        </div>
                        <div>
                            <span className='lg:text-8xl md:text-6xl text-4xl md:w-1/2 sm:w-full font-black'>
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