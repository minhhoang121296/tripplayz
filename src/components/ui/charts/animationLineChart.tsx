'use client'
// components/AnimatedLineChart.tsx
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Dynamic import để chỉ tải trên client-side
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface Iprops {
    width: string | number
    height: string | number
}

const AnimatedLineChart = ({ width, height }: Iprops) => {
    const [series, setSeries] = useState([
        {
            name: 'Series 1',
            data: [10]
        }
    ])

    const options: ApexOptions = {
        chart: {
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
            }
        },
        colors: ['#FF1654'], // Thay đổi màu của dòng
        grid: {
            show: true, // Hiển thị lưới
            borderColor: '#A5A5A5' // Thay đổi màu của lưới
            // row: {
            //     colors: ['#CECECE'], // Màu của các dòng lưới (mặc định là ['transparent', 'transparent'])
            //     opacity: 0.5 // Độ mờ của các dòng lưới
            // }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            colors: ['#0055FF'],
            fill: {
                opacity: 0.3,
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.2,
                    stops: [0, 100]
                }
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: '#FFFFFF', // Thay đổi màu của nhãn trục ngang
                    fontSize: '18px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400
                },
                formatter: value => {
                    const date = new Date(value)
                    const month = date.getMonth()
                    const year = date.getFullYear()

                    // Chỉ hiển thị nhãn cho tháng 6 và tháng 7
                    if (
                        month === 5 /* tháng 6 */ ||
                        month === 6 /* tháng 7 */
                    ) {
                        return `${date.toLocaleString('en-US', { month: 'short' })} ${year}`
                    } else {
                        return ''
                    }
                }
            },
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: true
            }
        },
        yaxis: {
            max: 100,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeries(prevSeries => {
                const newData = [...prevSeries[0].data]
                const lastTime =
                    newData.length > 0
                        ? new Date().getTime()
                        : new Date().getTime()
                newData.push({
                    x: lastTime + 1000, // Thời gian tăng dần
                    y: generateRandomValue() // Giá trị ngẫu nhiên
                } as any)
                if (newData.length > 20) {
                    newData.shift() // Giữ số lượng điểm dữ liệu nhất định để tránh quá tải
                }
                return [
                    {
                        name: 'Series 1',
                        data: newData
                    }
                ]
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSeries(prevSeries => {
    //             const newData = [...prevSeries[0].data]
    //             const lastTime =
    //                 newData.length > 0
    //                     ? newData[newData.length - 1]
    //                     : new Date().getTime()
    //             newData.push({
    //                 x: lastTime + 1000, // Thời gian tăng dần
    //                 y: generateRandomValue() // Giá trị ngẫu nhiên
    //             } as any)
    //             if (newData.length > 20) {
    //                 newData.shift() // Giữ số lượng điểm dữ liệu nhất định để tránh quá tải
    //             }
    //             return [
    //                 {
    //                     name: 'Series 1',
    //                     data: newData
    //                 }
    //             ]
    //         })
    //     }, 1000)

    //     return () => clearInterval(interval)
    // }, [])

    // Hàm sinh dữ liệu ngẫu nhiên cho giá trị y
    const generateRandomValue = () => Math.floor(Math.random() * 100)

    // Hàm khởi tạo dữ liệu ban đầu cho biểu đồ
    function generateInitialData() {
        const now = new Date().getTime()
        const data = []

        // Tạo dữ liệu cho 20 điểm ban đầu
        for (let i = 20; i > 0; i--) {
            data.push({
                x: now - i * 1000, // Thời gian giảm dần
                y: generateRandomValue()
            })
        }

        return data
    }

    return (
        <div className='animated-line-chart'>
            <Chart
                options={options}
                series={series}
                type='line'
                width={width}
                height={height}
            />
        </div>
    )
}

export default AnimatedLineChart
