import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

Chart.register(...registerables)

const BarChart = (props: any) => {
    const labels = Object.entries(props).map((l:any)  => l[1].key);
    const data = {
        labels,
        datasets: [{
            label: 'Mensagens',
            data: Object.entries(props).map((d: any) => d[1].value),
            backgroundColor:'rgba(88, 101, 242, 255)'
        }]
    }

    return(
        <div>
            <Bar data={data} /> 
        </div>
    )
}

export default BarChart
