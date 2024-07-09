import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex gap-2.5 items-center justify-center whitespace-nowrap rounded-md font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-25',
    {
        variants: {
            variant: {
                default: 'bg-slate-900 text-slate-50 hover:bg-slate-900/90 ',
                primary: 'bg-blue text-white hover:bg-blue/90 ',
                primaryShadow:
                    'bg-blue text-white hover:bg-blue/90  drop-shadow-[0_5px_20px_rgba(0,85,255,0.25)]',
                primaryOutline:
                    'border border-blue bg-white text-blue hover:bg-blue hover:text-white',

                secondary: 'bg-magenta text-slate-900 hover:bg-slate-100/80',
                secondaryOutline:
                    'border border-magenta bg-white text-magenta hover:bg-magenta hover:text-white',

                black: 'bg-black text-white hover:bg-slate-100/80',
                blackShadow:
                    'bg-black text-white hover:bg-slate-100/80 drop-shadow-[0_5px_20px_rgba(0,0,0,0.25)]',

                whiteOutline:
                    'bg-white text-black hover:bg-slate-100/80 border border-black',
                tranparentOutline:
                    'border border-black bg-transparent text-black hover:bg-slate-100 hover:text-slate-900 font-semibold'
            },
            size: {
                default: 'h-10 px-4 py-2 text-sm',
                sm: 'h-10 rounded-lg px-6 py-2.5 text-base',
                md: 'h-[52px] rounded-lg px-9 py-4 text-base',
                iconMedium: 'h-12 w-12 rounded-full p-2'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
