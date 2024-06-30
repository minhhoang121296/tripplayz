'use client'
import { Colors } from '@/assets/colors'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { dataNestedRoute } from '@/constants'
import { Link } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import { mdiMenuDown } from '@mdi/js'
import Icon from '@mdi/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useSelectedLayoutSegment } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { IconBase } from '../custom/IconBase'
import { Button } from '../ui/button'

interface Props {
    locale: string
}
export const Header: FC<Props> = ({ locale }) => {
    const selectedLayoutSegment = useSelectedLayoutSegment()
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
    const { width, height } = useWindowSize()
    const [activeKey, setActiveKey] = useState(undefined)
    const [activeMenu, setActiveMenu] = useState(false)
    const t = useTranslations('')

    useEffect(() => {
        if (width > 768) {
            setActiveMenu(false)
        }
        return () => {}
    }, [width])

    return (
        <div
            className={cn(
                'fixed top-0 z-50 flex w-full flex-col',
                pathname == '/' ? 'backdrop-blur-lg' : 'bg-white-lightWhite'
            )}
        >
            <div className='container mx-auto  flex h-[60px] w-full flex-row items-center justify-between bg-transparent  px-2 py-5'>
                <div className='flex flex-row items-center gap-10'>
                    <Link lang={locale} href='/'>
                        <div className='flex flex-row items-center'>
                            <Image
                                src={
                                    pathname == '/'
                                        ? '/images/app/logo-black.png'
                                        : '/images/app/logo-black.png'
                                }
                                width={108}
                                height={20}
                                alt='logo'
                            />
                        </div>
                    </Link>
                    <div className=' hidden flex-row items-center gap-3 md:flex'>
                        {dataNestedRoute?.map((item, index) => (
                            <Link
                                key={index}
                                lang={locale}
                                href={item.routePath as any}
                                className={cn(
                                    'flex flex-row items-center font-medium',
                                    pathname == `${item.routePath}`
                                        ? 'font-bold'
                                        : '',
                                    pathname != `/` &&
                                        pathname == `${item.routePath}`
                                        ? 'text-blue'
                                        : 'text-black'
                                )}
                            >
                                {t(item.name)}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <button
                                onClick={() => {}}
                                className='flex flex-row items-center gap-1'
                            >
                                <Image
                                    src={'/images/app/china.png'}
                                    width={24}
                                    height={24}
                                    alt='eth'
                                />
                                <Icon path={mdiMenuDown} size={1} />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent></DropdownMenuContent>
                    </DropdownMenu>

                    <button
                        className='md:hidden'
                        onClick={() => {
                            setActiveMenu(!activeMenu)
                        }}
                    >
                        {!activeMenu ? (
                            <IconBase
                                icon='menu'
                                size={24}
                                color={
                                    pathname == '/'
                                        ? Colors.black['DEFAULT']
                                        : Colors.blue['DEFAULT']
                                }
                            />
                        ) : (
                            <IconBase
                                icon='close'
                                size={24}
                                color={Colors.black['DEFAULT']}
                            />
                        )}
                    </button>

                    <div className='hidden flex-row gap-2 md:flex'>
                        <Button size={'lg'} variant={'outline'}>
                            {t('login')}
                        </Button>
                        <Button size={'lg'} variant={'primary'}>
                            {t('register')}
                        </Button>
                    </div>
                </div>
            </div>
            {activeMenu && (
                <div className='w-full bg-black-darkBlack'>
                    {dataNestedRoute?.map((item, index) => (
                        <Link
                            onClick={() => setActiveMenu(false)}
                            key={index}
                            lang={locale}
                            href={item.routePath as any}
                            className={cn(
                                'flex flex-row items-center border-b bg-black-darkBlack px-2.5 py-5 font-medium text-gray-lightGray',
                                pathname == `${item.routePath}`
                                    ? '  border-blue font-bold text-white'
                                    : 'border-white/10 '
                            )}
                        >
                            {t(item.name)}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
