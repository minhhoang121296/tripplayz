import Chart from 'react-apexcharts'

interface Iprops {
    series: any
    options: any
}

export const LineChart = (props: Iprops) => {
    const { series, options } = props

    return (
        <Chart
            options={options}
            type='line'
            width='100%'
            height='100%'
            series={series}
        />
    )
}
