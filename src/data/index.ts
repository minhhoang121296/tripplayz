const forexdata = [
    {
        image: 'rafc',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%'
    }
]

const options = {
    chart: {
        type: 'area',
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#0055FF'] // Màu của đường
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.2,
            stops: [0, 100]
        }
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: () => ''
            }
        },
        marker: {
            show: false
        }
    }
}

const series = [
    {
        name: 'Series 1',
        data: [10, 15, 8, 12, 20, 30, 18, 25, 10]
    }
]
