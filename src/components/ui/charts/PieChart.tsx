import Chart from 'react-apexcharts'

interface Iprops {
    series: any
    options: any
}

const PieChart = (props: Iprops) => {
    const { series, options } = props

    return (
        <Chart
            options={options}
            type='pie'
            width='100%'
            height='100%'
            series={series}
        />
    )
}

export default PieChart
