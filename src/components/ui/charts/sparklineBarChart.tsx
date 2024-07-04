// components/SparklineBarChart.tsx
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

// Dynamic import để chỉ tải trên client-side
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const SparklineBarChart: React.FC = () => {
    const [series, setSeries] = useState([
        {
            name: 'Sales',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ])

    const options: ApexOptions = {
        chart: {
            type: 'bar',
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
                isFunnel3d: true
            }
        },
        dataLabels: {
            enabled: true,
            formatter: val => `$${val}`,
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ['#304758']
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        },
        yaxis: {
            min: 0
        },
        fill: {
            opacity: 1,
            colors: ['#34a853']
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: val => `$${val}`
            }
        }
    }

    const updateData = () => {
        const newData = series[0].data.map(() =>
            Math.floor(Math.random() * 100)
        )
        setSeries([{ name: 'Sales', data: newData }])
    }

    return (
        <div className='sparkline-bar-chart'>
            <Chart options={options} series={series} type='bar' height='200' />
            <button onClick={updateData}>Update Data</button>
        </div>
    )
}

export default SparklineBarChart
