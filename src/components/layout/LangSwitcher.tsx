'use client'
import { optionsLanguage } from '@/constants'
import { sortByAlpha, toUpperCaseEachWord } from '@/helpers'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'

interface Props {
    onSelect: (lang: any) => void
}

const LangSwitcher = ({ onSelect }: Props) => {
    const pathname = usePathname()
    const urlSegments = useSelectedLayoutSegments()

    return (
        <div className='relative'>
            {sortByAlpha(optionsLanguage, 'code').map((lang, index) => {
                return (
                    <Link
                        key={index}
                        onClick={() => onSelect(lang)}
                        href={`/${lang.code}/${urlSegments.join('/')}`}
                    >
                        <button
                            lang={lang.code}
                            onMouseDown={e => {
                                e.preventDefault()
                            }}
                            className={`hover:bg-dropdownHover
                                flex w-full flex-row items-center
                                gap-2
                                 px-4 py-2 text-left text-sm text-black hover:bg-blueGray ${
                                     pathname === `/${lang.code}`
                                         ? 'bg-selected text-primary hover:bg-selected'
                                         : 'text-secondary'
                                 }`}
                        >
                            <img
                                src={lang.images}
                                alt={lang.country}
                                className='h-[24px] w-[24px] object-contain'
                            />
                            {toUpperCaseEachWord(lang.country)}
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}

export default LangSwitcher
