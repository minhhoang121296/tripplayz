'use client'
import { optionsLanguage } from '@/constants'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'

interface Props {
    locale: string
    onSelect?: (lang: any) => void
}

const LangSwitcherMobile = ({ onSelect, locale }: Props) => {
    const pathname = usePathname()
    const urlSegments = useSelectedLayoutSegments()

    return (
        <div className='flex h-[192px] w-full flex-col overflow-y-auto'>
            {optionsLanguage.map((lang, index) => {
                return (
                    <Link
                        key={index}
                        onClick={() => onSelect && onSelect(lang)}
                        href={`/${lang.code}/${urlSegments.join('/')}`}
                    >
                        <button
                            lang={lang.code}
                            onMouseDown={e => {
                                e.preventDefault()
                            }}
                            className={cn(
                                'h-[64px] w-full ',
                                'flex flex-row items-center justify-between border-b bg-black-darkBlack px-2.5 py-5 font-medium text-gray-lightGray',
                                locale == lang.code
                                    ? '  border-blue font-bold text-white'
                                    : 'border-white/10 '
                            )}
                        >
                            <div className='flex flex-row items-center gap-2'>
                                <img
                                    src={lang.images}
                                    alt={lang.country}
                                    className='h-[24px] w-[24px] object-contain'
                                />
                                {lang.country}
                            </div>
                            {locale == lang.code && (
                                <CircleCheck className='h-6 w-6 text-green-400' />
                            )}
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}

export default LangSwitcherMobile
