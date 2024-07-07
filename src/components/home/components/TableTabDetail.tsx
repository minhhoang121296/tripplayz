import { TRADING_TYPE } from '@/@types'
import { Button } from '@/components/ui/button'
import Sparkline from '@/components/ui/charts/Sparkline'
import {
    commodities,
    crytocurrency,
    forexdata,
    indexNumbers,
    stocks
} from '@/data'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useWindowSize } from 'react-use'

interface Iprops {
    type: TRADING_TYPE
}

export const TableTabDetail = ({ type }: Iprops) => {
    const t = useTranslations('')
    const { width } = useWindowSize()

    let dataHeader = {
        forex: {
            cfd: '220',
            cfdText: t('forex'),
            leverage: '1:20',
            minInvest: '$1'
        },
        crypto: {
            cfd: '10',
            cfdText: t('crypto'),
            leverage: '1:10',
            minInvest: '$1'
        },
        stock: {
            cfd: '220',
            cfdText: t('stocks'),
            leverage: '1:20',
            minInvest: '$1'
        },
        commodities: {
            cfd: '10',
            cfdText: t('commodities'),
            leverage: '1:200',
            minInvest: '$1'
        },
        etf: {
            cfd: '50',
            cfdText: t('etfs'),
            leverage: '1:20',
            minInvest: '$1'
        }
    }

    let curenheader = dataHeader[type]

    const renderTable = (type: TRADING_TYPE) => {
        switch (type) {
            case TRADING_TYPE.FOREX:
                return forexdata
            case TRADING_TYPE.CRYPTO:
                return crytocurrency
            case TRADING_TYPE.COMMODITIES:
                return commodities
            case TRADING_TYPE.ETF:
                return indexNumbers
            case TRADING_TYPE.STOCK:
                return stocks
            default:
        }
    }

    const returnHeader = () => {
        switch (type) {
            case TRADING_TYPE.FOREX:
                return t('forex')
            case TRADING_TYPE.CRYPTO:
                return t('crypto')
            case TRADING_TYPE.COMMODITIES:
                return t('commodities')
            case TRADING_TYPE.ETF:
                return t('etf')
            case TRADING_TYPE.STOCK:
                return t('stock')
            default:
        }
    }

    return (
        <>
            {width > 1024 && (
                <div className='flex w-full flex-col gap-10 rounded-lg bg-white  p-10 shadow-md'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row items-end gap-2'>
                            <span className='text-2xl font-bold'>
                                {curenheader.cfd}
                            </span>
                            <span className=''>
                                {t(curenheader.cfdText)} {t('stocks_cfd')}
                            </span>
                        </div>
                        <div className='flex flex-row items-end gap-2'>
                            <span className='text-2xl font-bold'>
                                {curenheader.leverage}
                            </span>
                            <span className=''>{t('leverages_up_to')}</span>
                        </div>
                        <div className='flex flex-row items-end gap-2'>
                            <span className='text-2xl font-bold'>
                                {curenheader.minInvest}
                            </span>
                            <span className=''>{t('minimum_investment')}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row'>
                            <div className='flex-[2]'>{t('name')}</div>
                            <div className='flex-1'>{t('Bid')}</div>
                            <div className='flex-1'>{t('Ask')}</div>
                            <div className='flex-[2]'>{t('1D_Change')}</div>
                            <div className='flex-[2] pl-10'>{''}</div>
                        </div>
                        <div className='flex flex-col'>
                            {renderTable(type)?.map((el, index) => (
                                <div
                                    className={cn(
                                        'flex flex-row items-center border-t py-6',
                                        index === 3 && 'border-b'
                                    )}
                                    key={index}
                                >
                                    <div className='flex flex-[2] flex-row gap-2'>
                                        <div className=''>
                                            <img
                                                src={el.image}
                                                alt={el.currencyPair}
                                                className='h-[42px] w-[52px] object-contain'
                                            />
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='font-bold'>
                                                {el.currencyPair}
                                            </span>
                                            <span className='text-smxm text-gray-400'>
                                                {el.currencyPair}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex-1 font-medium'>
                                        {el.bid}
                                    </div>
                                    <div className='flex-1 font-medium'>
                                        {el.ask}
                                    </div>
                                    <div className='flex flex-[2] flex-row items-center gap-3'>
                                        <span className='font-bold text-blue'>
                                            {el.spread}
                                        </span>
                                        <Sparkline
                                            series={el.series}
                                            options={el.options}
                                            width={'100%'}
                                            height={'48px'}
                                        />
                                    </div>
                                    <div className='flex flex-[2] flex-row gap-2.5 pl-10'>
                                        <Button
                                            size={'md'}
                                            className='w-full'
                                            variant={'secondaryOutline'}
                                        >
                                            {t('Sell')}
                                        </Button>
                                        <Button
                                            size={'md'}
                                            className='w-full'
                                            variant={'primaryOutline'}
                                        >
                                            {t('Buy')}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {width < 1024 && (
                <div className='flex w-full flex-col gap-10 rounded-lg'>
                    <div className='flex flex-row flex-wrap gap-2 px-5 py-5 '>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='font-bold'>{curenheader.cfd}</span>
                            <span className=''>
                                {t(curenheader.cfdText)} {t('stocks_cfd')}
                            </span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='font-bold'>
                                {curenheader.leverage}
                            </span>
                            <span className=''>{t('leverages_up_to')}</span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='font-bold'>
                                {curenheader.minInvest}
                            </span>
                            <span className=''>{t('minimum_investment')}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {renderTable(type)?.map((el, index) => (
                            <div
                                className={cn(
                                    'flex flex-row rounded-xl bg-white p-5 shadow-sm'
                                )}
                                key={index}
                            >
                                <div className='flex w-full flex-col gap-5'>
                                    <div className='flex flex-[2] flex-row gap-2'>
                                        <img
                                            src={el.image}
                                            alt={el.currencyPair}
                                            className='h-[42px] w-[52px] object-contain'
                                        />
                                        <div className='flex flex-col'>
                                            <span className='font-bold'>
                                                {el.currencyPair}
                                            </span>
                                            <span className='text-smxm text-gray-400'>
                                                {el.currencyPair}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex w-full flex-row justify-between'>
                                        <span className=' font-medium'>
                                            {el.bid}
                                        </span>
                                        <span className=' font-medium'>
                                            {el.ask}
                                        </span>
                                        <span className='font-semibold text-blue'>
                                            {el.spread}
                                        </span>
                                    </div>
                                    <Sparkline
                                        series={el.series}
                                        options={el.options}
                                        width={'100%'}
                                        height={'48px'}
                                    />
                                    <div className='flex flex-[2] flex-row gap-2'>
                                        <Button
                                            size={'md'}
                                            className='w-full'
                                            variant={'secondaryOutline'}
                                        >
                                            {t('Sell')}
                                        </Button>
                                        <Button
                                            size={'md'}
                                            className='w-full'
                                            variant={'primaryOutline'}
                                        >
                                            {t('Buy')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
