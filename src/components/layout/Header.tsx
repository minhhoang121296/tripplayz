'use client'
import { MenuButtonAction } from '@/@types'
import { Colors } from '@/assets/colors'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { dataNestedRoute, optionsLanguage } from '@/constants'
import { Link } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import { mdiMenuDown } from '@mdi/js'
import Icon from '@mdi/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import {
    useSelectedLayoutSegment,
    useSelectedLayoutSegments
} from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { IconBase } from '../custom/IconBase'
import { Button } from '../ui/button'
import LangSwitcher from './LangSwitcher'
import LangSwitcherMobile from './LangSwitcherMobile'

interface Props {
    locale: string
}
export const Header: FC<Props> = ({ locale }) => {
    const selectedLayoutSegment = useSelectedLayoutSegment()
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
    const { width, height } = useWindowSize()
    const [activeKey, setActiveKey] = useState(undefined)
    const [activeMenu, setActiveMenu] = useState<MenuButtonAction>('close')
    const [isScrolled, setIsScrolled] = useState(false)

    const t = useTranslations('')
    const urlSegments = useSelectedLayoutSegments()

    let langSlect = optionsLanguage.find(el => el.code == locale)

    useEffect(() => {
        if (width > 768) {
            setActiveMenu('close')
        }
        return () => {}
    }, [width])

    useEffect(() => {
        const handleScroll = () => {
            if (pathname == '/' && window.scrollY > 810) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const returnImage = () => {
        if (pathname == '/' && !isScrolled) {
            return '/images/app/logo-white.png'
        }
        if (pathname == '/' && isScrolled) {
            return '/images/app/logo-black.png'
        }
        if (pathname != '/') {
            return '/images/app/logo-black.png'
        }
        return '/images/app/logo-white.png'
    }

    return (
        <div
            className={cn(
                'header z-50 flex w-full flex-col border-[#818181] md:border-b',
                pathname == '/' ? 'backdrop-blur-lg' : 'bg-white-lightWhite',
                isScrolled ? 'bg-white-lightWhite' : 'backdrop-blur-lg'
            )}
        >
            <div className='mx-auto flex h-[60px] w-full flex-row items-center justify-between bg-transparent px-2.5 py-5 lg:container md:h-[100px] md:px-10'>
                <div className='flex flex-row items-center md:gap-[82px]'>
                    <Link lang={locale} href='/'>
                        <div className='flex flex-row items-center'>
                            <Image
                                src={returnImage()}
                                width={108}
                                height={20}
                                alt='logo'
                            />
                        </div>
                    </Link>
                    <div className=' hidden flex-row items-center gap-[42px] md:flex'>
                        {dataNestedRoute?.map((item, index) => (
                            <>
                                {pathname != `/` ? (
                                    <Link
                                        key={index}
                                        lang={locale}
                                        href={item.routePath as any}
                                        className={cn(
                                            'flex flex-row items-center font-medium ',
                                            pathname == `${item.routePath}`
                                                ? 'font-bold'
                                                : '',
                                            pathname == `${item.routePath}`
                                                ? 'text-blue'
                                                : 'text-black'
                                        )}
                                    >
                                        {t(item.name)}
                                    </Link>
                                ) : (
                                    <Link
                                        key={index}
                                        lang={locale}
                                        href={item.routePath as any}
                                        className={cn(
                                            'flex flex-row items-center font-medium ',
                                            pathname == `${item.routePath}`
                                                ? 'font-bold'
                                                : '',
                                            isScrolled
                                                ? 'text-black'
                                                : 'text-white'
                                        )}
                                    >
                                        {t(item.name)}
                                    </Link>
                                )}
                            </>
                        ))}
                    </div>
                </div>
                <div className='flex flex-row items-center gap-10'>
                    {activeMenu == 'close' && (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <a
                                    onClick={() => {
                                        if (width < 768) {
                                            setActiveMenu('language')
                                        }
                                    }}
                                    className='flex flex-row items-center gap-1'
                                >
                                    <Image
                                        src={langSlect?.images || ''}
                                        width={24}
                                        height={24}
                                        alt='eth'
                                    />
                                    <>
                                        {pathname == '/' ? (
                                            <Icon
                                                path={mdiMenuDown}
                                                color={
                                                    isScrolled
                                                        ? Colors.black[
                                                              'DEFAULT'
                                                          ]
                                                        : Colors.white
                                                }
                                                size={1}
                                            />
                                        ) : (
                                            <Icon path={mdiMenuDown} size={1} />
                                        )}
                                    </>
                                </a>
                            </DropdownMenuTrigger>
                            {width > 768 && (
                                <DropdownMenuContent>
                                    <LangSwitcher onSelect={lang => {}} />
                                </DropdownMenuContent>
                            )}
                        </DropdownMenu>
                    )}

                    {activeMenu == 'close' && (
                        <button
                            className='md:hidden'
                            onClick={() => {
                                setActiveMenu('menu')
                            }}
                        >
                            {pathname == '/' ? (
                                <IconBase
                                    icon='menu'
                                    size={24}
                                    color={
                                        isScrolled
                                            ? Colors.black['DEFAULT']
                                            : Colors.white
                                    }
                                />
                            ) : (
                                <IconBase
                                    icon='menu'
                                    size={24}
                                    color={Colors.blue['DEFAULT']}
                                />
                            )}
                        </button>
                    )}

                    {activeMenu != 'close' && (
                        <button
                            className='md:hidden'
                            onClick={() => {
                                setActiveMenu('close')
                            }}
                        >
                            <IconBase
                                icon='close'
                                size={24}
                                color={Colors.black['DEFAULT']}
                            />
                        </button>
                    )}

                    <div className='hidden flex-row gap-5 md:flex'>
                        <Button size={'sm'} variant={'whiteOutline'}>
                            {t('bt_login')}
                        </Button>
                        <Button size={'sm'} variant={'primaryShadow'}>
                            {t('bt_register')}
                        </Button>
                    </div>
                </div>
            </div>
            {activeMenu == 'menu' && (
                <div className='w-full bg-black-darkBlack'>
                    {dataNestedRoute?.map((item, index) => (
                        <Link
                            onClick={() => setActiveMenu('close')}
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

            {activeMenu == 'language' && (
                <div className='w-full bg-black-darkBlack'>
                    <LangSwitcherMobile locale={locale} onSelect={lang => {}} />
                </div>
            )}
        </div>
    )
}
