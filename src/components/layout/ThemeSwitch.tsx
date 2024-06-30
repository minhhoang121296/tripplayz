'use client'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

export default function ThemeSwitch() {
    const t = useTranslations('')
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false) // New state to control dropdown visibility
    const { setTheme, resolvedTheme, themes, theme } = useTheme()
    const ref = useRef(null)
    useEffect(() => setMounted(true), [])
    useOnClickOutside(ref, () => setIsOpen(false))

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div ref={ref} className='relative inline-block text-left'>
            {isOpen && (
                <div className='bg-dropdown absolute right-0 mt-2 w-full origin-top-right rounded-md shadow-lg'>
                    <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                        aria-labelledby='options-menu'
                    >
                        {themes.map(themeItem => {
                            return (
                                <button
                                    key={themeItem}
                                    onClick={() => {
                                        setTheme(themeItem)
                                        setIsOpen(false)
                                    }}
                                    className={`text-sm hover:bg-dropdownHover block w-full px-4 py-2 text-left ${
                                        themeItem === theme
                                            ? 'bg-selected hover:bg-selected text-primary'
                                            : 'text-secondary'
                                    }`}
                                >
                                    {themeItem}
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
