import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';

const Valeu = () => {
    return(
        <div className={styles.slides}>
            <div className='flex items-center justify-items-center h-full w-full'>
                <div className='px-8 text-center w-full'>
                    <p className='text-azoxo md:text-[220px] lg:text-[220px] text-6xl font-black'>VALEU!</p>
                    <p className='md:text-2xl lg:text-2xl text-md font-black'>Ano que vem tem mais</p>
                </div>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default Valeu;