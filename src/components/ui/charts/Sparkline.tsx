import Chart from 'react-apexcharts'

interface Iprops {
    series: any
    options: any
    width?: string | number
    height?: string | number
}

const Sparkline = (props: Iprops) => {
    const { series, options, width, height } = props

    return (
        <Chart
            options={options}
            type='area'
            width={width}
            height={height}
            series={series}
        />
    )
}

export default Sparkline
