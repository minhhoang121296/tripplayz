'use client'
import { formatNumber } from '@/helpers'
import { useIncrementalFluctuation } from '@/hook/randomNumber'

interface IProps {
    initialValue: number
    fluctuationRange: number
    intervalMs: number
}

export const StockMarketSimulator = ({
    initialValue,
    fluctuationRange,
    intervalMs
}: IProps) => {
    const stockValue = useIncrementalFluctuation({
        initialValue,
        fluctuationRange,
        intervalMs
    })

    return <p>{formatNumber(stockValue)}</p>
}
