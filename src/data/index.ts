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

export const forexdata = [
    {
        image: '/images/forex/AUDUSD.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/forex/CHFUSD.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/forex/EURUSD.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/forex/GBPUSD.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/forex/JPYUSD.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    }
]

export const crytocurrency = [
    {
        image: '/images/coint/binance.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/coint/bittcoin.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/coint/cardano.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/coint/eth.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/coint/tnt.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    }
]

export const commodities = [
    {
        image: '/images/commodities/copper.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/commodities/gold.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/commodities/oil.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/commodities/petrolium.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/commodities/silver.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    }
]

export const indexNumbers = [
    {
        image: '/images/index/SQQQ.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/index/SQQQ.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/index/SQQQ.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/index/UKX.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/index/UKX.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    }
]

export const stocks = [
    {
        image: '/images/stocks/AAPL.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/stocks/AMZN.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/stocks/GOOGL.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/stocks/MSFT.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/stocks/TSLA.png',
        currencyPair: 'EUR/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    }
]
