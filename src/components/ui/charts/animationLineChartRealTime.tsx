'use client'
import { ApexOptions } from 'apexcharts'
import { useRef, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

interface DataPoint {
    x: number
    y: number
}

interface Iprops {
    width: string | number
    height: string | number
}

export const ApexChartRealTime = ({ width, height }: Iprops) => {
    const [series, setSeries] = useState<DataPoint[]>([
        { x: 1, y: 10 },
        { x: 2, y: Math.floor(10) },
        { x: 3, y: Math.floor(20) },
        { x: 4, y: Math.floor(25) },
        { x: 5, y: Math.floor(40) },
        { x: 6, y: Math.floor(70) },
        { x: 7, y: Math.floor(90) }
    ])
    const [options] = useState<ApexOptions>({
        chart: {
            // id: 'realtime',
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            offsetX: 0,
            offsetY: 0
        },

        grid: {
            show: true,
            borderColor: '#949494',
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            padding: {
                top: 0, // Khoảng cách giữa grid trục ngang và biểu đồ
                bottom: 0, // Khoảng cách giữa grid trục ngang và biểu đồ
                left: 0, // Khoảng cách giữa grid trục dọc và biểu đồ
                right: 0 // Khoảng cách giữa grid trục dọc và biểu đồ
            }
        },

        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ['#0055FF'], // Màu của đường line
            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.5,
                    opacityTo: 0
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        title: {
            // text: 'Dynamic Updating Chart',
            align: 'left'
        },
        markers: {
            size: 0
        },

        xaxis: {
            labels: {
                show: false,
                style: {
                    colors: '#FFFFFF',
                    fontSize: '18px',
                    fontWeight: '400',
                    fontFamily: 'Montserrat'
                },
                formatter: (value: any) => {
                    return [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                    ][value]
                }
            },
            axisBorder: {
                show: true,
                color: '#949494' // Màu sắc của đường viền trục y
            },
            type: 'numeric',
            tickAmount: 3
            // range: 20000000 // Đặt range tùy ý cho ví dụ
        },
        yaxis: {
            labels: {
                show: false
            },
            tickAmount: 5,
            max: 100
        },
        legend: {
            show: false
        }
    })

    const chartRef = useRef<any | null>(null)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const newDataPoint: DataPoint = {
    //             x: new Date().getTime(),
    //             y: Math.floor(Math.random() * 100)
    //         }
    //         setSeries(prevSeries => [...prevSeries, newDataPoint].slice(-20)) // Giữ lại tối đa 20 điểm dữ liệu

    //         if (chartRef.current.updateSeries) {
    //             chartRef.current?.updateSeries([{ data: series }]) as any
    //         }
    //     }, 1000)

    //     return () => clearInterval(interval)
    // }, [series])

    return (
        <div id='chart'>
            <ReactApexChart
                ref={chartRef}
                options={options}
                series={[{ data: series }]}
                type='line'
                width={width || 350}
                height={height || 350}
            />
        </div>
    )
}
