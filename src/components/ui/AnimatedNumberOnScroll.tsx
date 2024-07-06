import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedNumberOnScrollProps {
    startNumber: number
    targetNumber: number
    duration: number
}

const AnimatedNumberOnScroll: React.FC<AnimatedNumberOnScrollProps> = ({
    startNumber,
    targetNumber,
    duration
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const [number, setNumber] = useState<number>(startNumber)

    let rate = duration / 2

    useEffect(() => {
        if (inView) {
            let start: number | null = null
            const step = (timestamp: number) => {
                if (!start) start = timestamp
                const progress = timestamp - start
                const increment = Math.min(
                    (progress / rate) * (targetNumber - startNumber) +
                        startNumber,
                    targetNumber
                )
                setNumber(Math.floor(increment))
                if (progress < rate) {
                    window.requestAnimationFrame(step)
                }
            }
            window.requestAnimationFrame(step)
        }
    }, [inView, startNumber, targetNumber, rate])

    return (
        <p ref={ref}>{number.toLocaleString('en-US').replaceAll(',', ' ')}</p>
    )
}

export default AnimatedNumberOnScroll
