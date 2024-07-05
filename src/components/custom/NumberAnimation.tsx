'use client'

import { formatNumber } from '@/helpers'
import AnimatedNumber from 'animated-number-react'
import React from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
    targetNumber: number
    duration: number // duration in seconds
}

const NumberAnimation: React.FC<CounterProps> = ({
    targetNumber,
    duration
}) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <div ref={ref}>
            {inView ? (
                <AnimatedNumber
                    value={targetNumber}
                    formatValue={n => formatNumber(Math.round(n))}
                    duration={duration}
                />
            ) : (
                0
            )}
        </div>
    )
}

export default NumberAnimation
