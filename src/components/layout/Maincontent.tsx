'use client'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export const Maincontent = ({ children }: Props) => {
    return <main className='flex h-full w-full flex-col'>{children}</main>
}
