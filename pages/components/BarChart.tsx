import { Bar } from 'react-chartjs-2'
import { useEffect, useState } from 'react';


const BarChart = (props: any) => {


    const [data, setData] = useState<any>({
        // labels: ['a'],
        datasets: [{
            label: 'Mensagens',
            data: [1],
            backgroundColor:'rgba(88, 101, 242, 255)'
        }]
    })

    // const [data, setData] = useState<any>({jan: 0, fev: 0, mar: 0, abr: 0, mai: 0, jun: 0, jul: 0, ago: 0, set: 0, out: 0, nov: 0, dez: 0})

    useEffect(() => {
        // const labels: string[] = ['jan', 'fev']
        // const data: number[] = [1, 2]
        const labels = props.map((l:any)  => l.key);
        setData({
            labels, 
            datasets: [{
                label: 'Mensagens',
                data: props.map((d: any) => d.value),
                backgroundColor:'rgba(88, 101, 242, 255)'
            }]
        })
    }, [])

    return(
        <div>
            {/* {data.jan} */}
            {/* {Math.max(...Object.values(data: ChartData))} */}
            <Bar 
                // options={}
                data={data}
                // {data}
            /> 
        </div>
    )
}

export default BarChart
