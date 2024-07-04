import Chart from 'react-apexcharts'

interface Iprops {
    options: any
    series: any
}

export const BarChart = (props: Iprops) => {
    const { options, series } = props

    return (
        <Chart
            options={options}
            series={series}
            type='line'
            width='100%'
            height='100%'
        />
    )
}
