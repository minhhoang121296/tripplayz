import { useEffect, useState } from 'react'

interface Iprops {
    initialValue: number
    fluctuationRange: number
    intervalMs: number
}

export const useRandomFluctuation = ({
    initialValue,
    fluctuationRange,
    intervalMs
}: Iprops) => {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        const interval = setInterval(() => {
            const randomDelta =
                Math.floor(Math.random() * (fluctuationRange * 2)) -
                fluctuationRange
            setValue(prevValue => Math.max(0, prevValue + randomDelta)) // Ensure value is not less than 0
        }, intervalMs)

        return () => clearInterval(interval)
    }, [fluctuationRange, intervalMs])

    return value
}
