import styles from '../../styles/Slides.module.css'
import { formatNumber } from '../../utils'

type props = {
    qtd: number
    qtdAll: number 
    periodo: string
}

const AllMessages = (mensagens: props) => {
    // const [data, setData] = useState<props>({qtd: 0, qtdAll:0, periodo: ''})

    // useEffect(() => {
    //     setData({
    //         periodo: mensagens.periodo,
    //         qtd: mensagens.qtd,
    //         qtdAll: mensagens.qtdAll
    //     }, );
    // })
    // console.log(capaData)
    const data = { 
        periodo: mensagens.periodo,
        qtd: mensagens.qtd,
        qtdAll: mensagens.qtdAll
    }

    return(
        <div className={styles.slides}>
            <div className='flex items-center justify-items-center h-full w-full'>
                <div className='px-8 text-center w-full'>
                    <p className='md:text-4xl lg:text-4xl text-2xl font-black'>Em <span className="text-azoxo">{data.periodo}</span>, você enviou</p>
                    <p className='text-azoxo lg:text-[220px] md:text-[220px] text-6xl font-black'>{new Intl.NumberFormat('pt-BR').format(data.qtd)}</p><br/>
                    <p className='md:text-4xl lg:text-4xl text-2xl font-black'>mensagens. No servidor foram <span className="text-azoxo">{formatNumber(data.qtdAll)}</span> 🎉</p>
                </div>
            </div>
            {/* <h1 className={styles.title}>oi {capaData.username}, esse é o seu recalp de {capaData.mes}</h1> */}
        </div>
    )
}

export default AllMessages;
