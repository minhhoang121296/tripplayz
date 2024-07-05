import { useEffect, useState } from 'react'

interface Iprops {
    initialValue: number
    fluctuationRange: number
    intervalMs: number
}

export const useIncrementalFluctuation = ({
    initialValue,
    fluctuationRange,
    intervalMs
}: Iprops) => {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIncrement = 1
            setValue(prevValue => prevValue + randomIncrement)
        }, intervalMs)

        return () => clearInterval(interval)
    }, [fluctuationRange, intervalMs])

    return value
}