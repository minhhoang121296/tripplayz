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
        image: '/images/forex/EURUSD.png',
        currencyPair: 'EUR/USD',
        fullPairName: 'EURUSD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/forex/JPYUSD.png',
        currencyPair: 'JPY/USD',
        fullPairName: 'JPYUSD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/forex/GBPUSD.png',
        currencyPair: 'GBP/USD',
        fullPairName: 'GBPUSD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },

    {
        image: '/images/forex/CHFUSD.png',
        currencyPair: 'CHF/USD',
        fullPairName: 'CHFUSD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/forex/AUDUSD.png',
        currencyPair: 'AUD/USD',
        fullPairName: 'AUDUSD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    }
]

export const crytocurrency = [
    {
        image: '/images/coint/bittcoin.png',

        currencyPair: 'BTC/USD',
        fullPairName: 'Bitcoin/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/coint/eth.png',
        currencyPair: 'ETH/USD',
        fullPairName: 'Ethereum/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/coint/binance.png',
        currencyPair: 'BNB/USD',
        fullPairName: 'Binance Coin/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/coint/tnt.png',
        currencyPair: 'USDT/USD',
        fullPairName: 'Tether/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/coint/cardano.png',
        currencyPair: 'ADA/USD',
        fullPairName: 'Cardano/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    }
]

export const commodities = [
    {
        image: '/images/commodities/gold.png',
        currencyPair: 'XAU/USD',
        fullPairName: 'Gold/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/commodities/silver.png',
        currencyPair: 'XAG/USD',
        fullPairName: 'Silver/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/commodities/oil.png',
        currencyPair: 'WTI/USD',
        fullPairName: 'Crude Oil/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/commodities/petrolium.png',
        currencyPair: 'NG/USD',
        fullPairName: 'Natural Gas/USD',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/commodities/copper.png',
        currencyPair: 'HG/USD',
        fullPairName: 'Copper/USD',
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
        currencyPair: 'US 500',
        fullPairName: 'US SPX 500 Index',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/index/SQQQ.png',
        currencyPair: 'US 100',
        fullPairName: 'US Tech 100 Index',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/index/SQQQ.png',
        currencyPair: 'US 30',
        fullPairName: 'US Wall Street 30 Index',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/index/UKX.png',
        currencyPair: 'UK 100',
        fullPairName: 'UK 100 Index',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/index/NKY.png',
        currencyPair: 'JP 225',
        fullPairName: 'Japan 225 Index',
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
        currencyPair: 'AAPL',
        fullPairName: 'Apple',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/stocks/MSFT.png',
        currencyPair: 'MSFT',
        fullPairName: 'Microsoft',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/stocks/AMZN.png',
        currencyPair: 'AMZN',
        fullPairName: 'Amazon',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/stocks/GOOGL.png',
        currencyPair: 'GOOGL',
        fullPairName: 'Alphabet',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    },
    {
        image: '/images/stocks/TSLA.png',
        currencyPair: 'TSLA',
        fullPairName: 'Tesla',
        bid: 42.987,
        ask: 43.203,
        spread: '+0.35%',
        options: options,
        series: series
    }
]
