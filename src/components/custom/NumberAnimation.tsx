'use client'

import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
    targetNumber: number
    duration: number // duration in seconds
}

const NumberAnimation: React.FC<CounterProps> = ({ targetNumber, duration }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [count, setCount] = useState(0)

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null
        if (inView) {
            controls.start({ opacity: 1 })
            const stepTime = (duration * 1000) / targetNumber
            interval = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount < targetNumber) {
                        return Math.min(prevCount + Math.ceil(targetNumber / (duration * 10)), targetNumber)
                    } else {
                        if (interval) clearInterval(interval)
                        return prevCount
                    }
                })
            }, stepTime)
        }
        return () => {
            if (interval) clearInterval(interval)
        }
    }, [inView, targetNumber, duration, controls])

    return (
        <div ref={ref}>
            <motion.p
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{ fontVariantNumeric: 'tabular-nums' }}
            >
                {count.toLocaleString()}
            </motion.p>
        </div>
    )
}

export default NumberAnimation