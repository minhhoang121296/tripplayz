'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
    targetNumber: number
    duration: number
}

const Counter: React.FC<CounterProps> = ({ targetNumber, duration }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1 // Trigger when 10% of the element is visible
    })

    const [count, setCount] = useState(0)

    useEffect(() => {
        if (inView) {
            setCount(targetNumber)
        }
    }, [inView, targetNumber])

    return (
        <div ref={ref}>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: duration / 1000, ease: 'easeInOut' }}
                style={{ fontVariantNumeric: 'tabular-nums' }}
            >
                {count.toLocaleString()}
            </motion.h1>
        </div>
    )
}

export default Counter
