// src/types/animated-number-react.d.ts
declare module 'animated-number-react' {
    import { ComponentType } from 'react'

    interface AnimatedNumberProps {
        value: number
        formatValue?: (value: number) => string | number
        duration?: number
        begin?: number
        frameStyle?: (percentage: number) => React.CSSProperties
        stepPrecision?: number
        easing?: string
        onEnd?: () => void
    }

    const AnimatedNumber: ComponentType<AnimatedNumberProps>
    export default AnimatedNumber
}
