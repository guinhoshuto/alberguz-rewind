import styles from '../../styles/Slides.module.css'
import { useEffect, useState } from 'react';
import BarChart from '../components/BarChart'
import { StringLiteral } from 'typescript';

// type props = {
//     key: string;
//     value: number
// }

// type monthProp = {
//     key: string;
//     value: string 
// }

const MessagesByPeriod = (messagesByPeriod: any ) => {
    // const [data, setData] = useState<any>({jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0})
    // const months = [
    //     {key: 'jan', month: 'Janeiro'},
    //     {key: 'fev', month: 'Fevereiro'},
    //     {key: 'mar', month: 'Março'},
    //     {key: 'abr', month: 'Abril'},
    //     {key: 'mai', month: 'Maio'},
    //     {key: 'jun', month: 'Junho'},
    //     {key: 'jul', month: 'Julho'},
    //     {key: 'ago', month: 'Agosto'},
    //     {key: 'set', month: 'Setembro'},
    //     {key: 'out', month: 'Outubro'},
    //     {key: 'nov', month: 'Novembro'},
    // ]
    // const [data, setData] = useState<any>({key: '', value: 0})
    // useEffect(() => {
    //     setData(messagesByPeriod.mostMessagedMonth)
    // })
    // console.log(data)
    // // console.log(capaData)
    // // console.log(messagesByPeriod)
    // // const mostMessagedMonth = Math.max(...Object.keys(messagesByPeriod).map((m: any) => m.value))
    // // console.log(mostMessagedMonth)
    // console.log('messagesByPeriod', messagesByPeriod.mostMessagedMonth.key)

    // const messagesCounts = Object.values(messagesByPeriod).map((m: props) => m.value)
    // console.log('counts',messagesCounts)
    // messagesCounts.pop()
    // const mostMessagedMonth: props = Object.values(messagesByPeriod).find((m: any) => m.value === Math.max(...messagesCounts))
    // const monthName: monthProp = months.find((m: monthProp) => m.key === mostMessagedMonth.key)
    // // mostMessagedMonth.monthName = monthName?.month
    // console.log(mostMessagedMonth)
    // console.log(monthName)

    return(
        <div className={styles.slides}>
            <div className='flex items-center justify-items-center h-full w-full'>
                <div className='px-8 text-center w-full'>
                    <h1 className="text-4xl font-black mb-16">
                        <span className='text-azoxo'>{messagesByPeriod.mostMessagedMonth}</span> foi o mês em que você mais mandou mensagens, <br/>
                         foram <span className="text-azoxo">{new Intl.NumberFormat('pt-BR').format(messagesByPeriod.mostMessagedMonthMessages)}</span>!!!!!!!
                    </h1>
                    <BarChart {...messagesByPeriod.months} />

                </div>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default MessagesByPeriod;