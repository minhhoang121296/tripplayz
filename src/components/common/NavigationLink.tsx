'use client'

import { Link, pathnames } from '@/lib/navigation'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ComponentProps } from 'react'

export function NavigationLink<Pathname extends keyof typeof pathnames>({
    href,
    ...rest
}: ComponentProps<typeof Link<Pathname>>) {
    const selectedLayoutSegment = useSelectedLayoutSegment()
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
    const isActive = pathname === href

    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            href={href}
            style={{ fontWeight: isActive ? 'bold' : 'normal' }}
            {...rest}
        />
    )
}
